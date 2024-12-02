import React,{useState} from 'react'
import General from './General'
import Education from './Education'
import Work from './Work'

const Form = () => {
  return (
    <div className='m-16 border-2 p-4 border-black rounded-lg w-2/5 '>
      <General />
      <Education />
      <Work />
    </div>
  )
}

export default Form
