import React from 'react'

import heroImage01 from "../assets/images/heroImage01.jpg"
import heroImage02 from "../assets/images/heroImage02.jpg"
import heroImage03 from "../assets/images/heroImage03.jpg"

import icon01 from "../assets/images/icon01.jpg"
import icon03 from "../assets/images/icon03.jpg"
import icon02 from "../assets/images/icon02.jpg"

import videoIcon from "../assets/images/videoIcon.jpg"

import avatarIcon from "../assets/images/avatarIcon.png"
import featureImg from "../assets/images/featureImg.jpg"

import {Link} from "react-router-dom"
import {BsArrowRight} from "react-icons/bs"

import About from '../components/About/About'
import ServiceList from '../components/Services/serviceList.jsx'

// import heroImg01 from "../assets/images/heroImg01.png"
const Home = () => {
  return (
    <>
    <section className='hero_section pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

            <div>
              <div className='lg:w-[570px]'>
                  <h1 className='text-[36px] leading-[46px] text-zinc-950 font-[800] md:text-[60px] md:leading-[70px]'>We help patients live a healthy, longer life.</h1>
                  <p className='text_para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nemo ex quasi totam quo! Aliquid debitis alias et quisquam, animi praesentium facere saepe impedit, rem, tenetur reiciendis. Nostrum, tenetur illo earum delectus consequatur sint provident!</p>
                  <button className='btn'>Request Appointment</button>
              </div>

              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div >
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:heading-[54px] font-[700] text-slate-900 '>
                    30+

                  </h2>
                  <span className='w-[100px] h-2 bg-yellow-300 rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Years of experience</p>
                </div>

                <div >
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:heading-[54px] font-[700] text-slate-900 '>
                    15+

                  </h2>
                  <span className='w-[100px] h-2 bg-purple-300 rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Clinic Location</p>
                </div>

                <div >
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:heading-[54px] font-[700] text-slate-900 '>
                    100%

                  </h2>
                  <span className='w-[100px] h-2 bg-cyan-300 rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Patient satisfaction</p>
                </div>


              </div>
            </div>

            <div className='flex gap-[10px] justify-end '>
                <div >
                  <img className="w-[600px] md:w-[500px]"  src={heroImage01} alt=""  />
                </div>
                <div className='md:ml-2 md:mr-2 mt-[30px] '>
                  <img src={heroImage02} alt="" className='w-[400px] mb-[30px] md:w-[300px]'/>
                  <img src={heroImage03} alt="" className='w-[400px] md:w-[300px]' />
                </div>
            </div>
          </div>
        </div>
    </section>

    <section>
    <div className="container my-10">
        <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Providing the best medical services</h2>
            <p className='text_para text-center'>World class care for everyone . Our health system offers unmatched expert health care.</p>
        </div>

        {/* <div className="flex flex-wrap items-center flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]"></div> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
          <div className='py-[30px] px-5'>
            <div className="flex items-center justify-center">
              <img src={icon01} alt=""  className='h-[300px]'/>
            </div>
            <div className="mt-[30px]">
              <h2 className='text-[26px] leading-9 text-center font-[700] text-neutral-900'>Find a Doctor</h2>
              <p className='text-[16px] leading-7 text-slate-700 font-[400] mt-4 text-center'>World class care for everyone. Our health System offers unmatched, expert health care.  From the lab to the clinic</p>
              <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-indigo-800 hover:border-none">
              <BsArrowRight className='group-hover:text-white'></BsArrowRight>
              </Link>
            </div>
          </div>
          <div className='py-[30px] px-5'>
            <div className="flex items-center justify-center">
              <img src={icon02} alt="" className='h-[300px]' />
            </div>
            <div className="mt-[30px]">
              <h2 className='text-[26px] leading-9 text-center font-[700] text-neutral-900'>Find a Location</h2>
              <p className='text-[16px] leading-7 text-slate-700 font-[400] mt-4 text-center'>World class care for everyone. Our health System offers unmatched, expert health care.  From the lab to the clinic</p>
              <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-indigo-800 hover:border-none">
              <BsArrowRight className='group-hover:text-white'></BsArrowRight>
              </Link>
            </div>
          </div>
          <div className='py-[30px] px-5'>
            <div className="flex items-center justify-center">
              <img src={icon03} alt=""  className='h-[300px]'/>
            </div>
            <div className="mt-[30px]">
              <h2 className='text-[26px] leading-9 text-center font-[700] text-neutral-900'>Book Appointment</h2>
              <p className='text-[16px] leading-7 text-slate-700 font-[400] mt-4 text-center'>World class care for everyone. Our health System offers unmatched, expert health care.  From the lab to the clinic</p>
              <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-indigo-800 hover:border-none">
              <BsArrowRight className='group-hover:text-white'></BsArrowRight>
              </Link>
            </div>
          </div>
        </div>
        

    </div>
    </section>

    <About/>

    <section>
      <div className="container">
        <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>Our Services</h2>
        <p className='text_para text-center'>World class care for everyone. Our health System offers unmatched, expert health care.</p>
        </div>

        <ServiceList/>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row ">
          <div className="xl:w-[670px]">
          <h2 className="heading">
            Get virtual treatment<br/> anytime.
          </h2>

          <ul className="pl-4">
            <li className="text_para">1. Schedule the appointment directly.</li>
            <li className='text_para'>2. Search for your physician here, and contact their office</li>
            <li className='text_para'>3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.</li>
          </ul>

          <Link to="/"><button className="btn">Learn More</button></Link>
          </div>


        
          <div className="relative z-10 xl:w-[770px] mt-[50px] lg:mt-0">
     
      <img src={featureImg} alt="" className="w-3/4 rounded-md mx-auto" />

   
      <div className="absolute bottom-4  left-4 lg:left-3  w-[150px] lg:w-[248px] p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] bg-white z-30 flex items-center justify-center flex-col">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-[6px] items-center lg:gap-3 w-[100px]">
        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-black">Tue, 24</p>
        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-slate-600">10:00</p>
        </div>
        <div className=''>
        <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow-500 rounded py-1 px-[6px] lg:py-3 lg:px-[9px] ">
          <img src={videoIcon} alt="" />
        </span>
        </div>
        </div>
        
        <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-cyan-600 font-[500] mt-2 lg:mt-4 rounded-full">
          Consultation

        </div>

        <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] ">
          <img src={avatarIcon} alt="" className='w-[40px]'/>
          <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-black'>
            Wayne Collins
          </h4>
        </div>

      </div>
    </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        
      </div>
    </section>
    </>
  )
}

export default Home
