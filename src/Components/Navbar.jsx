import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaBars } from "react-icons/fa";
import {Link} from "react-router-dom"


export default function Navbar() {
  const [navVisible, setNavVisible] = useState(true);
  const [click, setClick] = useState(false);
  const [NavC, setNavC] = useState(false);

  const clicked = () => {
    setClick(!click);
    console.log("Clicked");
  }

  const checkWindowWidth = () => {
    if (window.innerWidth < 900) {
      setNavVisible(false);
    } else {
      setNavVisible(true);
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavC(true);
    } else {
      setNavC(false);
    }
  }

  useEffect(() => {
    checkWindowWidth();
    window.addEventListener('resize', checkWindowWidth);
    
    // Set initial state of NavC based on scroll position
    changeBackground();

    // Add scroll event listener
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener('resize', checkWindowWidth);
      // Remove the scroll event listener on component unmount
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  

  return (
    <>
      <div className={ !NavC ? "w-screen h-[80px] bg-transparent  fixed" : "w-screen h-[80px] bg-black fixed z-30"}>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-[50px] text-white font-mono ml-[20px]'>LOGO</h1>
          </div>
          {window.innerWidth < 900 ? (
            <FaBars className="text-white text-2xl cursor-pointer mt-[20px] mr-[50px] font-mono hover:-translate-y-1 hover:scale-110 hover:text-pink-700 duration-500 " onClick={clicked} />
          ) : (
            <div className='text-white flex mr-[10px]'>
              <ul className='flex items-center gap-5'>
                <li className='font-mono hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-500'>Home</li>
                <li className='font-mono hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-500'>Skills</li>
                <li className='font-mono hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-500'>Projects</li>
                <Link to={'https://www.linkedin.com/in/martin-sapundjiev-898136294/'}><FaLinkedinIn className='hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-500' /></Link>
                <Link to={'https://www.facebook.com/mariqn.petrov.779/'}><FaFacebookF className='hover:-translate-y-1 hover:scale-110 hover:text-blue-500 duration-500' /></Link>
                <Link to={'https://www.instagram.com/martisapundjiev/'}> <FaInstagram className='hover:-translate-y-1 hover:scale-110 hover:text-pink-500 duration-500' /></Link>
                <button className='font-mono hover:underline duration-500 hover:text-pink-500'>Let's Connect</button>
              </ul>
            </div>
          )}
   
            

        </div>
      </div>

           {click ?( 
            <div className='w-screen h-screen bg-indigo-400 z-50'>
                    <div className='flex justify-center pt-[200px]'></div>
                      <div className='flex justify-center'>
                          <ul className='flex flex-col'>
                            <li className='text-[80px] font-bold font-mono hover:-translate-y-1 hover:scale-110 hover:text-pink-700 duration-500'>Home</li>
                            <li className='text-[80px] font-bold font-mono hover:-translate-y-1 hover:scale-110 hover:text-pink-700 duration-500'>Skills</li>
                            <li className='text-[80px] font-bold font-mono hover:-translate-y-1 hover:scale-110 hover:text-pink-700 duration-500'>Projects</li>
                          </ul>
                      </div>
            </div>
           ):( 
            <div className=''></div>
           )}
    </>
  )
}