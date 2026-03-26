import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import assets from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Every celebration deserves something special — our freshly baked, delicious cakes bring joy to birthdays, anniversaries, and happy moments.</p>
        <p>Born from a passion for baking, we use high-quality ingredients, creative designs, and a personal touch in every cake we make.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is to make every moment sweeter with delicious, freshly baked cakes while delivering joy, quality, and creativity in every celebration.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-8 md:px-14 py-6 sm:py-18 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>We ensure every cake meets the highest standards — from fresh, premium ingredients to flawless baking and creative designs. Each cake is crafted with care, so you get taste, freshness, and perfection in every bite.</p>
        </div>
        <div className='border px-8 md:px-14 py-6 sm:py-18 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>Ordering your favorite cake is easy and hassle-free. With quick online ordering, flexible delivery options, and timely service, we make sure your celebrations are stress-free and sweet.</p>
          </div>
          <div className='border px-8 md:px-14 py-6 sm:py-18 flex flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>Our friendly team is always ready to help, ensuring your orders are smooth, your questions are answered, and your celebrations are truly memorable.</p>
          </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About
