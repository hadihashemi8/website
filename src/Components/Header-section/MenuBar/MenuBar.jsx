import React from 'react'
import { GrClose } from "react-icons/gr"
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"




export default function MenuBar({ closeMenuBar }) {
    return (
        <motion.div initial={{width:0 }} animate={{width:'100%'}} exit={{x:0}} className='absolute  z-50 top-0 right-0 w-full h-[100vh] '>
            <div className='fixed w-2/3 small:w-1/2 py-6 px-4 h-full bg-white  top-0 right-0 bg-no-repeat bg-cover bg-[url("./src/assets/polygons/menu-bar.png")] '>
                {/* <img className='fixed  h-full top-0 right-0 bg-[rgba(255,255,255,0.9)] ' src="./src/assets/polygons/menu-bar.png" alt="" /> */}
                <GrClose className='mr-auto ml-4 cursor-pointer' onClick={() => closeMenuBar()} />
                <div className='mt-6 '>
                    <ul>
                        <Link to='/contactUs' onClick={() => closeMenuBar()}>
                        <li className= '  text-sm  py-4 px-1 transition-all duration-200 text-main-color flex items-center cursor-pointer hover:text-main-gold hover:bg-main-color '> <span>
                            <img className='ml-2 group-hover:' src="./src/assets/icons/phon.png" alt="" />
                        </span> تماس با ما</li>
                        </Link>
                        <Link to='/services' onClick={() => closeMenuBar()}>
                        <li className= '  text-sm  py-4 px-1 transition-all duration-200 text-main-color flex items-center cursor-pointer hover:text-main-gold hover:bg-main-color '> <span>
                            <img className='ml-2 group-hover:' src="./src/assets/icons/category.png" alt="" />
                        </span> خدمات</li>
                        </Link>
                        <Link to='/categories' onClick={() => closeMenuBar()}>
                        <li className= '  text-sm  py-4 px-1 transition-all duration-200 text-main-color flex items-center cursor-pointer hover:text-main-gold hover:bg-main-color '> <span>
                            <img className='ml-2 group-hover:' src="./src/assets/icons/note.png" alt="" />
                        </span> نمونه کار</li>
                        </Link>
                        <Link to='/docs' onClick={() => closeMenuBar()}>
                        <li className= '  text-sm  py-4 px-1 transition-all duration-200 text-main-color flex items-center cursor-pointer hover:text-main-gold hover:bg-main-color '> <span>
                            <img className='ml-2 group-hover:' src="./src/assets/icons/menu-board.png" alt="" />
                        </span> مقاله</li>
                        </Link>
                        <Link to='/AboutUs' onClick={() => closeMenuBar()}>
                        <li className= '  text-sm  py-4 px-1 transition-all duration-200 text-main-color flex items-center cursor-pointer hover:text-main-gold hover:bg-main-color '> <span>
                            <img className='ml-2 group-hover:' src="./src/assets/icons/profile-2user.png" alt="" />
                        </span> درباره ما</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}
