import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id, image, name, price}) => {

   const {currency} = useContext(ShopContext);
   return (
    <Link className='text-gray-700 cursor-pointer focus:outline-none focus:ring-0 active:bg-transparent' to={`/product/${id}`}>
        <div className='overflow-hidden rounded'>
            <img className="h-48 object-cover transition-transform duration-300 rounded hover:scale-105" src={image} alt={name} />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
