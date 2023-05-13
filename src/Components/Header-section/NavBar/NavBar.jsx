import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='h-[80px]  flex items-center justify-start sm:mx-8 xl:mx-20'>
        <ul className='flex '>
           <NavLink className='ml-6 text-white py-2 px-4 rounded-3xl hover:bg-main-gold hover:text-main-color transition-all duration-200 cursor-pointer'to='/'> <li >لوگو</li></NavLink>
           <NavLink className='ml-6 text-white py-2 px-4 rounded-3xl hover:bg-main-gold hover:text-main-color transition-all duration-200 cursor-pointer'to='/contactUs'> <li >تماس باما</li></NavLink>
           <NavLink className='ml-6 text-white py-2 px-4 rounded-3xl hover:bg-main-gold hover:text-main-color transition-all duration-200 cursor-pointer'to='/services'> <li >خدمات</li></NavLink>
           <NavLink className='ml-6 text-white py-2 px-4 rounded-3xl hover:bg-main-gold hover:text-main-color transition-all duration-200 cursor-pointer'to='/categories'> <li >نمونه کار</li></NavLink>
           <NavLink className='ml-6 text-white py-2 px-4 rounded-3xl hover:bg-main-gold hover:text-main-color transition-all duration-200 cursor-pointer'to='/docs'> <li >مقاله</li></NavLink>
           <NavLink className='ml-6 text-white py-2 px-4 rounded-3xl hover:bg-main-gold hover:text-main-color transition-all duration-200 cursor-pointer'to='/aboutUs'> <li >درباره ما</li></NavLink>
           
        </ul>
    </div>
  )
}
