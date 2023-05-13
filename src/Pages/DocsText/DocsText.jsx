import React from 'react'
import Footer from '../../Components/Footer/Footer'
import { AiFillLike } from "react-icons/ai"
import footerSmBg from "../../assets/images/aboutus-sm.png"
import LineImg from "../../assets/polygons/Line.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./docs.css"
import { Pagination, Navigation } from "swiper";
import docSlideBg from "../../assets/polygons/slider-bg.png"
import docsSlideImg from "../../assets/images/slide-1.png"
import doctextBg from "../../assets/polygons/doctext-bg.png"
import sliderBg from "../../assets/polygons/slider-bg2.png"



export default function DocsText() {





    return (
        <div className='flex flex-col justify-between pt-28 items-center  md:pt-10 h-full  '>
            <div className='flex flex-col items-center  xl:grid xl:grid-cols-5  px-8 xl:px-14 w-full gap-x-20 '>

                <div className='relative px-12 md:w-2/3 xl:w-full xl:p-20 py-8  xl:col-span-3 xl:self-start'>
                    <img className='hidden md:block absolute top-0 left-0 w-full h-full ' src={doctextBg} alt="" />
                    <div className='flex flex-col items-center relative  '>
                        <h1 className='text-2xl md:text-3xl text-main-gold md:self-start xl:text-5xl'> چیست UI</h1>
                        <p className='mt-10 text-justify text-white'>
                            مجموعهٔ  حاصل تلاش و تفکر خلاقانهٔ تیمی جوان و باانگیزه است که سعی کرده‌اند با کسب تجربه در زمینه طراحی سایت، بهینه‌سازی موتورهای جستجو یا به‌اصطلاح سئو سایت، تولید محتوا و ... و قراردادن این تجربیات را در کنار هم با استفاده از برترین و به‌روزترین تکنولوژی‌های پیاده‌سازی نرم‌افزارهای آنلاین، بتوانند به افراد، در جهت بهبود کیفیت و پیشرفت کسب‌وکارهای آنلاین کمک کنند. در واقع هدف اصلی تیم رویال کد ارائهٔ خدماتی جامع، باکیفیت، خلاقانه و خوش‌قیمت با شعار پیشرفت در کنار یکدیگر است؛ به‌طوری‌که کسب‌وکارهای نوپا و کسب‌وکارهای شکست‌خورده نیز بتوانند با بهره‌گیری از این خدمات و امکانات به حوزهٔ دیجیتال مارکتینگ وارد شده و در مسیر پیشرفت گام بردارند.
                            مجموعهٔ  حاصل تلاش و تفکر خلاقانهٔ تیمی جوان و باانگیزه است که سعی کرده‌اند با کسب تجربه در زمینه طراحی سایت، بهینه‌سازی موتورهای جستجو یا به‌اصطلاح سئو سایت، تولید محتوا و ... و قراردادن این تجربیات را در کنار هم با استفاده از برترین و به‌روزترین تکنولوژی‌های پیاده‌سازی نرم‌افزارهای آنلاین، بتوانند به افراد، در جهت بهبود کیفیت و پیشرفت کسب‌وکارهای آنلاین کمک کنند. در واقع هدف اصلی تیم رویال کد ارائهٔ خدماتی جامع، باکیفیت، خلاقانه و خوش‌قیمت با شعار پیشرفت در کنار یکدیگر است؛ به‌طوری‌که کسب‌وکارهای نوپا و کسب‌وکارهای شکست‌خورده نیز بتوانند با بهره‌گیری از این خدمات و امکانات به حوزهٔ دیجیتال مارکتینگ وارد شده و در مسیر پیشرفت گام بردارند.
                        </p>
                        <div className=' self-start mt-4'>
                            <img src={LineImg} alt="" />
                            <p className='mt-5 text-[#818181]'>تاریخ انتشار : 1401/11/16</p>
                            <AiFillLike className='text-main-gold text-2xl cursor-pointer mt-5' />
                        </div>
                    </div>
                </div>


                <div className=' w-full xl:col-span-2 self-start   pt-28 xl:pt-0 flex flex-col items-center  xl:h-[1200px]  xl:overflow-y-scroll  scrollbar-hide'>
                    <div className='flex w-full justify-center items-center '>
                        <div className='w-12 mx-2 h-[1px] rounded-full  bg-[#F9B915]'></div>
                        <h3 className='text-3xl text-white '>مقالات مشابه</h3>
                        <div className='w-12 mx-2 h-[1px] rounded-full  bg-[#F9B915]'></div>
                    </div>


                    <div className='mt-12 w-full  py-8 xl:hidden' >
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
                            pagination={true}
                            modules={[Navigation, Pagination]}
                            className="mySwiper pb-12  small:w-2/3 sm:w-full"
                        >
                            <SwiperSlide className='relative  '>
                                <img className='absolute top-0 left-0 w-full h-full  -z-10 ' src={docSlideBg} alt="" />
                                <div className='z-50  flex flex-col items-center p-4 '>
                                    <img src={docsSlideImg} alt="" />
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
                                <img className='absolute top-0 left-0 w-full h-full  -z-10 ' src={docSlideBg} alt="" />
                                <div className='z-50  flex flex-col items-center p-4 '>
                                    <img src={docsSlideImg} alt="" />
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
                                <img className='absolute top-0 left-0 w-full h-full  -z-10 ' src={docSlideBg} alt="" />
                                <div className='z-50  flex flex-col items-center p-4 '>
                                    <img src={docsSlideImg} alt="" />
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
                                <img className='absolute top-0 left-0 w-full h-full  -z-10 ' src={docSlideBg} alt="" />
                                <div className='z-50  flex flex-col items-center p-4 '>
                                    <img src={docsSlideImg} alt="" />
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
                                <img className='absolute top-0 left-0 w-full h-full  -z-10 ' src={docSlideBg} alt="" />
                                <div className='z-50  flex flex-col items-center p-4 '>
                                    <img src={docsSlideImg} alt="" />
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

                    <div className='mt-8 ' >
                        <div className='relative my-4 '>
                            <img className='absolute top-0 left-0 w-full h-full  ' src={sliderBg} alt="" />
                            <div className='z-50  flex  items-center p-4 '>
                                <img className='w-[180px]' src={docsSlideImg} alt="" />
                                <div className='mt-2' >
                                    <p className='text-xs text-[#818181]'>1401/1/1</p>
                                    <h3 className='text-[18px] text-main-gold drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25] font-bold'>UI جیست</h3>
                                    <p className='text-white text-xs text-justify '>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم......
                                    </p>
                                    <div className='flex items-center justify-between  mt-4'>
                                        <AiFillLike className='text-main-gold text-xl cursor-pointer' />

                                        <button className='small:mx-2   shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-xs '>ادامه مطلب</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative my-4 '>
                            <img className='absolute top-0 left-0 w-full h-full  ' src={sliderBg} alt="" />
                            <div className='z-50  flex  items-center p-4 '>
                                <img className='w-[180px]' src={docsSlideImg} alt="" />
                                <div className='mt-2' >
                                    <p className='text-xs text-[#818181]'>1401/1/1</p>
                                    <h3 className='text-[18px] text-main-gold drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25] font-bold'>UI جیست</h3>
                                    <p className='text-white text-xs text-justify '>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم......
                                    </p>
                                    <div className='flex items-center justify-between  mt-4'>
                                        <AiFillLike className='text-main-gold text-xl cursor-pointer' />

                                        <button className='small:mx-2   shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-xs '>ادامه مطلب</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative my-4 '>
                            <img className='absolute top-0 left-0 w-full h-full  ' src={sliderBg} alt="" />
                            <div className='z-50  flex  items-center p-4 '>
                                <img className='w-[180px]' src={docsSlideImg} alt="" />
                                <div className='mt-2' >
                                    <p className='text-xs text-[#818181]'>1401/1/1</p>
                                    <h3 className='text-[18px] text-main-gold drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25] font-bold'>UI جیست</h3>
                                    <p className='text-white text-xs text-justify '>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم......
                                    </p>
                                    <div className='flex items-center justify-between  mt-4'>
                                        <AiFillLike className='text-main-gold text-xl cursor-pointer' />

                                        <button className='small:mx-2   shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-xs '>ادامه مطلب</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative my-4 '>
                            <img className='absolute top-0 left-0 w-full h-full  ' src={sliderBg} alt="" />
                            <div className='z-50  flex  items-center p-4 '>
                                <img className='w-[180px]' src={docsSlideImg} alt="" />
                                <div className='mt-2' >
                                    <p className='text-xs text-[#818181]'>1401/1/1</p>
                                    <h3 className='text-[18px] text-main-gold drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25] font-bold'>UI جیست</h3>
                                    <p className='text-white text-xs text-justify '>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم......
                                    </p>
                                    <div className='flex items-center justify-between  mt-4'>
                                        <AiFillLike className='text-main-gold text-xl cursor-pointer' />

                                        <button className='small:mx-2   shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-xs '>ادامه مطلب</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative my-4 '>
                            <img className='absolute top-0 left-0 w-full h-full  ' src={sliderBg} alt="" />
                            <div className='z-50  flex  items-center p-4 '>
                                <img className='w-[180px]' src={docsSlideImg} alt="" />
                                <div className='mt-2' >
                                    <p className='text-xs text-[#818181]'>1401/1/1</p>
                                    <h3 className='text-[18px] text-main-gold drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25] font-bold'>UI جیست</h3>
                                    <p className='text-white text-xs text-justify '>هم ترین مسئله هنگام طراحی سایت مشخص کردن نیاز های شما به عنوان یم تا نیاز ها و امکانات سایت مد نظرشان را مشخص کنیم......
                                    </p>
                                    <div className='flex items-center justify-between  mt-4'>
                                        <AiFillLike className='text-main-gold text-xl cursor-pointer' />

                                        <button className='small:mx-2   shadow-btn-shadow p-3 rounded-3xl bg-[#4E4E4E] text-main-gold  text-xs '>ادامه مطلب</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    
                    </div>


                </div>

            </div>



            <div>
                <div className='relative mt-8 sm:hidden    flex flex-col  items-center lg:items-start px-12   '>
                    <div className=' flex mt-20  md:mt-0 flex-col items-start justify-around  z-10 md:pt-12 md:pb-24 '>
                        <p className=' sm:w-full  text-base  text-[#9E9E9E] mt-6 font-[IRANSans2] text-justify'>جهت مشاوره و راه اندازی و توسعه کسب و کارهای آنلاین با ما تماس بگیرید.</p>
                        <p className=' sm:w-full  text-base  text-[#9E9E9E] mt-6 font-[IRANSans2] text-justify'>ما راه های بسیاری برای ارتباط نزدیک با شما در نطر گرفته ایم ، اما هیچ راهی سریع تر از این نیس !</p>
                    </div>
                    <img className='mt-4  z-10 lg:hidden  lg:absolute lg:top-2/3 left-0' src={footerSmBg} alt="" />
                </div>
                <div className='hidden sm:block'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
