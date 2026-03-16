import React from 'react'
// Pictures that I imported
import iPhone17p from '../../../assets/images/iPhone17_pro.png'
import iPhone_air from '../../../assets/images/iPhone_air.png'
import { Link } from 'react-router-dom'

export default function Section() {
  return (
    <div>
      <div className='pt-20  '>
        <h2 className='ml-12 text-[64px] font-bold'>iPhone</h2>
      </div>
      <div className='flex justify-center gap-10  cursor-pointer'>
        {/* Card 1 */}
         <div className='flex flex-col items-center '>
          <Link to='/iphone/17pro'><img className='w-10 pb-1 hover:scale-105 ' src={iPhone17p}  alt="iphone" /></Link>
            <p className='text-[16px] text-gray-900 hover:text-black font-normal'>iPhone 17 Pro</p>
            <span className='text-[14px] text-amber-600 font-medium'>New</span>
         </div>
         {/* Card 2 */}
         <div className='flex flex-col items-center'>
          <Link to='/'><img className='w-10 pb-1' src={iPhone_air} alt="air" /></Link>
          <p className='text-[16px] font-normal'>iPhone Air</p>
          <span className='text-[14px] text-amber-600'>New</span>
         </div>
        </div>
    </div>
  )
}
