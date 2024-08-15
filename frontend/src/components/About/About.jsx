import React from 'react'
import aboutImg from "../../assets/images/aboutImg.jpg"
import aboutCardImg from "../../assets/images/aboutCardImg.jpg"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <section className='py-0'>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ">
                    <img src={aboutImg} alt="" className='w-[400px]'/>
                    <div className="absolute z-20 bottom-4 lg:bottom-32 w-[200px] md:w-[200px] right-[-30%] md:right-[-7%] lg:right-[40%]">
                        <img src={aboutCardImg} alt="" className='w-[200px] lg:w-[400px]'/>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>Proud to be one of the nations best</h2>
                    <p className='text_para'>Welcome to our hospital's online appointment system. Easily book your consultation with your preferred doctor, choose a convenient time slot, and receive instant confirmation. Manage your appointments, access your medical history, and receive reminders—all in one secure place. Your health and privacy are our top priorities. Book your appointment today!</p>
                    <p className="text_para mt-[30px]">Quickly schedule your medical appointments online with ease. Access your health records securely and stay informed with timely reminders. Experience hassle-free healthcare management from the comfort of your home.</p>
                <Link to="/">
                <button className='btn'>Learn More</button>
                </Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About