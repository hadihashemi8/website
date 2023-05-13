import React from 'react'
import Footer from '../../Components/Footer/Footer'
import { motion } from 'framer-motion'



export default function Categories() {
    return (
        <motion.div className='flex flex-col justify-between pt-24 items-center  lg:pt-10 h-full' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className='flex items-center md:hidden'>
                <div className='w-12 mx-2 h-[1px] rounded-full  bg-white'></div>
                <h3 className='text-2xl text-white '>نمونه کارها</h3>
                <div className='w-12 mx-2 h-[1px] rounded-full  bg-white'></div>
            </div>
            <div className='w-full px-8 lg:px-20  p-4 mt-10 md:mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                <div className='cursor-pointer'>
                    <img className='w-full' src="./src/assets/images/category-1.png" alt="" />
                </div>
                <div className='cursor-pointer'>
                    <img className='w-full' src="./src/assets/images/category-2.png" alt="" />
                </div>
                <div className='cursor-pointer'>
                    <img className='w-full' src="./src/assets/images/category-3.png" alt="" />
                </div>
                <div className='cursor-pointer'>
                    <img className='w-full' src="./src/assets/images/category-1.png" alt="" />
                </div>
            </div>

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
