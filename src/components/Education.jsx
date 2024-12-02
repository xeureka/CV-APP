import React,{useState} from 'react'

const Education = () => {
    const [count,setCount] = useState(0);

    function addCount(){
        setCount(count + 1)
    }
    
  return (
    <div>
      <h1 className='my-6 font-bold text-3xl'>Education #{count}</h1>

      <div className='flex flex-col gap-12'>
        <input type="text" placeholder='Degree' className='p-4 rounded-lg'/>
        <input type="text" placeholder='Univeristy or School Name' className='p-4 rounded-lg'/>
        <input type="text" placeholder='Course' className='p-4 rounded-lg'/>
        <input type="text" placeholder='To' className='p-4 rounded-lg'/>
      </div>

      <div className='flex gap-12 justify-end mt-6'>
        <button className='text-xl px-8 py-4 font-mono text-white font-bold bg-slate-900 rounded-lg'>Add</button>
        <button className='text-xl px-8 py-4 font-mono text-white font-bold bg-slate-900 rounded-lg'>Delete</button>
      </div>

    </div>
  )
}

export default Education
