import React from 'react'
import {  useState } from 'react'
import { CgSidebar } from 'react-icons/cg';
import { CgClose } from 'react-icons/cg';


import { Link } from 'react-router-dom';

export default function Header() {
 const [ menu, setMenu ] = useState(false)
  return (
    <div>
      <header className='fixed w-full bg-black/90 flex justify-between z-50 gap-10 px-5  items-center h-16    text-white backdrop-blur-xl'>
        <h2 className='text-[20px] font-bold'>iPhone 17 Pro</h2>
        {/* Navbar */}
       <div className='flex gap-8 text-[16px]'>
        <button>Explore</button>
        <button className='bg-blue-600 text-white p-2 rounded-2xl'>Buy</button>
       </div>
         <div className='cursor-pointer' onClick={() => setMenu(!menu)}>
          {menu ? <CgClose className='w-6 h-6 font-bold'/> : <CgSidebar className='w-6 h-6 font-bold'/>} 
        </div>
        
      {/* Menu */}
      
      <div className={`fixed bg-stone-700 backdrop-blur-md top-16 right-0 h-screen text-white w-1/4 transition-transform duration-500 ease-in-out ${menu ? "translate-x-0" : "translate-x-full"}`}>
        <ul className='flex flex-col items-center gap-6 text-[16px] pt-3'>
          <li>
            <Link to='/iphone'>Home</Link>
          </li>
          <li>
            <Link to='/explore'>Explore</Link>
          </li>
          <li>
            <Link to='/store'>Store</Link>
          </li>
          <li>
            <Link to='/airpods'>Airpods</Link>
          </li>
        </ul>
      </div>
      

                
       
      </header>
    </div>
  )
}
