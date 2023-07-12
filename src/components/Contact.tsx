'use client'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

function Contact() {
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
          <div className='flex-col py-10 px-4 md:px-8 pt-10 md:pt-20 items-center md:max-w-2xl lg:max-w-6xl mx-auto '>
               <div className='flex items-center justify-between'>
                    <div className='text-start flex items-center w-[70%] md:w-[40%] space-x-2'>
                         <h1><span className='text-green-500'>#</span>contacts</h1>
                         <motion.div
                              initial="hidden"
                              animate={scrollValue >= 650 ? 'visible' : 'hidden'}
                              variants={animationVariants}
                              className='bg-green-500 w-48 md:w-full h-[0.2rem]'></motion.div>
                    </div>
               </div>
               <div className='md:flex py-4 max-sm:flex-col justify-between items-center space-y-6'>
                    <h1 className='md:text-base text-sm md:w-1/2 text-start'>Thank you for your interest in reaching out to me. I would love to hear from you! Please feel free to get in touch using the contact information provided below.</h1>
                    <div className='w-max h-max border border-[#acb2bf] p-4'>
                         <h1>Message me here</h1>
                         <form action="">
                              <div>
                                   <h1 className='md:text-base'>Your Name</h1>
                                   <input type="text" name="" className='p-2' id="" placeholder='Enter your name.' />
                              </div>
                         </form>
                    </div>
               </div>
               <p className='md:text-base text-sm'>
                    Whether you have a question want to connect, I'm always open to new opportunities and collaborations. Please don't hesitate to reach out, and I'll get back to you as soon as possible. <br />
                    <br />
                    Thank you & see you again,
               </p>

          </div>
     )
}

export default Contact