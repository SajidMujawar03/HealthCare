import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../config.js"
import { authContext } from "../context/AuthContext.jsx"
import { toast } from "react-toastify"
import HashLoader from "react-spinners/HashLoader.js"

const Login = () => {
  
  const [formData,setFormData]=useState({
    email:'',
    password:'',
  })

  const [loading,setLoading]=useState(false)
  const {dispatch}=useContext(authContext)

  const navigate=useNavigate()

  const handleInputChange=(e)=>{
      setFormData({
        ...formData,
        [e.target.name]:e.target.value,
  })
  }

  
  const submitHandler=async (e)=>{
  
    
    e.preventDefault()
  
    setLoading(true)

    // console.log(formData)
    
    try {
      const res =await fetch(`${BASE_URL}/auth/login`,
        {method:'post',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData),
        }
      )

      const result=await res.json()
      console.log(result.data,result.token,result.role)
 
      // console.log(res.ok)
      if(!res.ok)
      {
       
        throw new Error(result.message || "something went wrong")
      }

        // console.log("hi")
      dispatch({
        type:"LOGIN_SUCCESS",
        payload:{
          user:result.data,
          role:result.role,
          token:result.token
        }
      })

      console.log("hi")
      setLoading(false)
      toast.success(result.message)

      navigate('/')
      
    } catch (error) {
      
      toast.error(err.message)

      setLoading(false)
    }
    
  }


  return (
    <>
    
    <section className="px-5 lg:px-0">
<div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
  <h3 className="text-slate-900 text-[22px] leading-9 font-bold mb-10">
    Hello! <span className="text-blue-800">Welcome</span> Back
  </h3>

  <form action="" className="py-4 md:py-0" onSubmit={submitHandler}>
    <div className="mb-5">
      <input type="email" placeholder="Enter Your Email" name="email" value={formData.email} onChange={handleInputChange} className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-700 text-[16px] leading-7 text-slate-900 placeholder:text-slate-600  cursor-pointer" required autoComplete="username"/>
    </div>
    <div className="mb-5">
      <input type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleInputChange} className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-700 text-[16px] leading-7 text-slate-900 placeholder:text-slate-600  cursor-pointer" required autoComplete="current-password"/>
    </div>

    <div className="mt-7">
      <button
      type="submit"
      disabled={loading && true}
       className="w-full bg-blue-700 text-white text-[18px] leading-[30px] rounded-lg px-4 py-4">
        {loading ? <HashLoader color="#ffffff" size={35}/>:"Login"}
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