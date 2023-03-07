import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Home from './Home.';
import Service from './Service';
import Educations from './Educations';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import { Scroller } from './Context';
const App = () => {
  const [hm,setHm] = useState(true);
  const [edu,setEdu] = useState(false);
  const [con,setCon] = useState(false);
  const [ab,setAb] = useState(false);
  const [serve,setServe] = useState(false);
  const HomeScroll = useRef();
  const ABoutScroll = useRef();
  const ContactScroll = useRef();
  const EducationScroll = useRef();
  const ServiceScroll = useRef();
  useEffect(()=>{
    if(hm)
      HomeScroll.current.scrollIntoView({behavior:"smooth"});
    else if(con)
      ContactScroll.current.scrollIntoView({behavior:"smooth"});
    else if(ab)
      ABoutScroll.current.scrollIntoView({behavior:"smooth"});
    else if(edu)
      EducationScroll.current.scrollIntoView({behavior:"smooth"});
    else if(serve)
      ServiceScroll.current.scrollIntoView({behavior:"smooth"});
  },[hm,con,serve,edu,ab]);
  return (
    <>
      <Scroller.Provider value={{hm,setHm,edu,setEdu,con,setCon,ab,setAb,serve,setServe}}>
        <div className='h-[100vh] fixed'>
          <Header />
          <div className='z-0 md:w-[80%] w-[90%] mx-auto h-screen md:p-5 p-2 md:pb-52 pb-36 scrollbar-thin dark:scrollbar-thumb-gray-700 scrollbar-thumb-gray-300 scrollbar-track-gray-500 dark:scrollbar-track-gray-600 overflow-y-scroll'>
              <span ref={HomeScroll}/>
              <Home />
              <span ref={ServiceScroll}/>
              <Service />
              <span ref={EducationScroll}/>
              <Educations />
              <span ref={ABoutScroll}/>
              <About />
              <span ref={ContactScroll}/>
              <Contact />
              <Footer />
            </div>
        </div>
      </Scroller.Provider>
    </>
  );
}

export default App;
