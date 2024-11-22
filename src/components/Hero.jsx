import React from 'react'
import {HERO_CONTENT} from '../constants'
import profilepic from '../assets/KevinRushProfile.png'
import { CiSaveDown2 } from "react-icons/ci";
function Hero() {
  return (
    <div className='border-b  border-neutral-900 pb-4 lg:mb-35'>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                    Mahdi Samanbari
                </h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                    FrontEnd Developer
                </span>
                <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
                <div className="mb-4 ">
                  <a 
                  href="/Mahdi-Samanbari.pdf"
                  target='_blank'
                  rel='noopener noreferrer'
                  download 
                  className="flex items-center  border-4 border-neutral-800 mr-2 mt-4 rounded-2xl bg-neutral-900  py-1 text-xl font-sans text-purple-800 px-3 p-2 ">
                    <span>Resume.pdf</span>
                    <CiSaveDown2 className='ml-2' size={25}/>
                  
                    
                  </a>
                </div>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <img src={profilepic}  alt="profilepic"  />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero