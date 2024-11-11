import React from 'react'
import {RiReactjsLine} from 'react-icons/ri';
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { FaSquareJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";









function Technologies() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <RiReactjsLine className='text-7xl text-cyan-400 '/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <TiHtml5 className='text-7xl  text-orange-700 '/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <IoLogoCss3 className='text-7xl text-sky-700 '/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <FaSquareJs className='text-7xl text-yellow-400 '/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <RiTailwindCssFill className='text-7xl text-cyan-600 '/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <SiVite className='text-7xl text-purple-700 '/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <FaGitSquare className='text-7xl text-red-600 '/>
            </div>
        </div>
    </div>
  )
}

export default Technologies