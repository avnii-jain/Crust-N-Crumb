import React from 'react'
import { toast } from 'react-toastify';

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe Now!</p>
      <p className='text-gray-500 mt-3'>
        Stay in the sweet loop! Subscribe to our newsletter for the latest cake creations, exclusive offers, and tips to make every celebration extra special.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input 
          className='w-full sm:flex-1 outline-none' 
          type="email" 
          placeholder='Enter your Email' 
          id="newsletter-email"
          />
        <button 
          onClick={()=>{
            const email = document.getElementById("newsletter-email").value;
            const isValidEmail = /\S+@\S+\.\S+/.test(email);
            
            isValidEmail ? 
            toast.success("Subscribed successfully! ✅")
            : toast.error("Please enter your email.")
          }}
          className='bg-black text-white text-xs px-10 py-4' 
          type='button'
          >SUBSCRIBE
          </button>
      </form>

    </div>
  );
}

export default NewsletterBox
