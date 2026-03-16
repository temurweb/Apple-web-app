import React from 'react'
import { Link } from 'react-router-dom'
import macbook_neo from '../../../assets/images/macbook_neo.png'
import ipad_m4 from '../../../assets/images/ipad_m4.png'
import iphone_17promax from '../../../assets/images/iphone17promax.png'
import iwatch11 from '../../../assets/images/iwatch11.png'
import apple from '../../../assets/images/apple.svg'
import { useTranslation } from 'react-i18next'

export default function Cards() {
 const { t, i18n } = useTranslation()
  return (
    <div>
      {/* Container */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md: px-0 md:px-5'>
        {/* Card 1 */}
        <div className='bg-linear-to-r from-blue-200 to-blue-300 flex flex-col items-center pt-6 mb-1'>
          <h2 className='text-[24px] font-medium'>Macbook Neo</h2>
          <p className='text-[16px] md:text-[20px]  font-normal pb-2'>{t("title_4")}</p>
           <div className='flex gap-6 mb-4'>
          <button className='bg-blue-600 text-white p-2 rounded-full  hover:bg-blue-600/60'>{t("button_1")}</button>
          <button className='border border-blue-600 text-blue-600/80 p-2  rounded-full hover:bg-blue-600 hover:text-white'>{t("button_2")}</button>
          </div>
          <img src={macbook_neo} alt="macbook_neo" />
        </div>
        {/* Card 2 */}
        <div className='flex flex-col items-center pt-6 bg-linear-to-b from-blue-300 to-blue-200  mb-1'>
        <h2 className='text-[24px]'>iPad <span className='text-cyan-950'>air</span></h2>
        <p className='text-[16px] md:text-[20px] font-normal mb-2'>{t("title_5")}</p>
        <div className='flex gap-6 mb-4'>
          <button className='bg-blue-600 text-white p-2 rounded-full  hover:bg-blue-600/60'>{t("button_1")}</button>
          <button className='border border-blue-600 text-blue-600/80 p-2  rounded-full hover:bg-blue-600 hover:text-white'>{t("button_2")}</button>
        </div>
         <img src={ipad_m4} alt="ipad_m4" />
        </div>
        {/* Card 3 */}
        <div className='flex flex-col items-center bg-black pt-6'>
          <h2 className='text-white text-[24px]'>iPhone 17 Pro</h2>
          <p className='text-white text-[16px] md:text-[20px]'>{t("title_6")}</p>
          <div className='flex gap-6 pb-4 mt-2'>
            <button className='bg-blue-600 text-white p-2 rounded-full  hover:bg-blue-600/60 '>{t("button_1")}</button>
            <button className='border border-blue-600 text-blue-600/80 rounded-3xl p-2'>{t("button_3")}</button>
          </div>
          <img className='' src={iphone_17promax} alt="iphone17pm" />
        </div>
        {/* Card 4 */}
        <div className='flex flex-col items-center pt-6 bg-linear-to-r from-gray-200 to-gray-400'>
          <div className='flex '>
            <img className='w-6' src={apple} alt="" />
            <h2 className='text-[24px] font-normal'><span className='font-bold mr-1'>WATCH</span>SERIES 11</h2>
          </div>
          <p className='text-[16px] md:text-[20px]'>{t("title_7")}</p>
          <div className='flex gap-6 pb-4 mt-2'>
            <button className='bg-blue-600 text-white p-2 rounded-full hover:bg-blue-600/60'>{t("button_1")}</button>
            <button className='border border-blue-600 rounded-3xl text-blue-600 p-2 hover:bg-blue-600 hover:text-white'>{t("button_3")}</button>
          </div>
          <img src={iwatch11} alt="applewatch11" />
        </div>
      </div>
    </div>
  )
}
