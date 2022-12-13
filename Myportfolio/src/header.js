import React from "react";

import myPhoto from './images/shirt1.jpg';


function Header(){
const initApp = () =>{
  const hambugerBtn = document.getElementById('hambuger')
  const mobile      = document.getElementById('mobile-menu')

  const toggleMeu = () =>{
    if(!mobile.classList.toggle('hidden')){
      mobile.classList.toggle('flex')
    }else{
      mobile.classList.toggle('hidden')
    }
    
  }
  hambugerBtn.addEventListener('click', toggleMeu)
  mobile.addEventListener('click', toggleMeu)
}
const dis = () =>{
  const mobile      = document.getElementById('mobile-menu')
 return mobile.classList.toggle('hidden')
}
 
    return(
      <div className=" scroll-smooth">
        <header className='text-3xl fixed top-0 z-1  bg-slate-700 text-white flex flex-row 
                          place-content-center w-full' >
            <h1 className="mr-auto"><a href="#portfolio">PortFolio</a></h1>
          <section className='flex flex-row text-xl'>
            <nav className='hidden md:block  space-x-8 list-type-none  flex-row cursor-pointer justify-self-center'>
                <a href="#portfolio" className='mx-3 hover:opacity-90'>Home</a >
                <a href="#About" className='mx-3 hover:opacity-90'>About</a>
                <a href="#project" className='mx-3 hover:opacity-90'>Projects</a>
                <a href="#contact" className='mx-3 hover:opacity-90'>contact Us</a>
            </nav>
            <button id="hambuger" onClick={initApp} className=' md:hidden right-0 cursor-pointer text-4xl  '>&#9776;</button>
          </section>
          <section id="mobile-menu" className="absolute top-0 bg-slate-700 w-full text-5xl 
                       flex-col justify-content-center origin-top animate-open-menu  duration-700 hidden " >
                    <button className="text-8xl self-end right-0 px-6 fixed" onClick={dis}>
                      &times;
                    </button>
                    <nav className="flex flex-col min-h-screen items-center py-8 " arial-label="mobile">
                      <a href="#portfolio" className=" w-full text-center py-6 hover:opacity-30" onClick={dis}>Home</a>
                      <a href="#About" className=" w-full text-center py-6 hover:opacity-30"onClick={dis}>About</a>
                      <a href="#project" className=" w-full text-center py-6 hover:opacity-30" onClick={dis}>Projects</a>
                      <a href="#contact" className=" w-full text-center py-6 hover:opacity-30" onClick={dis}>Contact Us</a>
                    </nav>
          </section>
        </header>
        <main className="max-4xl mx-auto">
            
           <section id="portfolio" className="flex flex-col-reverse justify-center sm:flex-row items-center p-6 gap-8 mb-12 scroll-m-40 widescreen:section-min-height tallscreen:section-min-height">
                <article className="sm:w1/2">
               
                    <h2 className="max-w-md text-4xl font-bold text-center
                                sm:text-5xl text-slate-900 dark:text-white">
                                    Ogunsina Pelumi Raphael 
                                    <span className="text-indigo-800 dark:text-indigo-300">
                                        I'm a fullstack Web Developer
                                    </span>
                                </h2>
                                <p className="max-w-md text-2xl mt-4 text-center 
                                sm:tetx-left text-slate-800 dark:text-slate-400">
                                     
                                    Building the best Software for Companies and individual with latest & emerging
                                    Technologies 
                                </p>         
                </article> 
                <img src={myPhoto} alt="myPhoto" className="w-1/2"/>
           </section>
           <hr className="mx-auto w-1/2 bg-indigo-900 border-solid" />
           
           <section>

           </section>
        </main>
        
      </div>
    )
  }
  
  export default Header;