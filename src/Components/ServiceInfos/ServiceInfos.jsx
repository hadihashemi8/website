import React, { useState } from 'react'
import ServicesBox from '../ServicesBox/ServicesBox'


const ourServices = [
    { id: 1, service: "طراحی و توسعه", img: "./src/assets/images/servicesBox-img1.png" },
    { id: 2, service: "طراحی محصول", img: "./src/assets/images/servicesBox-img4.png" },
    { id: 3, service: "دیجیتال مارکتینگ", img: "./src/assets/images/servicesBox-img3.png" },
    { id: 4, service: "پشتیبانی و مدیریت", img: "./src/assets/images/servicesBox-img2.png" },
]


const serviceDetails = [
    {
        id: 1, service: "طراحی و توسعه", img: "./src/assets/images/servicesInfos-img1.png", options: [
            { id: 1, text: "طراحی رابط کاربری" },
            { id: 2, text: "توسعه وب" },
            { id: 3, text: "توسعه موبایل" },
            { id: 4, text: "طراحی اپلیکیشن" },
        ]
    },
    {
        id: 2, service: "طراحی محصول", img: "./src/assets/images/servicesInfos-img2.png", options: [
            { id: 1, text: "طراحی گرافیکی" },

        ]
    },
    {
        id: 3, service: "دیجیتال مارکتینگ", img: "./src/assets/images/servicesInfos-img3.png", options: [
            { id: 1, text: "بازاریابی محتوا" },
            { id: 2, text: "سئو" },

        ]
    },
    {
        id: 4, service: "پشتیبانی و مدیریت", img: "./src/assets/images/servicesInfos-img4.png", options: [
            { id: 1, text: "مشاوره رایگان" },
            { id: 2, text: "پشتیبانی آنلاین " },
            { id: 3, text: "مدیریت محصول" },
            { id: 4, text: "تضمین کیفیت" },

        ]
    },
]

export default function ServiceInfos() {

    const [service, setService] = useState([serviceDetails[0]])


    const showDetalsService = (pId) => {                                                    
        setService(serviceDetails.filter(service => service.id == pId))
       
        
    }

    return (
        <div className='w-full flex flex-col items-center '>
            <div className='flex flex-wrap w-full justify-evenly  md:px-14 mt-14 md:mt-0  lg:hidden'>
                {ourServices.map(service => (
                    <ServicesBox key={service.id} {...service} showDetalsService={showDetalsService} />
                ))}
            </div>
            <div>
                {service.map(ser => (
                    <div key={ser.id} className=' pt-36   lg:pt-4 px-6  w-full '>
                        <h2 className='text-2xl text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]  lg:hidden'>{ser.service}</h2>
                        <div className=' mt-8 flex flex-col flex-start lg:flex-row-reverse  '>
                            <div className='lg:flex lg:flex-col lg:items-center mt-8 lg:mt-0' >
                                <img src={ser.img} alt="" />
                                <div className=' flex-wrap lg:flex-nowrap w-full justify-evenly   mt-14 md:mt-0 hidden  lg:flex'>
                                    {ourServices.map(service => (
                                        <ServicesBox key={service.id} {...service} showDetalsService={showDetalsService} />
                                    ))}
                                </div>
                            </div>

                            <div >
                                <h3 className='self-start  text-3xl  text-main-gold drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hidden lg:block'>خدمات ما</h3>
                                <h2 className='text-2xl mt-4  text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hidden lg:block'>{ser.service}</h2>
                                <div className='md:ml-4 mt-4 '>
                                    <p className='text-sm text-[#858585] my-2'>. فرم را تکمیل کنید ،  کارشناسان  در اولین فرصت با شما تماس خواهند گرفت</p>
                                    <p className='text-sm text-[#858585] my-2'>جهت مشاوره و راه اندازی و توسعه کسب و کارهای آنلاین با ما تماس بگیرید.</p>
                                    <p className='text-sm text-[#858585] my-2'>ما راه های بسیاری برای ارتباط نزدیک با شما در نطر گرفته ایم ، اما هیچ راهی سریع تر از این نیس !</p>
                                </div>
                                <ul className='flex flex-col items-start mt-8 md:mt-0'>
                                    {ser.options.map(opt => (
                                        <li className='flex flex-row-reverse items-center text-white my-2'>{opt.text} <img className='ml-2' src="./src/assets/polygons/service-Infos-Icon.png" alt="" /></li>

                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
