import React from 'react'
import iPhone17pro from '../../../assets/images/iPhone17p.png'
import { NavLink } from 'react-router-dom'
import iphone_air from '../../../assets/images/iphone_air.png'
import thinnest_iphone from '../../../assets/images/thinnest_iphoneair.png'
import iphone_models from '../../../assets/images/iphone_models.png'
import Mac from '../../../assets/images/mac.png'
import { useTranslation } from 'react-i18next'

export default function Section() {
  const [ t ] = useTranslation()
  return (
    <div>
      <div className='mt-20 px-5 md:px-10'>
        <h2 className='text-[32px] md:text-[40px] font-bold'>{t("title_8")}</h2>
        <p className='text-[24px] font-medium md:text-[32px]'>{t("title_9")}</p>
        <div className='flex justify-center gap-10 mt-10 mb-2'>
          {/* Card 1 */}
          <div className='flex flex-col items-center duration-500 hover:scale-105 hover:underline'>
             <img className='w-24 h-24 ' src={iphone_models} alt="iphone" /> 
             <h3 className='text-[16px] font-medium'>iPhone</h3>
          </div>
          {/* Card 2 */}
          <div className='flex flex-col items-center duration-500 hover:scale-105'>
             <img className='w-30 h-24 mb-1 ' src={Mac} alt="airpods" />
             <h3 className='text-[8px] md:text-[16px] font-medium '>Mac</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
