import React, { useContext, useState } from 'react'
import { authContext } from '../../context/AuthContext'


import userImage from "../../assets/images/doctor-img01.jpg"
import MyBookings from './MyBookings'
import MyProfile from './MyProfile'

const MyAccount = () => {

    const {dispatch}=useContext(authContext)

    const [tab,setTab]=useState("bookings");

    const handleLogout=()=>{
        dispatch({
            type:"LOGOUT"

        })
    }

    const handleDelete=()=>{
        dispatch({
            type:"LOGOUT"

        })
    }

  return (
   <section className='p-24'>
     <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-10'>
            <div className='pb-[50px] px-[30px] rounded-md'>
                <div className='flex items-center justify-center'>
                    <figure className='w-[100px] h-[100px] border-2 border-solid border-blue-600 rounded-full'>
                        <img src={userImage} alt="" className='w-full h-full rounded-full'/>
                    </figure>
                </div>


                <div className='text-center mt-4'>
                    <h3 className="text-[18px] leading-[30px] text-slate-700 font-bold">
                        Muhibur Rehman
                    </h3>
                    <p className="text-slate-700 text-[15px] leading-6 font-medium">
                        example@gmail.com
                    </p>

                    <p className="text-slate-700 text-[15px] leading-6 font-medium">
                        Blood Type : <span className='ml-2 text-slate-900 text-[22px] leading-8 '>O-</span>
                    </p>
                </div>


                <div className='mt-[50px] md:mt-[100px] '>
                    <button className='bg-[#181A1E] w-full p-3 text-[16px] leading-7 rounded-md text-white' onClick={handleLogout}>
                        Logout
                    </button>
                    <button className='bg-red-600 w-full mt-4  p-3 text-[16px] leading-7 rounded-md text-white' onClick={handleDelete}>
                       Delete Account
                    </button>

                </div>
            </div>

            
            <div className='md:col-span-2 md:px-[30px]'>
            <div>
                <button 
                className={`${tab==="bookings" && "bg-blue-700 text-white"} p-2 mr-5 px-5 rounded-md text-slate-900 font-semibold text-[16px] leading-7 border border-solid border-b-blue-700 `}
                onClick={()=>setTab("bookings")}
                >
                    My Bookings
                </button>

                <button 
                className={`${tab==="settings" && "bg-blue-700 text-white"} py-2  px-5 rounded-md text-slate-900 font-semibold text-[16px] leading-7 border border-solid border-b-blue-700 `}
                onClick={()=>setTab("settings")}
                >
                    Profile Settings
                </button>
                </div>

                {
                tab==="bookings" && <MyBookings/>
            }
            {
                tab==="settings" && <MyProfile/>
            }
            </div>


           
        </div>
    </div>
   </section>
  )
}

export default MyAccount