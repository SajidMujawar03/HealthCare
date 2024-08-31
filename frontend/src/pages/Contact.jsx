import React from 'react'

const Contact = () => {
  return (
    <>
    
    <div className="px-4 mx-auto max-w-screen-md">

      <h2 className="heading text-center">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text_para">
        Got Technical Issue ? Want to Send Feedback About a Beta Feature? Let Us Know
              </p>


      <form action="">
        <div>
            <label htmlFor="email" className="form_label">Your Email</label>
            <input type="email" id='email' placeholder="example@gmail.com" className="form_input mt-1" />


        </div>
        <div>
            <label htmlFor="subject" className="form_label">subject</label>
            <input type="text" id='subject' placeholder="Let Us Know How We Can Help You" className="form_input mt-1" />


        </div>

        <div className='sm:col-span-2'>
            <label htmlFor="message" className="form_label">subject</label>
            <textarea
            type="text"
             id='message' placeholder="Leave A Comment..."
            rows='6'
             className="form_input mt-1" />


        </div>

        <button type="submit" className='btn rounded-md sm:w-fit'>Submit</button>
      </form>
    </div>
    
    
    </>
  )
}

export default Contact