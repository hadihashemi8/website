import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { AiFillLike } from "react-icons/ai"
import { motion } from 'framer-motion'

export default function Docs() {
    return (
        <motion.div className='flex flex-col justify-between pt-28 items-center  md:pt-10 h-full  ' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className='flex items-center md:hidden'>
                <div className='w-12 mx-2 h-[1px] rounded-full  bg-white'></div>
                <h3 className='text-2xl text-white '>نمونه کارها</h3>
                <div className='w-12 mx-2 h-[1px] rounded-full  bg-white'></div>
            </div>
            <div className='w-full px-6 lg:px-20  p-4 mt-10 md:mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-10'>
                <div className='relative flex'>
                    <img className='absolute top-0 left-0 w-full h-full   ' src="./src/assets/polygons/slider-bg.png" alt="" />
                    <div className='z-20   flex flex-col items-center p-4 '>
                        <img src="./src/assets/images/slide-1.png" alt="" />
                        <div className='mt-2' >
                            <p className='text-xs text-[#818181]'>1401/1/1</p>
                            <h3 className='text-[24px] text-main-gold drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25] font-bold'>UI جیست</h3>
                            <p className='text-white text-sm text-justify '>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم......
                            </p>
                            <div className='flex items-center justify-between  mt-4'>
                                <AiFillLike className='text-main-gold text-xl cursor-pointer' />
                                <Link to="/docs/doc/6">
                                    <button className='small:mx-2   shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-xs '>ادامه مطلب</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative flex'>
                    <img className='absolute top-0 left-0 w-full h-full   ' src="./src/assets/polygons/slider-bg.png" alt="" />
                    <div className='z-20   flex flex-col items-center p-4 '>
                        <img src="./src/assets/images/slide-1.png" alt="" />
                        <div className='mt-2' >
                            <p className='text-xs text-[#818181]'>1401/1/1</p>
                            <h3 className='text-[24px] text-main-gold drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25] font-bold'>UI جیست</h3>
                            <p className='text-white text-sm text-justify '>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم......
                            </p>
                            <div className='flex items-center justify-between  mt-4'>
                                <AiFillLike className='text-main-gold text-xl cursor-pointer' />
                                <button className='small:mx-2  shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-xs '>ادامه مطلب</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative flex'>
                    <img className='absolute top-0 left-0 w-full h-full   ' src="./src/assets/polygons/slider-bg.png" alt="" />
                    <div className='z-20   flex flex-col items-center p-4 '>
                        <img src="./src/assets/images/slide-1.png" alt="" />
                        <div className='mt-2' >
                            <p className='text-xs text-[#818181]'>1401/1/1</p>
                            <h3 className='text-[24px] text-main-gold drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25] font-bold'>UI جیست</h3>
                            <p className='text-white text-sm text-justify '>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم......
                            </p>
                            <div className='flex items-center justify-between  mt-4'>
                                <AiFillLike className='text-main-gold text-xl cursor-pointer' />
                                <button className='small:mx-2  shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-xs '>ادامه مطلب</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative flex'>
                    <img className='absolute top-0 left-0 w-full h-full   ' src="./src/assets/polygons/slider-bg.png" alt="" />
                    <div className='z-20   flex flex-col items-center p-4 '>
                        <img src="./src/assets/images/slide-1.png" alt="" />
                        <div className='mt-2' >
                            <p className='text-xs text-[#818181]'>1401/1/1</p>
                            <h3 className='text-[24px] text-main-gold drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25] font-bold'>UI جیست</h3>
                            <p className='text-white text-sm text-justify '>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم......
                            </p>
                            <div className='flex items-center justify-between  mt-4'>
                                <AiFillLike className='text-main-gold text-xl cursor-pointer' />
                                <button className='small:mx-2  shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-xs '>ادامه مطلب</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative flex'>
                    <img className='absolute top-0 left-0 w-full h-full   ' src="./src/assets/polygons/slider-bg.png" alt="" />
                    <div className='z-20   flex flex-col items-center p-4 '>
                        <img src="./src/assets/images/slide-1.png" alt="" />

                        <div className='mt-2' >
                            <p className='text-xs text-[#818181]'>1401/1/1</p>
                            <h3 className='text-[24px] text-main-gold drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25] font-bold'>UI جیست</h3>
                            <p className='text-white text-sm text-justify '>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم......
                            </p>
                            <div className='flex items-center justify-between  mt-4'>
                                <AiFillLike className='text-main-gold text-xl cursor-pointer' />
                        

                                <button className='small:mx-2  shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-xs '>ادامه مطلب</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




            {/* footer section */}
            <div>
                <div className='relative mt-8 sm:hidden    flex flex-col  items-center lg:items-start px-12   '>
                    <div className=' flex mt-20  md:mt-0 flex-col items-start justify-around  z-10 md:pt-12 md:pb-24 '>
                        <p className=' sm:w-full  text-base  text-[#9E9E9E] mt-6 font-[IRANSans2] text-justify'>جهت مشاوره و راه اندازی و توسعه کسب و کارهای آنلاین با ما تماس بگیرید.</p>
                        <p className=' sm:w-full  text-base  text-[#9E9E9E] mt-6 font-[IRANSans2] text-justify'>ما راه های بسیاری برای ارتباط نزدیک با شما در نطر گرفته ایم ، اما هیچ راهی سریع تر از این نیس !</p>
                    </div>
                    <img className='mt-4  z-10 lg:hidden  lg:absolute lg:top-2/3 left-0' src="./src/assets/images/aboutus-sm.png" alt="" />
                </div>
                <div className='hidden sm:block'>
                    <Footer />
                </div>
            </div>
        </motion.div>
    )
}
