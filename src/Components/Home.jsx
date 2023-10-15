import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {Link} from "react-router-dom"


export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() =>{
    Aos.init({duration:2000})
  },[])

  return (
    <>
      <div
        className='bg-repeat w-screen h-screen'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVycGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60)',
        }}
      >
        <div className='flex pt-[100px]'>
          <div className='flex pt-[250px] pl-[100px] text-white font-mono flex-col gap-3 z-20 'data-oas="fade-down" >
            <TypeAnimation
              data-oas="fade-up"
              sequence={[
                'Hi! I am Martin ',
                1000,
                'I am a web developer',
                1000,
              ]}
              wrapper='span'
              speed={30}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Accusamus iste fugit aspernatur cupiditate
                <br />
                nam vel saepe esse blanditiis,
                <br />
                sint magnam libero, veritatis vitae, excepturi
                <br />
                explicabo placeat dolorum molestiae voluptatum! Mollitia!
              </p>
              <Link className='mt-[30px] border-[1px] px-3 rounded-2xl text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-500' to={'https://github.com/MartinSapundzhiev'}>Github</Link>
            </div>
          </div>

          {windowWidth >= 1000 ? (
            <div className='absolute right-[40px] top-[130px] animate-bounce z-10' data-aos="fade-left">
              <img src="gg.png" alt="Image Description" />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
