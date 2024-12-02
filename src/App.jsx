import React from 'react'
import NavBar from './components/NavBar'
import Form from './components/Form'
import Display from './components/Display'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='h-screen'>

      <NavBar />

      <div className='flex flex-row gap-4'>
        <Form />

        <Display />
      </div>


      <Footer />
     
    </div>
  )
}

export default App
