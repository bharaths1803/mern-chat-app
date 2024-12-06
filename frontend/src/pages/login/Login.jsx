import React from 'react'

export const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='font-semibold text-3xl text-center text-gray-300'>
          Login
          <span className='text-blue-500'> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className = 'label p-2'>
              <span className='label-text text-base'>
                Username
              </span>
            </label>  
            <input className='input input-bordered w-full h-10' type='text' placeholder='Enter a username' />
          </div>
          <div>
            <label className = 'label p-2'>
              <span className='label-text text-base'>
                Password
              </span>
            </label>  
            <input className='input input-bordered w-full h-10' type='text' placeholder='Enter Password' />
          </div>
          <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            {"Don't"} have an account?
          </a>
          <div>
            <button className='btn btn-block btn-sm mt-2'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
