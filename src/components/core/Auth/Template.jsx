import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
const Template = ({heading , subheading, image, specialText, page}) => {
  return (
    <div className='mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12'>
      <div className='mx-auto w-11/12 max-w-[450px] md:mx-0'>
        <h1 className='text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5 mt-5'>{heading}</h1>
        <p className='text-richblack-100 mt-5'>{subheading} <span className='font-edu-sa font-bold italic text-blue-100'>{specialText}</span></p>
        <div className='mt-5'>
          {
            page === 'login' ? (<LoginForm></LoginForm>) : (<SignupForm></SignupForm>) 
          }
        </div>
      </div>
      
      <div>
        <div className=' mx-auto w-11/12 max-w-[470px] md:mx-0'>
          <img src={image} alt={page} className=' -top-4 right-4 z-20'/>
          {/* <img src={frame} alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default Template