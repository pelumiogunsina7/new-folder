import React from "react";
import myPhoto from './images/shirt1.jpg';
import {FaHtml5, FaReact, FaCss3, FaPhp, FaBootstrap, FaJs, FaDatabase, FaNodeJs, FaArrowRight, FaGit, FaGithub,FaLaravel}  from "react-icons/fa"

export default function About() {
    return(
        <>
            <h2 id="About" className="text-center text-indigo-900 dark:text-indigo-300 text-7xl scroll-m-20">About Me</h2>
           <section  className="flex flex-col-reverse justify-center sm:flex-row items-center p-6 gap-8 mb-12 widescreen:section-min-height tallscreen:section-min-height">
                
                <article className="sm:w1/2">
               
                    <span className="max-w-md  font-bold text-center
                                sm:text-3xl text-slate-900 dark:text-white">
                                    Ogunsina Pelumi Raphael 
                                    
                                </span>
                                <p className="max-w-md text-xl mt-4 
                                sm:tetx-right text-slate-800 dark:text-slate-400">
                                  I'm Innovative, Creative and hardworking
                                  web developer with excellent problems solving 
                                  capabilities, I'm a fast leaner and a team player.
                                  im very Ambiguous to succeed in the software development field.
                                   my weakness is that i always going back to previous project
                                  to checkout what needs to be updated to make it a better version.
                                  I studied at University of Technology Ogbomosho Oyo State, Nigeria.
                                  I have B.Tech in computer Science
                                </p>         
                </article> 
                <img src={myPhoto} alt="myPhoto" className="w-1/6"/>
           </section>
           <h2 className="text-center text-indigo-900 dark:text-indigo-300 text-4xl">Skills</h2>
           
           <section className="flex flex-row flex-wrap max-w-full justify-around place-items-center md:flex-wrap widescreen:section-min-height tallscreen:section-min-height">
            
                      <FaHtml5 className="max-w-40 bg-teal-600 text-white max-h-20  w-20  h-20 m-2"/>
                      <FaCss3 className="max-w-20 bg-red-700 text-white  max-h-20  w-20  h-20 m-2"/>
                      <FaBootstrap className="max-w-20 bg-rose-700 text-white max-h-20  w-20  h-20 m-2"/>
                      <FaReact className="max-w-20 bg-black text-teal-300 max-h-20 w-20 h-20 m-2"/>
                      <FaPhp className="max-w-20 bg-amber-700 text-amber-200 max-h-20 w-20 h-20 m-2"/>
                      <FaJs className="max-w-20 bg-cyan-900 text-cyan-300 max-h-20 w-20 h-20 m-2"/> 
                      <FaDatabase className="max-w-20 bg-violet-900 text-violet-300 max-h-20 w-20 h-20 m-2"/>
                      <FaNodeJs className="max-w-20 bg-fuchsia-900 text-fuchsia-300 max-h-20 w-20 h-20 m-2"/>
                      <FaGit className="max-w-20 bg-fuchsia-900 text-fuchsia-300 max-h-20 w-20 h-20 m-2"/>
                      <FaGithub className="max-w-20 bg-fuchsia-900 text-fuchsia-300 max-h-20 w-20 h-20 m-2"/>
                      <FaLaravel  className="max-w-20 bg-fuchsia-900 text-fuchsia-300 max-h-20 w-20 h-20 m-2"/>
                       
           </section>
           <h2 className="text-center text-indigo-900 dark:text-indigo-300 text-4xl">My Development Process</h2>
           <section className="flex flex-row flex-wrap max-w-full justify-around place-items-center widescreen:section-min-height tallscreen:section-min-height">
                <div className="h-40 w-40 mt-4 bg-teal-800 text-white text-3xl text-center pt-12 rounded-full">CONCEPT</div>
                <FaArrowRight className="w-20 text-rose-900"/>
                <div className="h-40 w-40 mt-4 bg-teal-800 text-white text-3xl text-center pt-12 rounded-full">DESIGN</div>
                <FaArrowRight className="w-20 text-rose-900"/>
                <div className="h-40 w-40 mt-4 bg-teal-800 text-white text-3xl text-center pt-12 rounded-full">CODING</div>
                <FaArrowRight className="w-20 text-rose-900"/>
                <div className="h-40 w-40 mt-4 bg-teal-800 text-white text-3xl text-center pt-12 rounded-full">TESTING</div>
                <FaArrowRight className="w-20 text-rose-900"/>
                <div className="h-40 w-40 mt-4 bg-teal-800 text-white text-3xl text-center pt-12 rounded-full">LAUNCH</div>
           </section>
           
        </>
    )
}