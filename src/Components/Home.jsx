import React, { useState } from 'react'
import userphoto from '../assets/image/userphoto.jpg'

function Home() {

        const [message,setMessage] = useState('')
        
        const handleSubmit = ()=>{
            
          
        }

    return (
        <>
            <div className='bg-gradient-to-t from-cyan-500 to-blue-500 w-full h-screen flex justify-center items-center px-8'>
                <div className='w-[500px] h-[700px] bg-gray-200 rounded-lg flex flex-col justify-between overflow-hidden'>
                    <div className=''>
                        <div className='flex flex-row items-center gap-10 p-8'>
                            <div className='flex flex-col items-center'>
                                <div className='w-20 h-20 rounded-full overflow-hidden'>
                                    <img src={userphoto} alt="" className='w-full' />
                                </div>
                                <p className='text-sm text-gray-500'>Amanda</p>

                            </div>
                            <div className='w-3/5 bg-blue-400 px-5 rounded-lg'>
                                <p>Hello, How Are You?</p>
                            </div>
                        </div>

                        <div className='flex flex-row items-center gap-10 p-8'>
                            <div className='flex flex-col items-center'>
                                <div className='w-20 h-20 rounded-full overflow-hidden'>
                                    <img src={userphoto} alt="" className='w-full' />
                                </div>
                                <p className='text-sm text-gray-500'>Amanda</p>
                            </div>
                            <div className='w-3/5 bg-blue-400 px-5 rounded-lg'>
                                <p>Hi, I am good, how about you?</p>
                            </div>
                        </div>

                      
                    </div>

                    <div className='w-full h-14 bg-gray-300 items-end mt-72 border-2'>
                        <div className='w-full h-full flex flex-row items-center gap-2'>
                            <input onChange={(e)=>setMessage(e.target.value)} type="text" className='w-full border-0 h-10 ps-2' placeholder='Ping your message' />
                           <button onClick={handleSubmit} className='p-2 bg-blue-700 text-white rounded-xl hover:bg-blue-500'>Ping</button>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Home