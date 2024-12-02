import React from 'react'

const Footer = () => {
    const currentDate = new Date().getFullYear();

  return (
    <div className='bg-slate-400 font-bold p-12 flex justify-center text-xl font-mono'>
      Made by Eureka @ {currentDate}
    </div>
  )
}

export default Footer
