import React from 'react'
import iPhone17pro from '../../../assets/images/iPhone17p.png'
import { NavLink } from 'react-router-dom'
import iphone_air from '../../../assets/images/iphone_air.png'
import thinnest_iphone from '../../../assets/images/thinnest_iphoneair.png'

export default function Section() {
  return (
    <div>
      <div className='grid justify-center mt-9'>
        <h2 className='text-[32px] font-bold mb-2.5 text-center pt-10'>Get the latest iPhone from our store</h2>
        <div className='flex justify-center'>
          <img className=' mb-1 w-1xl' src={iPhone17pro} alt="iPhone 17 pro" />
          <div className='flex flex-col'>
            <h2 className='text-[24px] font-bold mb-4'>Price starts <span className='text-gray-500'>from 799$ to 1199$ </span></h2>
            <div className='border border-black/50 p-6 rounded-2xl '>
              <p className='font-bold mb-2'>iPhone 17 comes with 256 and 512gb storage, <br />
                stronger A19 chip, 48mp camera
              </p>
              <div className='flex justify-center gap-4'>
                <button className='bg-blue-600 p-2 rounded-2xl text-white'><NavLink to='/iphone'>Explore</NavLink></button>
                <button className='bg-blue-600 p-2 rounded-2xl text-white'>Buy</button>
              </div>
            </div>
            <div className='border border-black/50 p-6 mt-8 rounded-2xl'>
            <p className='mb-2 font-bold'>iPhone 17 pro comes with Apple 19 pro chip & 12gb ram, <br />
            6.3-inch 120hz ProMotion display, triple 48mp camera
            </p>
            <div className='flex justify-center gap-4'>
              <button className='bg-blue-600 p-2 rounded-2xl text-white'><NavLink to='/iphone'>Explore</NavLink></button>
              <button className='bg-blue-600 p-2 rounded-2xl text-white'>Buy</button>
            </div>

            </div>
          </div>
        </div>
      </div>
       <div className='flex flex-col items-center'>
              <img src={iphone_air} className='w-3xl' alt="iphone_air" />
              <h2 className=' text-[40px] font-medium'>iPhone 17 Air</h2>
              <p className='text-[32px] font-normal pb-4'>The thinnest iPhone ever</p>
              <button className='bg-blue-600 text-white rounded-2xl p-2 hover:bg-blue-600/50'>Learn more</button>
      </div>
    </div>
  )
}
