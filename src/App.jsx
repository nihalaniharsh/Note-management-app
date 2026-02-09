import React, { useState } from 'react'



const App = (e) => {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')


    const [task, setTask] = useState([])


    const submitHandler =(e) =>{
        e.preventDefault()
       
        const copyTask = [...task]
        copyTask.push({title,details})
        setTask(copyTask)

        
      

        setTitle('')
        setDetails('')

    }

    const deleteNote =(idx) =>{
        const copyTask = [...task];
        copyTask.splice(idx,1)


        setTask(copyTask)
        
    }

    

     
  return (
    <div className='h-screen lg:flex bg-black text-white '>
      
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start    '>
              <h1 className='text-4xl font-bold'>Add Notes</h1>
         
             <input
             type="text"
             placeholder='Enter Notes heading'
             className='px-5 w-full py-2 font-medium border-2 outline-none rounded'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
             />
            <textarea
            type='text'
            className='px-5 font-medium w-full  h-32 flex items-start py-2 border-2 outline-none rounded'
            placeholder='Write Details here'
            value={details}
            onChange={(e)=>{
                setDetails(e.target.value)
            }}
            />  

            <button className='bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded '>Add Notes</button>
          
       
        </form>
        <div className=' lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5  h-[90%] mt-6 overflow-auto'>
        {task.map(function(elem, idx){
            return  <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black pt-9  px-6 pb-4 py-6 bg-cover bg-[url(https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png)]'>
        <div>
             <h3 className='leading-tight text-lg font-bold '>{elem.title}</h3>
               <p className='mt-4 leading-tight font-semibold text-sm text-gray-600'>{elem.details}</p>
       </div>
       <button onClick={()=>{
        deleteNote(idx)
       }} className='w-full cursor-pointer active:scale-95 bg-red-500 text-white font-bold rounded py-2 text-xs '>Delete</button>
              
            </div>
        })}
            
                
             </div>
             
        </div>
        
    </div>
  )
}

export default App