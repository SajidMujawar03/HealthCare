import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillLinkedin,AiFillYoutube,AiFillTwitterSquare,AiFillInstagram ,AiFillGithub } from "react-icons/ai";
import logo from "../../assets/images/logo.jpg"

const socialLinks=[
  {
    path:"https://www.youtube.com",
    icon:<AiFillYoutube className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"https://www.twitter.com",
    icon:<AiFillTwitterSquare className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"https://www.linkedin.com",
    icon:<AiFillLinkedin className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"https://www.instagram.com",
    icon:<AiFillInstagram className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"https://www.github.com",
    icon:<AiFillGithub className='group-hover:text-white w-4 h-5'/>
  }
]

const quickLinks01=
[
  {
    path:"/home",
    display:"Home",
  },
  {
    path:"/",
    display:"About Us",
  },
  {
    path:"/services",
    display:"Services",
  },
  {
    path:"/",
    display:"Blog",
  },
]

const quickLinks02=
[
  {
    path:"/find-a-doctor",
    display:"Find A Doctor",
  },
  {
    path:"/",
    display:"Request an Appointment",
  },
  {
    path:"/",
    display:"Get A Opinion",
  },
]


const quickLinks03=
[
  {
    path:"/",
    display:"Donate",
  },
  {
    path:"/contact",
    display:"Contact Us",
  },
 
]



const Footer = () => {
  const year=new Date().getFullYear()
  return (
    <>
     <footer className='pb-16 pt-10'>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-[400] text-slate-600 mt-4'>
              Copyright
            </p>
            <div className='flex items-center gap-3 mt-4'>
              {
                socialLinks.map((link,index)=>(
                  <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-blue-700 hover:border-none'>
                    {link.icon}
                  </Link>
                ))
              }
            </div>
          </div>
        


        <div >
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-slate-900 '>Quick Links</h2>

            <ul>
              {
                quickLinks01.map((link,index)=>(
                  <li className='mb-4'>
                 <Link to={link.path} className='text-[16px] leading-7 font-[400] text-slate-700'>
                      {link.display}
                 </Link>
                 </li>
                ))
              }
            </ul>
        </div>
        <div >
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-slate-900 '>I Want To : </h2>

            <ul>
              {
                quickLinks02.map((link,index)=>(
                  <li className='mb-4'>
                 <Link to={link.path} className='text-[16px] leading-7 font-[400] text-slate-700'>
                      {link.display}
                 </Link>
                 </li>
                ))
              }
            </ul>
        </div>
        <div >
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-slate-900 '>Support</h2>

            <ul>
              {
                quickLinks03.map((link,index)=>(
                  <li className='mb-4'>
                 <Link to={link.path} className='text-[16px] leading-7 font-[400] text-slate-700'>
                      {link.display}
                 </Link>
                 </li>
                ))
              }
            </ul>
        </div>
        </div>
      </div>
     </footer>
    </>
  )
}

export default Footer
