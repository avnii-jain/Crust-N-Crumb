import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { backendUrl } from '../App'

const Add = ({token}) => {

  const [image1,setImage1] = useState(false);
  const [image2,setImage2] = useState(false);
  const [image3,setImage3] = useState(false);  
  const [image4,setImage4] = useState(false);

  const [name,setName] = useState("");
  const [description, setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [category, setCategory] = useState("Eggless");
  const [subcategory, setSubcategory] = useState("Vanilla");
  const [bestseller, setBestSeller] = useState(false);
  const [weights, setWeights] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    console.log("Form submitted");
    

    try{
      const formData = new FormData();

      formData.append("name",name);
      formData.append("description",description);
      formData.append("price",price);
      formData.append("category",category);
      formData.append("subcategory",subcategory); 
      formData.append("bestseller",bestseller);
      formData.append("weights",JSON.stringify(weights));

      image1 && formData.append("image1",image1);
      image2 && formData.append("image2",image2);
      image3 && formData.append("image3",image3);
      image4 && formData.append("image4",image4);

      const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}});

      console.log(response.data);
      console.log(token);

    } catch(error){
      console.log("Error:" ,error);
      console.log("Response:", error.response);
      console.log("Data:", error.response?.data);
      console.log("Message:", error.message);
                  
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20 h-15 mt-2 ml-2' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id='image1' hidden />
          </label>

          <label htmlFor="image2">
            <img className='w-20 h-15 mt-2 ml-2' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id='image2' hidden />
          </label>

          <label htmlFor="image3">
            <img className='w-20 h-15 mt-2 ml-2' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id='image3' hidden />
          </label>

          <label htmlFor="image4">
            <img className='w-20 h-15 mt-2 ml-2' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id='image4' hidden />
          </label>

        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-3 w-full sm-gap-8'>

        <div>
          <p className='mb-2'>Product category</p>
          <select onChange={(e)=>setCategory(e.target.value)} className='w-full px-2 py-2'>
            <option value="Egg">Egg</option>
            <option value="Eggless">Eggless</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Subcategory</p>
          <select onChange={(e)=>setSubcategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Vanilla">Vanilla</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Mango">Mango</option>
            <option value="Butterscotch">Butterscotch</option>
            <option value="Black Forest">Black Forest</option>
            <option value="White Forest">White Forest</option>
            <option value="Cheesecake">Cheesecake</option>
            <option value="Rasmalai">Rasmalai</option>
            <option value="Strawberry">Strawberry</option>
            <option value="Rainbow">Rainbow</option>
            <option value="Milk Cake">Milk Cake</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='25' />
        </div>
      </div>

      <div>
        <p className='mb-2'>Product Weight</p>
       <div className='flex gap-2'>
        <div  onClick={()=>setWeights(prev => prev.includes("0.5 Kg") ? prev.filter( item => item !== "0.5 Kg") : [...prev,'0.5 Kg'])}>
          <p className={`${weights.includes("0.5 Kg") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 mb-2 cursor-pointer`}>0.5 Kg</p>
        </div>

        <div  onClick={()=>setWeights(prev => prev.includes("1.0 Kg") ? prev.filter( item => item !== "1.0 Kg") : [...prev,'1.0 Kg'])}>
          <p className={`${weights.includes("1.0 Kg") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 mb-2 cursor-pointer`}>1.0 Kg</p>
        </div>

        <div onClick={()=>setWeights(prev => prev.includes("2.0 Kg") ? prev.filter( item => item !== "2.0 Kg") : [...prev,'2.0 Kg'])}>
          <p className={`${weights.includes("2.0 Kg") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 mb-2 cursor-pointer`}>2.0 Kg</p>
        </div>

        <div onClick={()=>setWeights(prev => prev.includes("3.0 Kg") ? prev.filter( item => item !== "3.0 Kg") : [...prev,'3.0 Kg'])}>
          <p className={`${weights.includes("3.0 Kg") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 mb-2 cursor-pointer`}>3.0 Kg</p>
        </div>
      </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={() => setBestSeller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" />
        <label className='cursor-pointer' htmlFor="bestseller">Add to Bestseller</label>
      </div>

      <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>

    </form>
  )
}

export default Add
