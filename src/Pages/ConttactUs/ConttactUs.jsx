import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ConttactUs() {
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
            <h1 className='text-white  self-start text-2xl mt-10 font-[IRANSans] '>
              تماس با ما
            </h1>
            <p className=' sm:w-full  text-sm  text-white mt-6 font-[IRANSans2] text-justify'>ما یک تیم از افراد کنجکاو هستیم که عاشق خلق کردن چیزهای جدید اند تجربیاتی در دنیای دیجیتال که بتوانیم تغییرات اساسی و نتایج قابل توجهی ایجاد کنیم.</p>
            <p className=' sm:w-full  text-sm  text-white mt-6 font-[IRANSans2] text-justify'>ما راه های بسیاری برای ارتباط نزدیک با شما در نطر گرفته ایم ، اما هیچ راهی سریع تر از این نیس !</p>
            <img className='self-start mt-8' src="./src/assets/polygons/contactUs-line.png" alt="" />
            <p className=' sm:w-full  text-sm lg:text-xs  text-white mt-6 font-[IRANSans2] text-justify'>جهت مشاوره ، راه اندازی و توسعه کسب وکار آنلاین با ما تماس بگیرید .</p>
            <Link to='/contactUs/contactForm'>
              <button className='small:mx-2 self-start  py-2 px-4 rounded-3xl bg-main-gold text-main-color  text-sm mt-8'>تماس با ما</button>
            </Link>
            <img className='mt-4  z-10 lg:absolute lg:-right-[32%] xl:-right-1/4  lg:top-16 lg:w-[400px]' src="./src/assets/images/chart and statistics.png" alt="" />
          </div>

        </div>
      </motion.div>
      
  

  )
}

