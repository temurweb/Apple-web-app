import React from 'react'
import { NavLink } from 'react-router-dom' 
import { Link } from 'react-router-dom'
import icon from '/apple.svg'
import { useTranslation } from 'react-i18next'
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { HiChevronUp } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState(false)
  const location = useLocation()
  const isExplore = location.pathname === "/explore"
  const isIphone17pro = location.pathname === "/iphone/17pro"
  return (
    <div className='relative'>
      <header className={`flex justify-between md:justify-center text-[12px] px-5 md:px-10 items-center h-16 md:h-10 fixed z-50 top-0 w-full  backdrop-blur-md ${isExplore ? "bg-black/50 text-white" : "bg-white/50"} && ${isIphone17pro ? "hidden" : ""}`}>
        <Link to='/'><img className={`w-6 mr-0 md:mr-8 ${isExplore ? "invert" : ""} ${open ? "hidden" : ""} `} src={icon} alt="icon" /></Link>
        {/* Responsive for desktop */}
        <ul className='hidden md:flex gap-8 font-normal backdrop-blur-md md:backdrop-blur-none'>
            <li><NavLink className={({isActive}) => isActive ? "text-gray-50 font-semibold" : ""} to='/explore'>{t("Explore")}</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? "text-gray-500 font-semibold" : ""} to='/store'>{t("Store")}</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? "text-gray-500 font-semibold" : ""} to='/iphone'>{t("iPhone")}</NavLink></li>
            <li><NavLink className={({isActive}) =>  isActive ? "text-gray-500 font-semibold" : ""} to='/airpods'>{t("Airpods")}</NavLink></li>
        </ul>
        {/* Responsive for mobile */}
        <div className={`flex flex-col items-center absolute top-16 left-0 py-6  w-full h-screen text-[32px]  gap-10 font-bold  backdrop-blur-xl transition-transform duration- ${isExplore ? "bg-black/80 backdrop-blur-md" : "bg-white/80"} && ${open ? "translate-y-0" : "translate-y-full"}`}>
          <ul className=''>
            <li><NavLink className={({isActive}) => isActive ? "text-gray-500 font-semibold" : ""} to='/explore'>{t("Explore")}</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? "text-gray-500 font-semibold" : ""} to='/store'>{t("Store")}</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? "text-gray-500 font-semibold" : ""} to='/iphone'>{t("iPhone")}</NavLink></li>
            <li><NavLink className={({isActive}) =>  isActive ? "text-gray-500 font-semibold" : ""} to='/airpods'>{t("Airpods")}</NavLink></li>
        </ul>
        <div className={`flex gap-5 justify-center`}>
          <button className={`${i18n.language === "en" ? "text-gray-600" : ""}`} onClick={() => i18n.changeLanguage("en")}>ENG</button>
        <button className={`${i18n.language === "uz" ? "text-gray-600" : ""}`} onClick={() => i18n.changeLanguage("uz")}>UZ</button>
        </div>
        </div>
    
    {/* Language switcher */}
    <div className='relative hidden md:flex md:flex-col items-center'>
      <button className='flex gap-2 ml-8' onClick={() => setLang(!lang)}>
      {t("Lang_button")}
      {lang ? <HiChevronUp className='w-3 mt-1'/> : <HiChevronDown className='w-3 mt-1'/>}
    </button>
    {lang &&
    <div className={`flex flex-col items-center absolute top-7.5   backdrop-blur-md ml-8 w-full ${isExplore ? "bg-black/50" : "bg-white/60"}`}  >
      <button className={`font-bold ${i18n.language === "en" ? "text-gray-600" : ""}`} onClick={() => i18n.changeLanguage("en")}>ENG</button>
      <button className={`font-bold ${i18n.language === "uz" ? "text-gray-600" : ""}`} onClick={() => i18n.changeLanguage("uz")}>UZ</button>
    </div>
    }
    </div>
   
      {/* Icons */}
      <div className='md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
       {open ? <CgClose className='h-8 w-8 font-bold'/> : <FiMenu className='h-8 w-8 font-bold'/> }
      </div>
      </header>
    </div>
  )
}
