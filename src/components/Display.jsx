import React from 'react'
import Profile from '../assets/pfp2.jpeg'
import {FaMobile,FaEnvelope,FaHouseUser} from 'react-icons/fa'

const Display = ({blogContent}) => {
  return (
    <div className='m-16 border-2  border-black rounded-lg w-2/5 flex h-[85vh] overflow-auto'>
      <div className='h-full bg-slate-600 max-w-[100vh] p-12'>
            <div className='pt-24 pl-12 flex w-full justify-center'>
              <img src={Profile} alt="Sample Profile image" className='rounded-full h-48 w-48 '/>
            </div>


            <div className='text-white font-bold text-4xl underline flex flex-col items-center h-1/2 w-full mt-36'>
              <h1>Contacts</h1>
             <div className='items mt-4'>
              <p ><span className='mt-8 text-2xl'><FaMobile/></span></p>
              <p className='mt-8 text-2xl'><span className='text-2xl'><FaEnvelope /></span></p>
              <p className='mt-8 text-2xl'><span><FaHouseUser /></span></p>
             </div>

             <div>
              <h1 className='text-white font-bold text-4xl mt-24 underline'>Education</h1>
             </div>
            </div> 
        </div>

      <div className='ml-8 flex flex-col '>
        <h1 className='font-bold text-3xl mt-48'>{blogContent}</h1>
        <div>
          <h1 className='font-bold font-mono underline text-3xl mt-24'>Profile</h1>
        </div>

        <div>
          <h1 className='font-bold text-3xl underline font-mono mt-24'>Word Experience</h1>
        </div>
      </div>
    </div>
  )
}

export default Display
