import React from 'react'
import{FaLinkedin} from'react-icons/fa'
import kevinlogo from '../assets/kevinRushLogo.png';
import { IoLogoGithub } from "react-icons/io";
import { FaTwitch } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='flex py-6 mb-20 items-center justify-between'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='w-10 mx-2' src={kevinlogo} alt="" />

        </div>
        <div className='flex justify-center items-center m-8 gap-4 text-3xl'>
            <FaLinkedin/>
            <IoLogoGithub />
            <FaTwitch />
            <FaInstagram />


        </div>
      
    </nav>
  )
}

export default Navbar
