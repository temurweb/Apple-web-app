import React from 'react'
import { Link } from 'react-router-dom'
import iphone_models from '../../../assets/images/iphone_models.png'
import Airpods from '../../../assets/images/Airpods_max.png'
import iphone_17_e from '../../../assets/images/iPhone_17_air.png'
import {  useTranslation } from 'react-i18next'

export default function Section() {
const { t, i18n } = useTranslation()

  return (
    <div>
      <div className='flex flex-col pt-10  items-center bg-gray-200'>
        <h1 className='text-[24px] font-medium md:text-[40px] md:font-bold pt-10'>{t("iPhone")}</h1>
        <p className='text-[16px] md:text-[24px] font-normal md:font-medium text-center'>{t("title_1")}</p>
        <div className='flex gap-6'>
            <button className='mt-6 p-2 rounded-full bg-blue-600/80 text-white hover:bg-blue-600/60 '><Link to='/iphone'>{t("button_1")}</Link></button>
            <button className='border border-blue-600 mt-6 p-2 rounded-full text-blue-600/80 hover:bg-blue-600 hover:text-white'>{t("button_2")}</button>
        </div>
        <img src={iphone_models} alt="iphone models" />
        <div className='p-2 bg-white w-full ' ></div>
       <div className='flex flex-col items-center'>
        <h1 className=' mt-10 text-[24px] md:text-[40px] font-bold'>Airpods max</h1>
        <p className='font-normal md:font-medium px-6 text-[16px] md:text-[24px] text-center'>{t("title_2")}</p>
        <div className='flex gap-6'>
          <button className='bg-blue-600 mt-6 p-2 rounded-full text-white hover:bg-blue-600/60 hover:text-white'><Link to='/airpods'>{t("button_1")}</Link></button>
          <button className='border border-blue-600 mt-6 p-2 rounded-full text-blue-600/80 hover:bg-blue-600 hover:text-white'>{t("button_2")}</button>
        </div>
        <img className='pt-10 w-1xl px-6' src={Airpods} alt="airpods_max" />
      </div>
      <div className='p-2 bg-white w-full mt-10'></div>
      </div>
      <div className='bg-gray-200 flex flex-col items-center pt-10'>
        <h1 className='text-[24px] md:text-[40px] font-semibold'>iPhone 17e</h1>
        <p className='text-[16px] md:text-[24px] font-medium'>{t("title_3")}</p>
        <div className='flex gap-6'>
          <button className='bg-blue-600   mt-6 p-2 rounded-full text-white hover:bg-blue-600/60  '>{t("button_1")}</button>
          <button className='border border-blue-600 mt-6 p-2 rounded-full text-blue-600/80 hover:bg-blue-600 hover:text-white'>{t("button_2")}</button>
        </div>
        <img src={iphone_17_e} alt="iphone" />
      </div>
      <div className='p-2 bg-white w-full '></div>
    </div>
  )
}
