import React,{useState} from 'react'
import NavBar from './components/NavBar'
import Display from './components/Display'
import Footer from './components/Footer'
import General from './components/General'
import Education from './components/Education'
import Work from './components/Work'

const App = () => {

  const [userInfo,setUserInfo] = useState('');
  return (
    <div className='h-screen'>

      <NavBar />

      <div className='flex flex-row gap-4'>
        <div className='m-16 border-2 p-4 border-black rounded-lg w-2/5 '>
          <General setUserInfo={setUserInfo}/>
          <Education setUserInfo={setUserInfo}/>
          <Work setUserInfo={setUserInfo}/>
        </div>

        <Display userInfo ={userInfo}/>
      </div>


      <Footer />
     
    </div>
  )
}

export default App
