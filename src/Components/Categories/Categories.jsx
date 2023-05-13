import React from 'react'
import useAos from '../../hooks/useAos'

export default function Categories() {


  const motion = useAos()

  return (
    <div className=' pt-32   sm:px-8 xl:px-44 w-full' data-aos="fade-up" data-aos-duration="2000">
      <div className='relative  flex flex-col sm:flex-row sm:justify-evenly items-center  p-4 sm:px-8 '>
        <div className='md:px-8 flex flex-col items-start justify-around  z-10 '>
          <h1 className='text-white text-2xl mt-4 font-[IRANSans] lg:text-4xl'>
            نمونه کار ها
          </h1>
          <p className=' sm:w-full   text-base  text-white mt-6 font-[IRANSans2] text-justify'>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیمهم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم</p>
          <button className='small:mx-2  py-2 px-4 rounded-3xl bg-main-gold text-main-color  text-sm mt-8'>مشاهده  نمونه کار ها</button>
        </div>
        <img className=' md:hidden  z-10 mt-4' src="./src/assets/images/categories-sm.png" alt="" />
        <img className=' md:block hidden w-1/2  z-10' src="./src/assets/images/categories-lg.png" alt="" />
      </div>
    </div>
  )
}
