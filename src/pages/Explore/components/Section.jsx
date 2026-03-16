import React from 'react'
import Iphone17pm from '../../../assets/images/iphone17pm.png'
import iphonepropic from '../../../assets/images/iphone_17_pic.png'
import { Link } from 'react-router-dom'

export default function Section() {
  return (
    <div className='flex flex-col items-center  bg-black overflow-hidden  text-white pb-24 '>
      <img src={iphonepropic} className=' pt-16 h-2/3 md:w-1/2' /> 
      <div className='flex flex-col md:flex-row w-full justify-center'>
       <div className='flex flex-col items-center'>
         <h2 className=' font-medium text-[16px] md:text-[32px]'>Get your iPhone 17 Pro</h2>
        <h1 className='text-[24px] md:text-[40px] font-bold bg-linear-to-r from-gray-400 to-cyan-950 bg-clip-text text-transparent mr-6 md:mr-8'>Comes with A 19 pro chip</h1>
       </div>
        <div className=' bg-gray-500/60 flex  px-3 items-center py-1 md:px-6 md:py-2 rounded-none md:rounded-full '>
        <h2 className='font-bold text-white mr-6'>From 1099$ <br /> or $45.79/mo. for 24 months</h2>
        <button className='text-[12px] md:text-[16px] bg-blue-600  font-normal px-4 py-4 rounded-full'><Link to='/iphone'>Learn more</Link></button>
      </div>
      </div>
    </div>
  )
}
