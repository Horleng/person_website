import React from 'react';
import {BsFacebook,BsMessenger,BsTelegram,BsWhatsapp,BsTwitter} from "react-icons/bs"
import {AiFillGithub,AiOutlineMail} from "react-icons/ai"
import {IoLocationSharp} from "react-icons/io5"
const Footer = () => {
    const Opent = (url)=>{
        window.open(url);
    }
    return (
        <div className='dark:bg-gray-900 bg-white py-10 px-10 rounded-md shadow-[0_0_5px] mt-10'>
            <div className='text-sm lg:indent-10 indent-5 text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni adipisci 
                consequuntur expedita blanditiis voluptates earum magnam incidunt? Earum consequuntur
                eius minima aliquam praesentium eaque similique omnis amet aut, eum, accusamus
                consequatur qui. Distinctio ea dignissimos laborum doloribus odit veritatis vero 
                pariatur rerum nisi tenetur doloremque corporis, voluptate sint tempore.
            </div>
            <div className='sm:flex grid grid-cols-4 gap-6 justify-center sm:gap-4 items-center mt-10'>
                <button onClick={()=>Opent("https://www.facebook.com/horlenggg")}>
                    <span><BsFacebook size="30px" fill='#425C81'/></span>
                </button>
                <button onClick={()=>Opent("https://m.me/Horlenggg")}>
                    <span><BsMessenger size="30px" fill='#425C81'/></span>
                </button>
                <button onClick={()=>Opent("https://t.me/Horlenggg")}>
                    <span><BsTelegram size="30px" fill='#425C81'/></span>
                </button>
                <button disabled className='cursor-not-allowed'>
                    <span><BsTwitter size="30px" fill='#425C81'/></span>
                </button>
                <button disabled className='cursor-not-allowed'>
                    <span><BsWhatsapp size="30px" fill='#425C81'/></span>
                </button>
                <button onClick={()=>Opent("mailto:ly.horleng.1221@rupp.edu.kh")}>
                    <span><AiOutlineMail size="30px" fill='#425C81'/></span>
                </button>
                <button  className='cursor-not-allowed'>
                    <span><AiFillGithub size="30px" fill='#425C81'/></span>
                </button>
                <button disabled className='cursor-not-allowed'>
                    <span><IoLocationSharp size="30px" fill='#425C81'/></span>
                </button>
            </div>
            <span className='flex gap-2 justify-center items-center mt-10'>
                <span className='md:text-lg text-sm'>©2023 Copyright : </span>
                <span className='md:text-lg text-sm text-orange-400 dark:text-blue-600 font-bold underline uppercase'> @Horlengg Ly</span>
            </span>
        </div>
    );
}

export default Footer;
