import React from 'react'
import logo from '../assets/KevinRushLogo.png'
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTelegram} from 'react-icons/fa';


function Navbar() {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt='logo'/>
        </div>
        <div className='flex justify-center items-center gap-4 text-2xl m-8'>
            <FaGithub/>
            <FaLinkedin/>
            <FaInstagram/>
            <FaTelegram/>
        </div>
    </nav>
  )
}

export default Navbar