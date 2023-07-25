import React, { useEffect, useState } from 'react'
import userphoto from '../assets/image/userphoto.jpg'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
function Home() {

    const [message, setMessage] = useState('')
    const [chatMessage, setChatMessages] = useState([])


    // ===============================================

    // backend api url
    const URL = 'http://127.0.0.1:1010/api/user/chat'
    const URL2 = 'http://127.0.0.1:1010/api/user/chatlist'

    // header configuration
    const headers = {
        'Content-Type': 'application/json'
    }

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        const payload = {
            token: token
        }
        console.log(payload)
        axios.post(URL2, payload, { headers }).then((response) => {

            setChatMessages(response.data)
         
          
        })
            .catch((error) => {
                console.log(error)
            })



    }, []);

    const handleSubmit = () => {

        console.log(chatMessage)

        const token = localStorage.getItem('authToken')

        const payload = {
            message: message,
            token: token
        }
        console.log(payload)

        axios.post(URL, payload, { headers }).then((response) => {

            if (response.data.Code === 0) {

                toast.error(`${response.data.message}`, {
                    position: 'top-right',
                });

            } else if (response.data.Code === 1) {
                console.log(response)

                setChatMessages(response.data)
                console.log(chatMessage)

                toast.success(`Message Sent`, {
                    position: 'top-right',
                });



            }


        })
            .catch((error) => {
                console.log(error)
            })




    }

    return (
        <>
          <div className='bg-gradient-to-t from-cyan-500 to-blue-500 w-full h-screen flex justify-center items-center px-8'>
            <div className='w-[500px] h-[700px] bg-gray-200 rounded-lg flex flex-col justify-between overflow-scroll'>
              <div>
                {chatMessage.data.map((message) => (
                  <div key={message._id} className='flex flex-row items-center gap-10 p-8'>
                    <div className='flex flex-col items-center'>
                      <div className='w-20 h-20 rounded-full overflow-hidden'>
                        <img src={userphoto} alt="" className='w-full' />
                      </div>
                      <p className='text-sm text-gray-500'>{message.fullName}</p>
                    </div>
                    <div className='w-3/5 bg-blue-400 px-5 rounded-lg'>
                      <p>{message.message}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='w-full h-14 bg-gray-300 items-end mt-72 border-2'>
                <div className='w-full h-full flex flex-row items-center gap-2'>
                  <input onChange={(e) => setMessage(e.target.value)} type="text" className='w-full border-0 h-10 ps-2' placeholder='Ping your message' />
                  <button onClick={handleSubmit} className='p-2 bg-blue-700 text-white rounded-xl hover:bg-blue-500'>Ping</button>
                  <ToastContainer position="top-right" />
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default Home