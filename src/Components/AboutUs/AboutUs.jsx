import React  from 'react'
import useAos from '../../hooks/useAos'

export default function AboutUs() {

    const motion = useAos()
   



   

    return (
        <div  className=' pt-32    sm:px-8 xl:px-44 ' data-aos="fade-up" data-aos-duration="2000">
            <div className='relative   flex flex-col sm:flex-row-reverse sm:justify-evenly items-center p-4 sm:px-8 '>
                <img className='absolute  top-0 left-0 w-full h-full sm:hidden ' src="./src/assets/polygons/AboutUs-sm.png" alt="" />
                <img className='absolute  top-0 left-0 w-full h-full hidden sm:block' src="./src/assets/polygons/AboutUs-lg.png" alt="" />

                <div className='md:px-8 flex flex-col items-start justify-around  z-10'>
                    <h1 className='text-white text-2xl mt-4 font-[IRANSans] lg:text-4xl'>
                        درباره ما
                    </h1>
                    <p className=' sm:w-full  text-base  text-white mt-6 font-[IRANSans2] text-justify'>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیمهم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم</p>
                    <button className='small:mx-2  py-2 px-4 rounded-3xl bg-main-gold text-main-color  text-sm mt-8'>درباره ما</button>

                </div>
                <img className='mt-4 lg:hidden z-10 ' src="./src/assets/images/aboutus-sm.png" alt="" />
                <img className='-mt-16 hidden lg:block xl:w-[400px] xl:h-[430px] z-10' src="./src/assets/images/aboutus-lg.png" alt="" />
            </div>
        </div>
    )
}
