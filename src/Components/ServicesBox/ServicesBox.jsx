import React, { useEffect } from 'react'


export default function ServicesBox(props) {

   const activeShowDetails = () => {
    props.showDetalsService(props.id)
   }


    return (
        <div onClick={activeShowDetails} className='relative m-1 p-3 lg:p-1 lg:py-2 py-4  flex items-center justify-center w-[156px] cursor-pointer' >
            <img className='absolute top-0 left-0 w-full h-full' src="./src/assets/polygons/servicesBox-bg.png" alt="" />
            <div className='z-10  flex flex-col items-center '>
                <img src={props.img} alt="" />
                <h2 className='text-base lg:text-xs text-main-gold font-bold mt-2 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>{props.service}</h2>
            </div>
        </div>

    )
}
