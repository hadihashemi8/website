import React from 'react'
import { motion } from 'framer-motion'

export default function AboutUs() {
    return (
        
            <motion.div className='  lg:px-10 lg:flex   lg:justify-end pb-32' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} >
                <div className='relative     flex flex-col  justify-evenly items-center p-4 lg:pb-36 sm:px-8 lg:pr-36 lg:mt-10  lg:w-[75%]'>
                    <img className='absolute  top-0 left-0 w-full h-full  lg:hidden ' src="./src/assets/polygons/AboutUs-sm.png" alt="" />
                    <img className='absolute  top-0 left-0 w-full h-full hidden lg:block' src="./src/assets/polygons/contactUs-lg.png" alt="" />
                    <div className='items-center hidden lg:flex flex-col-reverse justify-between   absolute -right-1/3 top-16 mt-20 '>
                        <img className='my-2' src="./src/assets/icons/phon-1.png" alt="" />
                        <img className='my-2 ' src="./src/assets/icons/contactUs-line2.png" alt="" />
                        <img className='my-2' src="./src/assets/icons/loc-0.png" alt="" />
                    </div>
                    <div className='flex items-center lg:hidden mt-20'>
                        <img className='mx-2' src="./src/assets/icons/phon-1.png" alt="" />
                        <img className='mx-2 rotate-180' src="./src/assets/icons/line.png" alt="" />
                        <img className='mx-2' src="./src/assets/icons/loc-0.png" alt="" />
                    </div>

                    <div className='md:px-8 flex flex-col items-start mt-8 lg:mt-0 justify-around  z-10'>
                        <h1 className='text-white  self-start text-3xl mt-10 font-[IRANSans] drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                             درباره ما
                        </h1>
                        <p className=' sm:w-full  text-base  text-[#969696] mt-6 font-[IRANSans2] text-justify'>مجموعهٔ  حاصل تلاش و تفکر خلاقانهٔ تیمی جوان و باانگیزه است که سعی کرده‌اند با کسب تجربه در زمینه طراحی سایت، بهینه‌سازی موتورهای جستجو یا به‌اصطلاح سئو سایت، تولید محتوا و ... و قراردادن این تجربیات را در کنار هم با استفاده از برترین و به‌روزترین تکنولوژی‌های پیاده‌سازی نرم‌افزارهای آنلاین، بتوانند به افراد، در جهت بهبود کیفیت و پیشرفت کسب‌وکارهای آنلاین کمک کنند. در واقع هدف اصلی تیم رویال کد ارائهٔ خدماتی جامع، باکیفیت، خلاقانه و خوش‌قیمت با شعار پیشرفت در کنار یکدیگر است؛ به‌طوری‌که کسب‌وکارهای نوپا و کسب‌وکارهای شکست‌خورده نیز بتوانند با بهره‌گیری از این خدمات و امکانات به حوزهٔ دیجیتال مارکتینگ وارد شده و در مسیر پیشرفت گام بردارند.
                            مجموعهٔ  حاصل تلاش و تفکر خلاقانهٔ تیمی جوان و باانگیزه است که سعی کرده‌اند با کسب تجربه در زمینه طراحی سایت، بهینه‌سازی موتورهای جستجو یا به‌اصطلاح سئو سایت، تولید محتوا و ... و قراردادن این تجربیات را در کنار هم با استفاده از برترین و به‌روزترین تکنولوژی‌های پیاده‌سازی نرم‌افزارهای آنلاین، بتوانند به افراد، در جهت بهبود کیفیت و پیشرفت کسب‌وکارهای آنلاین کمک کنند. در واقع هدف اصلی تیم رویال کد ارائهٔ خدماتی جامع، باکیفیت، خلاقانه و خوش‌قیمت با شعار پیشرفت در کنار یکدیگر است؛ به‌طوری‌که کسب‌وکارهای نوپا و کسب‌وکارهای شکست‌خورده نیز بتوانند با بهره‌گیری از این خدمات و امکانات به حوزهٔ دیجیتال مارکتینگ وارد شده و در مسیر پیشرفت گام بردارند.</p>
                        <img className='mt-4  z-10 lg:absolute lg:-right-[32%] xl:-right-1/4  lg:top-16 lg:w-[400px]' src="./src/assets/images/Boy sitting in armchair and reading book.png" alt="" />
                    </div>

                </div>
            </motion.div>

       
    )
}
