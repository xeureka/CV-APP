import React,{useState} from 'react'

const Work = () => {
    const [count,setCount] = useState(0);

    
  return (
    <div>
      <h1 className='my-6 font-bold text-3xl'>Work Experience #{count}</h1>

      <div className='flex flex-col gap-12'>
        <input type="text" placeholder='Job Title' className='p-4 rounded-lg'/>
        <input type="text" placeholder='Company Name' className='p-4 rounded-lg'/>
        <input type="text" placeholder='City' className='p-4 rounded-lg'/>
        <input type="text" placeholder='From' className='p-4 rounded-lg'/>
        <input type="text" placeholder='TO' className='p-4 rounded-lg'/>
        <input type="text" placeholder='Description' className='h-10 rounded-lg'/>

      </div>

      <div className='flex gap-12 justify-end mt-6'>
        <button className='text-xl px-8 py-4 font-mono text-white font-bold bg-slate-900 rounded-lg'>Add</button>
        <button className='text-xl px-8 py-4 font-mono text-white font-bold bg-slate-900 rounded-lg'>Delete</button>
      </div>

    </div>
  )
}

export default Work
