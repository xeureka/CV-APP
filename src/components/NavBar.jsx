import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const NavBar = () => {
  return (
    <div className='flex justify-center bg-slate-800 text-white font-bold font-mono text-5xl p-4'>
      <Typewriter 
        words={['CV BUILDER']}
        loop={5}
        cursor
        cursorStyle='|'
        typeSpeed={100}
        deleteSpeed={80}
        delaySpeed={100}
        
      />

    </div>
  )
}

export default NavBar
