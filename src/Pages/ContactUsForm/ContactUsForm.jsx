import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import formBg from "../../assets/images/contactus-form.png"
import aboutUsSm from "../../assets/images/aboutus-sm.png"
import aboutUsLg from "../../assets/images/aboutus-lg.png"
import aboutUsBgSm from "../../assets/polygons/AboutUs-sm.png"
import aboutUsBgLg from "../../assets/polygons/contactus-bg.png"



export default function ContactUsForm() {

const x = useParams()


  useEffect(() => {
    console.log(x);
  }, [])



  return (
    <div className=' pt-24 lg:pb-24 md:pt-8 bg-main-color small:w-[450px] md:w-full   mx-auto flex flex-col items-center lg:flex-row lg:items-start justify-evenly '>
      <div className='px-6 md:hidden'>
        <h1 className='text-white text-4xl'>تماس با ما</h1>
        <p className='text-[#9E9E9E] mt-4 text-lg leading-9'> فرم را تکمیل کنید ،  کارشناسان  در اولین فرصت با شما تماس خواهند گرفت</p>
      </div>
      <div className=' md:w-[380px] w-full'>
        <div className=' relative  w-full p-4   flex '>
          <div className='z-20  w-full'>
            <form className='flex flex-col items-center justify-between' >
              <div className='mt-2 flex flex-col items-start w-full p-2' >
                <label className='text-xl text-[#A1A1A1]' htmlFor="">نام</label>
                <input className='focus:shadow-[0_0_2px_yellow] transition-all duration-200 p-2 px-4 bg-transparent  rounded-3xl w-full border-[1px] border-[#5A5656] text-white outline-none mt-2' type="text" />
              </div>
              <div className='mt-2 flex flex-col items-start w-full p-2'>
                <label className='text-xl text-[#A1A1A1]' htmlFor="">نام خانوادگی</label>
                <input className='focus:shadow-[0_0_2px_yellow] transition-all duration-200 p-2 px-4 bg-transparent  rounded-3xl w-full border-[1px] border-[#5A5656] text-white outline-none mt-2' type="text" />
              </div>
              <div className='mt-2 flex flex-col items-start w-full p-2'>
                <label className='text-xl text-[#A1A1A1]' htmlFor="">شماره همراه</label>
                <input className='focus:shadow-[0_0_2px_yellow] transition-all duration-200 p-2 px-4 bg-transparent  rounded-3xl w-full border-[1px] border-[#5A5656] text-white outline-none mt-2' type="text" />
              </div>
              <div className='mt-2 flex flex-col items-start w-full p-2'>
                <label className='text-xl text-[#A1A1A1]' htmlFor="">توضیحات(اختیاری)</label>
                <textarea className='focus:shadow-[0_0_2px_yellow] transition-all duration-200 p-2 px-4 bg-transparent  rounded-3xl w-full h-44 border-[1px] border-[#5A5656] text-white outline-none mt-2' type="text" />
              </div>
              <button className='small:mx-2   p-3 px-20 rounded-full bg-main-gold text-main-color  text-lg  my-2  '>ارسال</button>

            </form>
          </div>
          <img className='w-full h-full absolute top-0 left-0 ' src={formBg} alt="" />

        </div>
      </div>


      <div className=' mt-8 '>
        <div className='relative    flex flex-col  items-center lg:items-start p-4  sm:pl-20 sm:pr-8 '>
          <img className='absolute   top-0 left-0 w-full h-full sm:hidden ' src={aboutUsBgSm} alt="" />
          <img className='absolute  top-0 left-0 w-full h-full hidden sm:block' src={aboutUsBgLg} alt="" />
          <div className=' flex mt-20  md:mt-0 flex-col items-start justify-around  z-10 md:pt-12 md:pb-24 '>
            <h1 className='hidden  md:block text-3xl text-white'>تماس با ما</h1>
            <p className=' sm:w-full  text-xs  text-[#9E9E9E] mt-6 font-[IRANSans2] text-justify'>. فرم را تکمیل کنید ،  کارشناسان  در اولین فرصت با شما تماس خواهند گرفت</p>
            <p className=' sm:w-full  text-xs  text-[#9E9E9E] mt-6 font-[IRANSans2] text-justify'>جهت مشاوره و راه اندازی و توسعه کسب و کارهای آنلاین با ما تماس بگیرید.</p>
            <p className=' sm:w-full  text-xs  text-[#9E9E9E] mt-6 font-[IRANSans2] text-justify'>ما راه های بسیاری برای ارتباط نزدیک با شما در نطر گرفته ایم ، اما هیچ راهی سریع تر از این نیس !</p>
          </div>

          <img className='mt-4  z-10 lg:hidden  lg:absolute lg:top-2/3 left-0' src={aboutUsSm} alt="" />
          <img className='mt-4  z-10  hidden lg:block lg:absolute lg:top-2/3 left-0' src={aboutUsLg} alt="" />

        </div>
      </div>
    </div>
  )
}
