import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function () {

   useEffect(() =>{
     Aos.init({duration:2000})
   },[])


  return (
    <div className='w-screen h-[500px] bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-500'>
      <div className='flex justify-center ' data-aos="fade-down">
          <div className='w-[800px] h-[400px] bg-gray-900 rounded-xl mt-[-40px]'>
                <div className='flex text-white justify-center'>
                        <h1 className='pt-[20px] text-2xl font-mono'>Skills</h1>
                </div>
                <div className='flex justify-center gap-[40px] pt-[30px]'>
                    <div className='flex flex-col gap-[20px]'>
                      <img src="meter1.svg" alt="" />
                      <h1 className='text-white text-2xl font-mono'>JSX</h1>
                    </div>
                    <div className='flex flex-col gap-[20px]'>
                     <img src="meter1.svg" alt="" />
                      <h1 className='text-white text-2xl font-mono'>TAILWIND.CSS</h1>
                    </div>
                    <div className='flex flex-col gap-[20px] '>
                      <img src="meter1.svg" alt="" />
                      <h1 className='text-white text-2xl font-mono'>JAVA</h1>
                    </div>
                </div>
          </div>
      </div>
    </div>
  )
}
