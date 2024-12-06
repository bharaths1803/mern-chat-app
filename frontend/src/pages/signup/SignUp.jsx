import React from 'react'
import GenderCheckbox from './GenderCheckbox'

export const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='font-semibold text-3xl text-center text-gray-300'>
          Signup
          <span className='text-blue-500'> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className = 'label p-2'>
              <span className='label-text text-base'>
                Full Name 
              </span>
            </label>  
            <input className='input input-bordered w-full h-10' type='text' placeholder='Bharath' />
          </div>
          <div>
            <label className = 'label p-2'>
              <span className='label-text text-base'>
                Username
              </span>
            </label>  
            <input className='input input-bordered w-full h-10' type='text' placeholder='bharath' />
          </div>
          <div>
            <label className = 'label p-2'>
              <span className='label-text text-base'>
                Password
              </span>
            </label>  
            <input className='input input-bordered w-full h-10' type='text' placeholder='Confirm Password' />
          </div>
          <div>
            <label className = 'label p-2'>
              <span className='label-text text-base'>
                Confirm Password
              </span>
            </label>  
            <input className='input input-bordered w-full h-10' type='text' placeholder='Enter Password' />
          </div>
          <GenderCheckbox />
          <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
          </a>
          <div>
            <button className='btn btn-block btn-sm mt-2'>Signup</button>
          </div>
        </form>
      </div>
    </div>
  )
}
