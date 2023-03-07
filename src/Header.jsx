import React,{useState,useEffect, useContext} from 'react';
import {MdDarkMode} from "react-icons/md"
import {BsFillSunFill} from "react-icons/bs"
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import {Scroller} from "./Context"
import HelloWorld from "./img/HelloWorld.png"
const Header = () => {
  const [theme,setTheme] = useState("");
  const [menu,setMenu] = useState(false);
  const {hm,setHm,edu,setEdu,con,setCon,ab,setAb,serve,setServe} = useContext(Scroller);
  const changeTheme = (theme)=>{
    if(theme === 'light'){
        localStorage.theme="light";
        document.documentElement.classList.remove('dark');
        setTheme("light");
    }
    else{
        localStorage.theme="dark";
        document.documentElement.classList.add('dark');
        setTheme("dark");
    }
}
useEffect(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setTheme("light");
    } else {
      document.documentElement.classList.remove('dark')
      setTheme("dark");
    }
  },[]);
  const currentActive = (para)=>{
    if(para==="home"){
      setHm(true);setEdu(false);setCon(false);setAb(false);setServe(false);
    }
    else if(para==="service"){
      setHm(false);setEdu(false);setCon(false);setAb(false);setServe(true);
    }
    else if(para==="education"){
      setHm(false);setEdu(true);setCon(false);setAb(false);setServe(false);
    }
    else if(para==="about"){
      setHm(false);setEdu(false);setCon(false);setAb(true);setServe(false);
    }
    else if(para==="contact"){
      setHm(false);setEdu(false);setCon(true);setAb(false);setServe(false);
    }
  }
  return (
    <div className='z-[1000] h-[10vh] flex md:flex-row flex-col justify-center md:justify-between 
    md:items-center md:px-[10%] px-[2%] dark:bg-gray-900 bg-white'>
      <div className='flex justify-between items-center'>
        <img src={HelloWorld} alt="" className='w-[100px]'/>
        <button className='md:hidden block mx-8'>
          <span onClick={()=>setMenu(!menu)}>
            {
              !menu?<AiOutlineMenu size="25px"/>:<AiOutlineClose size="25px" />
            }
          </span>
        </button>
      </div>
      <ul className={'md:static absolute md:bg-none md:z-auto bg-white dark:bg-gray-900 md:pl-0 pl-12 left-0 md:flex md:gap-5 top-[-500px] transition-all ease-out duration-300 md:opacity-100 opacity-0 md:w-auto w-screen '+(menu?'top-[10vh] opacity-100':'')}>
        <li onClick={()=>currentActive("home")} className={'my-1 md:py-0 cursor-pointer dark:hover:text-gray-100 hover:text-gray-500 transition-all '+(hm?"text-red-600":"")}>Home</li>
        <li onClick={()=>currentActive("service")} className={'my-1 md:py-0 cursor-pointer dark:hover:text-gray-100 hover:text-gray-500 transition-all '+(serve?"text-red-600":"")}>Service</li>
        <li onClick={()=>currentActive("education")} className={'my-1 md:py-0 cursor-pointer dark:hover:text-gray-100 hover:text-gray-500 transition-all '+(edu?"text-red-600":"")}>Education</li>
        <li onClick={()=>currentActive("about")} className={'my-1 md:py-0 cursor-pointer dark:hover:text-gray-100 hover:text-gray-500 transition-all '+(ab?"text-red-600":"")}>About</li>
        <li onClick={()=>currentActive("contact")} className={'my-1 md:py-0 cursor-pointer dark:hover:text-gray-100 hover:text-gray-500 transition-all '+(con?"text-red-600":"")}>Contact</li>
        <button>
          {
              theme==="dark"?
              (<span onClick={()=>changeTheme("light")} className="cursor-pointer">
                  <BsFillSunFill size="25px"/>
              </span>):
              (<span onClick={()=>changeTheme("dark")} className="cursor-pointer">
                  <MdDarkMode size="25px"/>
              </span>)
          }
        </button>
      </ul>
    </div>
  );
}

export default Header;
