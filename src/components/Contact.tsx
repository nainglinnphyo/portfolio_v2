'use client'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {

     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [message, setMessage] = useState('')

     const submit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          emailjs.send('service_98k553b', 'template_aj3m5of', { from_name: name, from_email: email, message: message }, 'JbaGMvyx_V1H0YdE0')
               .then((response) => {
                    setName('')
                    setEmail('')
                    setMessage('')
                    console.log('SUCCESS!', response.status, response.text);
               }, (err) => {
                    setName('')
                    setEmail('')
                    setMessage('')
                    console.log('FAILED...', err);
               });
     }

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
               <div className='md:flex py-4 max-sm:flex-col justify-between items-center space-y-6 gap-10'>
                    <div className='md:w-[65%] '>
                         <h1 className='md:text-base text-sm text-start'>Thank you for your interest in reaching out to me. I would love to hear from you! Please feel free to get in touch using the contact information provided below.</h1>
                         <br />
                         <p className='md:text-base text-sm'>
                              Whether you have a question want to connect, I'm always open to new opportunities and collaborations. Please don't hesitate to reach out, and I'll get back to you as soon as possible. <br />
                              <br />
                              Thank you & see you again,
                         </p>
                    </div>
                    <div className='md:w-[35%] h-max border border-[#acb2bf] px-4 space-y-2 py-5'>
                         <h1>Message me here</h1>
                         <form onSubmit={submit} className='w-full gap-y-2 flex flex-col'>
                              <div className='w-full py-1 '>
                                   <h1 className='md:text-base text-sm'>Your Name</h1>
                                   <input required type="text" value={name} onChange={(e) => setName(e.target.value)} name="" className='w-full p-2 h-8 focus:outline-none bg-[#edf1f4] md:text-sm text-sm text-black' id="" placeholder='Enter your name.' />
                              </div>
                              <div className='w-full py-1'>
                                   <h1 className='md:text-base text-sm'>Your email</h1>
                                   <input required type="text" value={email} name="" onChange={(e) => setEmail(e.target.value)} className='w-full p-2 h-8 focus:outline-none bg-[#edf1f4] md:text-sm text-sm text-black' id="" placeholder='Enter your email.' />
                              </div>
                              <div className='w-full py-1'>
                                   <h1 className='md:text-base text-sm'>Message</h1>
                                   <textarea required name="" value={message} onChange={(e) => setMessage(e.target.value)} className='w-full p-2 h-28 focus:outline-none bg-[#edf1f4] md:text-sm text-sm text-black' id="" placeholder='Type a message...' />
                              </div>
                              <motion.div className='w-max border border-green-500 flex px-2  py-2 items-center hover:shadow-md'
                                   whileHover={{
                                        x: 0,
                                        boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.3)",
                                   }}
                              >
                                   <button className='md:text-sm text-sm'>Just Send</button>
                                   <Icon icon='iconoir:arrow-tr' />
                              </motion.div>
                         </form>
                    </div>
               </div>

          </div>
     )
}

export default Contact