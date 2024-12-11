import React from 'react'
import NavBar from './components/NavBar'
import Form from './components/Form'
import Display from './components/Display'
import Footer from './components/Footer'
import General from './components/General'
import Education from './components/Education'
import Work from './components/Work'

const App = () => {
  return (
    <div className='h-screen'>

      <NavBar />

      <div className='flex flex-row gap-4'>
        <div className='m-16 border-2 p-4 border-black rounded-lg w-2/5 '>
          <General />
          <Education />
          <Work />
        </div>

        <Display />
      </div>


      <Footer />
     
    </div>
  )
}

export default App
