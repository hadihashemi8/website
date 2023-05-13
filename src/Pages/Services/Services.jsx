import React from 'react'
import Footer from '../../Components/Footer/Footer'
import ServiceInfos from '../../Components/ServiceInfos/ServiceInfos'
import ServiceSection from '../../Components/ServiceSection/ServiceSection'
import { motion } from 'framer-motion'



export default function Services() {
    return (
        <motion.div className='flex flex-col justify-between pt-20 items-center  lg:pt-10 ' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className='flex items-center md:hidden'>
                <div className='w-12 mx-2 h-[1px] rounded-full  bg-white'></div>
                <h3 className='text-2xl text-white '>خدمات ما</h3>
                <div className='w-12 mx-2 h-[1px] rounded-full  bg-white'></div>
            </div>
            <ServiceInfos />
            <ServiceSection />



            <div>
                <div className='relative mt-8 sm:hidden    flex flex-col  items-center lg:items-start px-12   '>
          <img className='absolute   top-0 left-0 w-full h-full sm:hidden ' src="./src/assets/polygons/AboutUs-sm.png" alt="" />

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
