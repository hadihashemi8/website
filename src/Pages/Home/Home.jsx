import React from 'react'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Categories from '../../Components/Categories/Categories'
import Docs from '../../Components/Docs/Docs'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header-section/Header/Header'
import OurServices from '../../Components/OurServices/OurServices'
import {motion} from "framer-motion"



export default function Home() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
       <Header />
        <AboutUs />
        <OurServices />
        <Categories />
        <Docs />
        <Footer />
    </motion.div>
  )
}
