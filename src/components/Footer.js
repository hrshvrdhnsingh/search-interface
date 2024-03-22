import React from 'react'
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import NavigatorButton from './NavigatorButton';

const Footer = () => {
  return (
    <div className='flex fixed footer-div flex-col gap-1 justify-center items-center h-20 mb-0 w-full bg-lime-800 right-0 left-0 bottom-0'>
      <div className='footer1 w-full h-6/12 flex justify-center items-center gap-12 text-3xl p-1'>
        <div className='links hover:bg-sky-400 hover:text-white'><Link to='' target="_blank"><FaTwitter /></Link></div>
        <div className='links hover:bg-purple-900 hover:text-white'><Link to='https://github.com/hrshvrdhnsingh' target="_blank"><FaGithub /></Link></div>
        <div className='links hover:bg-blue-600 hover:text-white p-1'><Link to='' target="_blank"><FaLinkedinIn /></Link></div>
      </div>
      <div className='footer2 w-full h-6/12 flex justify-center items-center text-gray-300'>
        <p>©️2024  All rights reserved by HVS.</p>
      </div>
      <div className='navigator-div text-gray-900 flex flex-col justify-center align-center font-bold'>
        <p className='dissapear'>Use the Gemini v1.5 pro</p>
        <Link to='/'><NavigatorButton /></Link>
      </div>
    </div>
  )
}

export default Footer
