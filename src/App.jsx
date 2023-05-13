import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './Components/Header-section/NavBar/NavBar'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import ConttactUs from './Pages/ConttactUs/ConttactUs'
import { FaBars } from "react-icons/fa"
import MenuBar from "./Components/Header-section/MenuBar/MenuBar"
import Services from './Pages/Services/Services'
import ContactUsForm from './Pages/ContactUsForm/ContactUsForm'
import AboutUs from './Pages/AboutUs/AboutUs'
import Categories from './Pages/Categories/Categories'
import Docs from './Pages/Docs/Docs'
import DocsText from './Pages/DocsText/DocsText'

function App() {

  const [navbarIsShow, setNavbarIsShow] = useState(false)
  const [menuBarIsShow, setMenuBarIsShow] = useState(false)


  useEffect(() => {
    if (window.innerWidth > 768) {
      setNavbarIsShow(true)
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setNavbarIsShow(true)
      } else if (window.innerWidth < 768) {
        setNavbarIsShow(false)

      }
    })


  })

  const closeMenuBar = () => {
    setMenuBarIsShow(false)
  }

  return (
    <div className='max-w-screen-2xl mx-auto bg-main-color  '>
      {navbarIsShow && <NavBar />}
      {menuBarIsShow && <MenuBar closeMenuBar={closeMenuBar} />}
      <div className='absolute top-0 right-0  py-6 px-6 sm:px-10 w-full md:hidden z-20 flex items-center justify-between'>
        < FaBars className='text-white text-2xl font-normal cursor-pointer' onClick={() => setMenuBarIsShow(true)} />
        <h3 className='text-white text-4xl'>لوگو</h3>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactUs' element={<ConttactUs />} />
        <Route path='/contactUs/contactForm' element={<ContactUsForm />} />
        <Route path='/services' element={<Services />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/docs' element={<Docs />} />
        <Route path='/docs/doc/:docId' element={<DocsText />} />
      </Routes>
    </div>
  )
}

export default App
