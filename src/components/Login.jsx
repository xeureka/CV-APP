import React,{useState,useEffect} from 'react'
import Profile from './assets/pfp2.jpeg'

const App = () => {
  return (
    <div className='bg-slate-900 h-screen p-6'>
      <h1 className='mb-12 font-mono font-bold text-6xl flex justify-center text-white'>DECODERS</h1>
      <div className='flex justify-center'>
        <img src={Profile} alt="" className=' m-1/2 mb-8 w-48 h-48 rounded-full'/>

      </div>

      <form>

        <div className='flex justify-center flex-col items-center gap-4'>
          <input type="text" placeholder='User Name' className='p-4 w-96 border-y-gray-100 border-x-gray-200  rounded-xl underline-offset-2'/><br />
          <input type="password" placeholder='Password' className='p-4 w-96 border-y-gray-100 border-x-gray-200 rounded-xl underline-offset-2'/><br />
        </div>
        

        <div className='flex justify-center my-8'>
          <button className='rounded-xl font-bold text-xl bg-green-400 text-white px-12 py-4  flex justify-center items-center w-96 shadow-gray-400 hover:bg-green-500 active:bg-green-300'>LOGIN</button>

        </div>
      </form>

      <div>
        <ul className='flex justify-center flex-col items-center gap-8'>
          <li className='text-white text-lg'>Forgot <a href="#" className='font-mono text-green-600'>Username</a> | <a className='font-mono text-green-600' href="#">Password</a></li>
          <li className='text-white text-lg'>Don't have an account ? <a className='font-mono text-green-600' href="#">Sign Up</a></li>
        </ul>
      </div>
    </div>
  )
}

export default App
