import React from 'react'
import footerSmBg from "../../assets/polygons/footer-sm.png"
import footerLgBg from "../../assets/polygons/footer-lg.png"
import footerImgSm from "../../assets/images/footer-sm.png"
import footerImgLg from "../../assets/images/footer-lg.png"


export default function Footer() {
    return (
        <div className=' pt-40    ' >
            <div className='relative xl:px-32    flex flex-col sm:flex-row-reverse sm:justify-around items-center  p-4 sm:px-8 '>
                <img className='absolute  top-0 left-0 w-full h-full sm:hidden ' src={footerSmBg} alt="" />
                <img className='absolute  top-0 left-0 w-full h-full hidden sm:block' src={footerLgBg} alt="" />

                <div className='sm:px-8 flex flex-col items-start justify-around  z-10  lg:mr-20'>
                    <button className='small:mx-2  py-2 px-4 rounded-3xl bg-main-gold text-main-color  text-sm mt-8'>تماس با ما</button>
                    <p className=' sm:w-full  text-base  text-white mt-6 font-[IRANSans2] text-justify'>جهت مشاوره ، راه اندازی و توسعه کسب وکار آنلاین با ما تماس بگیرید .</p>
                    <p className=' sm:w-full  text-base  text-white mt-10 font-[IRANSans2] text-justify'>ما یک تیم از افراد کنجکاو هستیم که عاشق خلق کردن چیزهای جدید اند تجربیاتی در دنیای دیجیتال که بتوانیم تغییرات اساسی و نتایج قابل توجهی ایجاد کنیم.</p>

                </div>
                <img className='mt-6 lg:hidden z-10 ' src={footerImgSm} alt="" />
                <img className='-mt-16 hidden lg:block xl:w-[400px] xl:h-[430px] z-10' src={footerImgLg} alt="" />
            </div>
        </div>
    )
}
