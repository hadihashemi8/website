import React from 'react'
import useAos from '../../hooks/useAos'

export default function ServiceSection() {

    const motion = useAos()



    return (
        <div className=' pt-36 w-full md:px-10 lg:px-16 ' data-aos="fade-up" data-aos-duration="2000">
            <div className='w-full  relative flex flex-col items-center   p-4'>
                <img className='absolute top-0 left-0 w-full h-full md:hidden' src="./src/assets/polygons/ServiceSection-bg.png" alt="" />
                <img className='absolute top-0 left-0 w-full h-full hidden md:block' src="./src/assets/polygons/ServiceSection-bg-lg.png" alt="" />
                    <h3 className='text-xl text-white text-center w-2/3 z-10 mt-4 md:mt-8'>هر آنچه که برای داشتن یک سایت عالی نیاز داریددر اختیارتان می گذاریم</h3>
                <div className='w-full z-10 flex flex-col items-center md:flex-row md:justify-around mt-16 md:mt-10'>
                    <div className='flex flex-col items-center mt-16  '>
                        <img className='w-[200px]' src="./src/assets/images/serviceSection-Bg1.png" alt="" />
                        <p className='text-sm text-white w-2/3 text-center my-6'>مشاوره دقیق و متناسب
                            با کسب و کار شما</p>
                    </div>
                    <div className='flex flex-col items-center mt-16  '>
                        <img className='w-[200px]' src="./src/assets/images/serviceSection-Bg2.png" alt="" />
                        <p className='text-sm text-white w-2/3 text-center my-6'>طراحی سایت با بالاترین کیفیت
                            در کوتاه ترین زمان</p>
                    </div>
                    <div className='flex flex-col items-center mt-16  '>
                        <img className='w-[200px]' src="./src/assets/images/serviceSection-Bg3.png" alt="" />
                        <p className='text-sm text-white w-2/3 text-center my-6'>پشتیبانی سایت شما
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
