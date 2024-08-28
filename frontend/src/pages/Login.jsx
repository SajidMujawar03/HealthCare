import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  
  const [formData,setFormData]=useState({
    email:'',
    password:'',
  })

  const handleInputChange=(e)=>{
      setFormData({
        ...formData,
        [e.target.name]:e.target.value,
  })
  }


  return (
    <>
    
    <section className="px-5 lg:px-0">
<div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
  <h3 className="text-slate-900 text-[22px] leading-9 font-bold mb-10">
    Hello! <span className="text-blue-800">Welcome</span> Back
  </h3>

  <form action="" className="py-4 md:py-0">
    <div className="mb-5">
      <input type="email" placeholder="Enter Your Email" name="email" value={formData.email} onChange={handleInputChange} className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-700 text-[16px] leading-7 text-slate-900 placeholder:text-slate-600  cursor-pointer" required autoComplete="username"/>
    </div>
    <div className="mb-5">
      <input type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleInputChange} className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-700 text-[16px] leading-7 text-slate-900 placeholder:text-slate-600  cursor-pointer" required autoComplete="current-password"/>
    </div>

    <div className="mt-7">
      <button
      type="submit"
       className="w-full bg-blue-700 text-white text-[18px] leading-[30px] rounded-lg px-4 py-4">
        Login
      </button>
    </div>

    <p className="mt-5 text-slate-700 text-center">
      Don't have an account? <Link to="/register" className="text-blue-700 font-medium ml-1">
      Register
      </Link>
    </p>

  </form>


</div>

    </section>
    
    </>
  )
}

export default Login