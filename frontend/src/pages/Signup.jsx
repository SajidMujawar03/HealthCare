import React, { useState } from 'react'
import signupImg from '../assets/images/signupImg.jpg'
import avatar from "../assets/images/doctor-img01.jpg"
import { Link } from 'react-router-dom'

const Signup = () => {

  const [selectedFile,setSelectedFile]=useState('')
  const [previewURL,setPreviewURL]=useState('')

  const [formData,setFormData]=useState(
    {
      name:'',
      email:'',
      password:'',
      photo:selectedFile,
      gender:'',
      role:'patient',
    }
  )

  const handleInputChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
  }


  const handleFileInputChange=async (e)=>{
      const file =e.target.files[0]

      console.log(file)
  }

  const submitHandler=async (e)=>{
    e.preventDefault()
  }

  return (
    <>
    <section className="px-5 xl:px-0">
  
    <div className="max-w-[1170px] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2">
    
    <div className="hidden lg:block bg-blue-700 rounded-l-lg">

      <figure className="rounded-l-lg">
        <img src={signupImg} alt="" />
      </figure>
    </div>


    <div className="rounded-l-lg lg:pl-16 py-10">
      <h3 className="text-slate-900 text-[22px] leading-9 font-bold mb-10">
        Create an <span className='text-blue-700 '>account</span>
      </h3>

      <form onSubmit={submitHandler}>
      <div className="mb-5">
      <input 
      type="text" 
      placeholder="Full Name" 
      name="name" 
      value={formData.name}
      onChange={handleInputChange}
      className="w-full  py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-700 text-[16px] leading-7 text-slate-900 placeholder:text-slate-600  cursor-pointer" required/>
    </div>
    <div className="mb-5">
      <input 
      type="email" 
      placeholder="Enter Your Email" 
      name="email" 
      value={formData.email}
      onChange={handleInputChange}
      className="w-full  py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-700 text-[16px] leading-7 text-slate-900 placeholder:text-slate-600  cursor-pointer" required/>
    </div>
    <div className="mb-5">
      <input 
      type="password" 
      placeholder="Enter Your Password" 
      name="password" 
      value={formData.password}
      onChange={handleInputChange}
      className="w-full  py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-700 text-[16px] leading-7 text-slate-900 placeholder:text-slate-600  cursor-pointer" required/>
    </div>

    <div className="mb-5 flex items-center justify-between">
      <label className="text-slate-900 font-bold text-[16px] leading-7">
        Are you a :
        <select 
        name="role" 
        className="text-slate-600 font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
        value={formData.role}
        onChange={handleInputChange}
        >
          <option value="patient" className="">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
      </label>

      <label  className="text-slate-900 font-bold text-[16px] leading-7">
        Gender :
        <select 
        name="gender" 
        className="text-slate-600 font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
        onChange={handleInputChange}
        value={formData.gender}
        >
          <option value="">Select</option>
          <option value="male" className="">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
    </div>

    <div className="mb-5 flex items-center gap-3">
      <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-blue-700 flex items-center justify-center">
        <img src={avatar} alt="" className='w-full rounded-full'/>
      </figure>

      <div className='relative w-[130px] h-[50px]'>
        

      <label 
        htmlFor="custoFile" 
        className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-slate-900 font-semibold rounded-lg truncate  cursor-pointer z-0">
          Upload Photo
        </label>
       
        <input 
        type="file" 
        name='photo' 
        id='customFile' 
        accept='.jpg , .png , '
        onChange={handleFileInputChange}
      
        className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-99'  
        />

      </div>
    </div>

    <div className="mt-7">
      <button
      type="submit"
       className="w-full bg-blue-700 text-white text-[18px] leading-[30px] rounded-lg px-4 py-4">
        Sign Up
      </button>
    </div>

    <p className="mt-5 text-slate-700 text-center">
      Already have an account? <Link to="/login" className="text-blue-700 font-medium ml-1">
      Login
      </Link>
    </p>
      </form>
    </div>
    </div>
    </div>
    </section>
    
    </>
  )
}

export default Signup
