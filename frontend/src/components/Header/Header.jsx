import {useContext, useEffect,useRef} from 'react'
import { NavLink,Link } from 'react-router-dom'

import { authContext } from "../../context/AuthContext.jsx"

import logo from "../../assets/images/logo.jpg"
import userImage from "../../assets/images/userImage.jpg"


import {BiMenu} from "react-icons/bi"
import '../../App.css'

const navLinks=[
  {
    path:"/",
    display:"Home",
  },
  {
    path:"/doctors",
    display:"Find a Doctor",
  },
  {
    path:"/services",
    display:"Services",
  },
  {
    path:"/contact",
    display:"Contact"
  }
]
const Header = () => {
  const headerRef=useRef(null);
  const menuRef=useRef(null);
  const {user,role,token}=useContext(authContext)

  const handleStickyHeader=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80)
      {
        headerRef.current.classList.add('sticky_header')
      }
      else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  const toggleMenu=()=>menuRef.current.classList.toggle("show_menu")

  useEffect(()=>{
      handleStickyHeader()

      return removeEventListener("scroll",handleStickyHeader)
  },[])


  return (
    <header className='header flex items-center ' ref={headerRef}>
     <div className="container">
        <div className='flex items-center justify-around'>
          <div>
           <img src={logo} className='rounded-sm'/>
           </div>
           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu flex items-center gap-[2.7rem]">
                {
                  navLinks.map((link,index)=>
                    <li key={index}>
                        <NavLink to={link.path} className={navClass=>navClass.isActive?"text-blue-800 text-[16px] leading-7 font-[600]":"text-gray-700 text-[16px] leading-7 font-[500] hover:text-blue-700"}>
                          {link.display}
                        </NavLink>
                    </li>
                  )
                }
              </ul>
           </div>
           <div className="flex items-center gap-4">
           { token && user ?
           <div className=''>
              <Link to={role==="doctor"?'/doctors/profile/me' : '/user/profile/me'} className='grid grid-cols-2 gap-1 items-center'>
                  <figure className="w-[35px] rounded-full cursor-pointer">
                      <img src={userImage} alt="userImage" className='w-full rounded-full'/>
                  </figure>
                  <h2>{user?.name}</h2>
              </Link>
            </div>
            :

            <Link to="/login">
                <button className='bg-blue-800 py-2 px-6 font-[600] h-[44px] items-center justify-center rounded-[50px] text-white'>Login</button>
           </Link>}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span>
           
           </div>
           
        </div>
     </div>
    </header>
  )
}

export default Header