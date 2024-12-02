import React,{useState} from 'react'
import {FaPlus} from 'react-icons/fa'

const Form = () => {
  return (
    <div className='m-16 border-2 p-4 border-black rounded-lg w-2/5 '>
      <div>
        <h1 className='font-bold text-3xl'>General Information</h1>

        <div className='my-12 flex justify-between'>
            <div>
                <input type="text" placeholder='First Name' className='rounded mb-8 p-4 w-4/5'/>
                <input type="text" placeholder='Last Name' className='rounded mb-8 p-4 w-4/5' />
            </div>

            <div class="flex items-center justify-center w-5/6">
                <label
                    for="file-upload"
                    class=" p-4 flex items-center justify-center w-5/ h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer text-gray-500 hover:bg-gray-100 hover:border-gray-400 transition">
                   <p>Upload image <span className='block text-black'>{FaPlus}</span></p>
                    <input id="file-upload" type="file" class="hidden" />
                </label>
            </div>

        </div>

        <div className='flex flex-col gap-12'>
            <input type="text" placeholder='Professional Profile' className='p-4 rounded-lg'/>
            <input type="text"  placeholder='Descriptional' className=' rounded-lg h-24'/>
            <input type="tel"  placeholder='Phone' className='p-4 rounded-lg'/>
            <input type="Email" placeholder='Email' className='p-4 rounded-lg'/>
            <input type="text" placeholder='Adress' className='p-4 rounded-lg'/>

        </div>
      </div>
    </div>
  )
}

export default Form
