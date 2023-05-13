import React, { useEffect, useState } from 'react'


export default function Header() {

  


    return (
        <div className='header  w-full relative sm:px-8 xl:px-20'>
            
            <div className='w-full  relative    h-[766px] md:h-[514px] flex flex-col md:flex-row items-center justify-around bg-cover bg-no-repeat bg-center  '>
                <img className='w-full h-[514px] hidden md:block absolute top-0 left-0 ' src="./src/assets/polygons/lg-Header.png" alt="" />
                <img className='w-full h-full  md:hidden block absolute top-0 left-0 ' src="./src/assets/polygons/sm-Header.png" alt="" />

                <div className='w-full -mt-14 md:-mt-0 md:mb-14 flex  flex-col md:flex-row-reverse md:justify-evenly  items-center justify-between z-10'>
                    {/* header images for respansive */}
                    <img className='w-[206px]   h-[226px] md:hidden  ' src="./src/assets/images/youg people discussing the project-sm.png" alt="" />
                    <img className=' h-[400px] w-[350px] hidden md:block ' src="./src/assets/images/youg people discussing the project-lg.png" alt="" />


                    {/* header desc */}
                    <div className='p-4 mt-14 md:mt-0 flex flex-col items-start sm:items-center md:items-start md:w-1/2   '>
                        <h1 className='text-white text-2xl mt-4 font-[IRANSans] lg:text-4xl xl:text-5xl'>
                            سایت خود را به ما بسپارید...
                        </h1>
                        <p className='sm:w-1/2 md:w-full xl:w-1/2 text-base xl:text-xl text-white mt-6 md:mt-10 font-[IRANSans2] text-justify'>مهم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان تیم تا نیاز ها امکانات سایت مد نظرشان را مشخص کنیم</p>
                        <div className='flex justify-between small:justify-normal  mt-16 w-full sm:justify-center md:justify-normal'>
                            <button className='small:mx-2  p-3 rounded-3xl bg-main-gold text-main-color  text-sm '>سفارش طراحی سایت</button>
                            <button className='small:mx-2 shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-sm '>دریافت مشاوره رایگان</button>
                        </div>
                    </div>
                </div>

                {/* scroll btn */}
                <div  className=' flex flex-col items-center justify-center absolute bottom-2 left-1/2 w-16 h-16  -translate-x-1/2 cursor-pointer '>
                    <img className='absolute top-0 left-0 ' src="./src/assets/polygons/Ellipse.png" alt="./src/assets/polygons/Ellipse.png" />
                    <img className='z-10' src="./src/assets/polygons/Arrow 1.png" alt="" />
                    <img className='z-10' src="./src/assets/polygons/Arrow 2.png" alt="" />
                </div>
            </div>
        </div>
    )
}
