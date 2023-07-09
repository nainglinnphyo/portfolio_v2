'use client'
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
function Skill() {
     const [scrollValue, setScrollValue] = useState(0);

     useEffect(() => {
          const handleScroll = () => {
               const scrollPosition = window.scrollY;
               setScrollValue(scrollPosition);
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     const animationVariants = {
          hidden: {
               width: 0,
               opacity: 0.5,
          },
          visible: {
               opacity: 1,
               width: 350,
               transition: {
                    duration: 1,
                    ease: 'easeInOut',
               },
          },
     };

     return (
          <div className='flex-col px-4 md:px-8 md:pt-32 pt-20 items-center md:max-w-2xl lg:max-w-6xl mx-auto '>
               <div className='flex items-center justify-between'>
                    <div className='text-start flex items-center w-[70%] md:w-[40%] space-x-2'>
                         <h1><span className='text-green-500'>#</span>skills</h1>
                         <motion.div
                              initial="hidden"
                              animate={scrollValue >= 650 ? 'visible' : 'hidden'}
                              variants={animationVariants}
                              className='bg-green-500 w-48 md:w-full h-[0.2rem]'></motion.div>
                    </div>
               </div>
               <div className="flex py-10">
                    <div className='relative w-[40%] h-72 hidden md:block'>
                         <div className='w-20 h-20 border border-[#acb2bf] absolute right-20'>
                         </div>
                         <div className='w-14 h-14 border border-[#acb2bf] bottom-4 right-10 absolute'>
                         </div>
                         <Image src='/img/Dots.svg' width={70} height={70} alt='' className='absolute top-40 left-20' />
                         <Image src='/img/Dots.svg' width={60} height={60} alt='' className='absolute top-10 left-12' />
                         <Image src='/img/Dots.svg' width={60} height={60} alt='' className='absolute bottom-28 left-60' />
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 md:gap-2 gap-3'>
                         <div className='border border-[#acb2bf]'>
                              <div className='border-b-[#acb2bf] border-b'>
                                   <h1 className='p-2 text-white'>Languages</h1>
                              </div>
                              <div className='p-2'>
                                   Javascript Node <br />
                                   Typescript GO PHP
                              </div>
                         </div>
                         <div className='border border-[#acb2bf]'>
                              <div className='border-b-[#acb2bf] border-b'>
                                   <h1 className='p-2 text-white'>Databases</h1>
                              </div>
                              <div className='p-2'>
                                   Postgresql Mysql <br />
                                   MongoDB
                              </div>
                         </div>
                         <div className='border border-[#acb2bf]'>
                              <div className='border-b-[#acb2bf] border-b'>
                                   <h1 className='p-2 text-white'>Framewroks</h1>
                              </div>
                              <div className='p-2'>
                                   React Next <br />
                                   Nest Gin Express  <br />
                                   React Native <br />
                                   Tailwind Laravel
                              </div>
                         </div>
                         <div className='border border-[#acb2bf] md:col-end-3'>
                              <div className='border-b-[#acb2bf] border-b'>
                                   <h1 className='p-2 text-white'>Tools</h1>
                              </div>
                              <div className='p-2'>
                                   Vs Code Linux <br />
                                   Ubuntu Server <br />
                                   Nginx Apachae <br />
                                   Jest Docker 
                              </div>
                         </div>
                         <div className='border border-[#acb2bf] md:col-end-4'>
                              <div className='border-b-[#acb2bf] border-b'>
                                   <h1 className='p-2 text-white'>Other</h1>
                              </div>
                              <div className='p-2'>
                                   Graphql Restful <br />
                                   Microservice  <br />
                                   Sanity Firebase
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Skill