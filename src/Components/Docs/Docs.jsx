import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Docs.css";
import { Pagination, Navigation } from "swiper";
import { AiFillLike, AiOutlineArrowLeft } from "react-icons/ai"



export default function Docs() {
    return (
        <div className=' pt-32  p-4 sm:px-8 xl:px-30 w-full ' >
            <div className='relative w-full  '>
                <div className='md:px-8 flex  items-center justify-between  z-10  '>
                    <h1 className='text-white text-2xl font-[IRANSans] lg:text-4xl flex items-center justify-between'>
                        مقاله ها
                    </h1>
                    <Link to="/docs">
                    <button className='small:mx-2   px-4 text-[#6C6C6C]  text-sm  flex items-center justify-between'>

                        بیشتر
                        <AiOutlineArrowLeft className='mr-2 text-xl' />
                    </button>
                    </Link>
                </div>
                <div className='mt-12' >
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}

                        breakpoints={{
                            600: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            900: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1100: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Navigation]}
                        className="mySwiper "
                    >
                        <SwiperSlide className='relative  '>
                            <img className='absolute top-0 left-0 w-full h-full  -z-10 ' src="./src/assets/polygons/slider-bg.png" alt="" />
                            <div className='z-50  flex flex-col items-center p-4 '>
                                <img src="./src/assets/images/slide-1.png" alt="" />
                                <div className='mt-2' >
                                    <p className='text-xs text-[#818181]'>1401/1/1</p>
                                    <h3 className='text-[24px] text-main-gold drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25] font-bold'>UI جیست</h3>
                                    <p className='text-white text-sm text-justify '>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم......
                                    </p>
                                    <div className='flex items-center justify-between  mt-4'>
                                        <AiFillLike className='text-main-gold text-xl cursor-pointer' />
                                       
                                        <button className='small:mx-2   shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-xs '>ادامه مطلب</button>
                                        

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative  '>
                            <img className='absolute top-0 left-0 w-full h-full  -z-10' src="./src/assets/polygons/slider-bg.png" alt="" />
                            <div className='z-50  flex flex-col items-center p-4 '>
                                <img src="./src/assets/images/slide-1.png" alt="" />
                                <div className='mt-2' >
                                    <p className='text-xs text-[#818181]'>1401/1/1</p>
                                    <h3 className='text-[24px] text-main-gold drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25] font-bold'>UI جیست</h3>
                                    <p className='text-white text-sm text-justify '>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم......
                                    </p>
                                    <div className='flex items-center justify-between  mt-4'>
                                        <AiFillLike className='text-main-gold text-xl cursor-pointer' />
                                        <button className='small:mx-2   shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-xs '>ادامه مطلب</button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative  '>
                            <img className='absolute top-0 left-0 w-full h-full  -z-10' src="./src/assets/polygons/slider-bg.png" alt="" />
                            <div className='z-50  flex flex-col items-center p-4 '>
                                <img src="./src/assets/images/slide-1.png" alt="" />
                                <div className='mt-2' >
                                    <p className='text-xs text-[#818181]'>1401/1/1</p>
                                    <h3 className='text-[24px] text-main-gold drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25] font-bold'>UI جیست</h3>
                                    <p className='text-white text-sm text-justify '>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم......
                                    </p>
                                    <div className='flex items-center justify-between  mt-4'>
                                        <AiFillLike className='text-main-gold text-xl cursor-pointer' />
                                        <button className='small:mx-2   shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-xs '>ادامه مطلب</button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative  '>
                            <img className='absolute top-0 left-0 w-full h-full  -z-10' src="./src/assets/polygons/slider-bg.png" alt="" />
                            <div className='z-50  flex flex-col items-center p-4 '>
                                <img src="./src/assets/images/slide-1.png" alt="" />
                                <div className='mt-2' >
                                    <p className='text-xs text-[#818181]'>1401/1/1</p>
                                    <h3 className='text-[24px] text-main-gold drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25] font-bold'>UI جیست</h3>
                                    <p className='text-white text-sm text-justify '>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم......
                                    </p>
                                    <div className='flex items-center justify-between  mt-4'>
                                        <AiFillLike className='text-main-gold text-xl cursor-pointer' />
                                        <button className='small:mx-2   shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-xs '>ادامه مطلب</button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative  '>
                            <img className='absolute top-0 left-0 w-full h-full  -z-10' src="./src/assets/polygons/slider-bg.png" alt="" />
                            <div className='z-50  flex flex-col items-center p-4 '>
                                <img src="./src/assets/images/slide-1.png" alt="" />
                                <div className='mt-2' >
                                    <p className='text-xs text-[#818181]'>1401/1/1</p>
                                    <h3 className='text-[24px] text-main-gold drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25] font-bold'>UI جیست</h3>
                                    <p className='text-white text-sm text-justify '>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم......
                                    </p>
                                    <div className='flex items-center justify-between  mt-4'>
                                        <AiFillLike className='text-main-gold text-xl cursor-pointer' />
                                        <button className='small:mx-2   shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-xs '>ادامه مطلب</button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='relative  '>
                            <img className='absolute top-0 left-0 w-full h-full  -z-10' src="./src/assets/polygons/slider-bg.png" alt="" />
                            <div className='z-50  flex flex-col items-center p-4 '>
                                <img src="./src/assets/images/slide-1.png" alt="" />
                                <div className='mt-2' >
                                    <p className='text-xs text-[#818181]'>1401/1/1</p>
                                    <h3 className='text-[24px] text-main-gold drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25] font-bold'>UI جیست</h3>
                                    <p className='text-white text-sm text-justify '>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم......
                                    </p>
                                    <div className='flex items-center justify-between  mt-4'>
                                        <AiFillLike className='text-main-gold text-xl cursor-pointer' />
                                        <button className='small:mx-2   shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-xs '>ادامه مطلب</button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    )
}
