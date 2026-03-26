import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const { products, orders, currency } = useContext(ShopContext);

  return (
    
    <div className='border-t pt-16'>
        <div className='text-2xl'>
          <Title text1={'MY'} text2={'ORDERS'}/>
        </div>

        <div>
          {
           orders?.length > 0 ? (
            orders.map((order,index) => (

              <div key={index}>
              {order.items.map((item,i) => {

                const product = products.find(p => p.id == item.productId);
                if (!product) return null;

                return (        
               <div key={`${index}-${i}`} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                 <div className='flex items-start gap-6 text-sm'>
                  <img className='w-16 sm:w-20' src={product.image[0]} alt="" />
                  <div>
                    <p className='sm:text-base font-medium'>{product.name}</p>
                    <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                      <p className='text-lg'>{currency}{product.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Weight: {item.weight}</p>
                      
                      <div>
                        <p className='mt-2'>Date: <span className='text-gray-400'>{order.date}</span></p>
                      </div>
                    </div>

                    <div className='flex items-center gap-4 ml-auto'>
                      <div className='flex items-center gap-2'>
                        <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                        <p className='text-sm md:text-base'>Ready to Ship</p>
                      </div>
                      <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
        ))
      ) : (
        <p className='text-gray-500 mt-5'>No Orders yet</p>
      )
      }
        </div>

    </div>
  )
}

export default Orders
