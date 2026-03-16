import React from 'react'
// imported images
import Iphone17pro from '../../../../../assets/images/iphone17pro.webp'
import blue_v from '../../../../../assets/images/blue-v.png'
import orange_v from '../../../../../assets/images/orange-v.png'
import silver_v from '../../../../../assets/images/silver_v.png'
import a19pro from '../../../../../assets/images/a19pro.png'
// react-icons
import { CgClose } from "react-icons/cg";
import { BiMessageAltAdd } from "react-icons/bi";
import { CgChevronUp } from "react-icons/cg";
import { CgChevronDown } from "react-icons/cg";
// hooks
import { useState, useRef, useEffect } from 'react'

export default function HeroSection() {
     // For colors
    const colors = [
        {
        image: Iphone17pro
        },
        {
        title: "Cosmic orange",
        image: orange_v,
        color: "bg-orange-600"
        },
        {
        title: "Deep Blue",
        image: blue_v,
        color: "bg-blue-950"
        },
        {
        title: "Silver",
        image: silver_v,
        color: "bg-sky-100"
        },
        {
          image: a19pro
        }
        
    ]




    const [ button, setButton ] = useState(false)
    const [ open, setOpen ] = useState(false)
    const [ color, setColor ] = useState(colors[0]) 
       
  

    
    // open button
    const handleOpen = () => {
      setOpen(prev => !prev)
      setColor(colors[4])
      setButton(false)
    }

 

    // for colors button
    const handleButton = () => {
        setButton(prev => !prev)
    }

    // Close button
    const handleClose = () => {
      setButton(false)
      setOpen(false)
      setColor(colors[0])
    }
    
    
    // handleDown
    const handleDown = () => {
      setOpen(true)
      setColor(colors[4])
      setButton(false)
    }

    // handleUp
    const handleUp = () => {
      setButton(true)
      setColor(colors[0])
      setOpen(false)
    }
 

    
 
  return (
    <div className='pt-16'>
      {/* Title */}
      <div className='bg-gray-600 p-2 text-center  text-white'><h2>Get up to $195–$685 in credit toward iPhone 17 Pro when you trade in iPhone 13 or higher.</h2></div>
      {/* Hero banner */}
      <div className='relative flex justify-center pt-10 bg-black'>
        <img className={`w-3xl ml-36`} src={color.image} alt="herobanner" />
        {/* Up and down buttons */}
         <div className={`${ open ? "block" : "hidden"}`}>
           <CgChevronUp onClick={handleUp} className='text-white w-6 h-6 absolute left-10 top-20 bg-gray-600 rounded-full'/>
          <CgChevronDown onClick={handleDown} className='text-white w-6 h-6 absolute left-10 top-24 mt-6 bg-gray-600 rounded-full'/>
         </div>
        {/* Buttons */}
        <div  className={`absolute left-20 `}>
          {button && (
                <div className='bg-gray-600 p-4 rounded-3xl mb-6 ml-6'>
                    <h2>Colors. <br /> Choose an option you want to buy <br /> iPhone 17 Pro shown in <span>{color.title}</span></h2>
                    {/* color buttons */}
                   <div className={`flex ml-6 gap-6 pt-2 transition-all duration-700 ${button ? "opacity-100" : "opacity-0"}`}>
                     {colors.map((c, i) => (
                        <div className='flex' key={i}>
                            <button onClick={() => setColor(c)} className={`p-2 rounded-full hover:scale-110 hover:duration-500 ${c.color}`}></button>
                        </div>
                    ))}
                   </div>
                </div>
            )}
            <div className='flex flex-col gap-8'>
              <button onClick={handleButton} className={`bg-gray-600 text-white cursor-pointer p-2 font-bold rounded-3xl w-16 ml-6 ${button ? "hidden" : ""}`}> {color.color} Colors</button>
            <button onClick={handleOpen} className={`text-white bg-gray-600 cursor-pointer p-2 font-bold rounded-3xl ml-6 ${open ? "hidden" : ""}`}>Stronger Apple 19 Pro</button>
            </div>
            {open && (
              <div className={`bg-gray-600 p-3 mt-6 rounded-full w-64 ml-6`}>
                <h2 className='text-white font-bold'>The stronger A19 Pro chip <br /> for Pro edition of iPhone</h2>
              </div>
            )}
         </div>
         {/* Close button */}
         <div onClick={handleClose} className={`text-white cursor-pointer  ${button || open ? "block" : "hidden"}`}>
         <CgClose className='bg-gray-600 rounded-full font-bold w-8 h-8 p-2'/>
         </div>
      
      </div>
         
      
    </div>
  )
}
