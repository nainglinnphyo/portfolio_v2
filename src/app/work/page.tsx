'use client'
import React from 'react'
import styles from '@/styles/about.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image'
import { allProjects, projectOne } from '@/utils';
import Link from 'next/link';

function WorkPage() {
     return (
          <motion.div className='flex flex-col gap-y-3 px-4 md:px-8 md:pt-10 pt-5 md:max-w-2xl lg:max-w-6xl mx-auto '
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
          >
               <div className='w-full'>
                    <h1 className='md:text-xl text-lg'><span className='font-extrabold text-green-500'>#</span>work</h1>
                    <span className='md:text-sm'>List of project and current work!</span>
               </div>

               <div className="grid md:grid-cols-3 md:gap-2 2xl:gap-5 gap-4 mt-10 grid-cols-1 items-start">
                    {
                         allProjects.map((p) => {
                              return (
                                   <div className='border-[1.5px] border-[#acb2bf]' key={p.title}>
                                        {/* <div className='w-full h-44 relative'>
                                             <Image src={p.image} alt={''} fill className='object-cover w-full h-full border-b-[1.5px] border-[#acb2bf]' />
                                        </div> */}
                                        <h1 className='p-2 border-b-[1.5px] border-[#acb2bf]'>{p.techStack}</h1>
                                        <div className='p-2 flex flex-col justify-center h-auto space-y-4'>
                                             <h1 className=''>{p.title}</h1>
                                             <p className='text-sm'>{p.desc}</p>
                                             <div className='border-green-500  border-[1.5px] w-20'>
                                                  <h1 className='text-sm p-2'><Link href={p.link}>Code{'<~>'}</Link></h1>
                                             </div>
                                        </div>
                                   </div>
                              )
                         })
                    }
               </div>

               <div className='w-full gap-y-2 flex flex-col mt-8 py-2'>
                    <h1 className='md:text-xl text-lg'><span className='font-extrabold text-green-500'>#</span>current work</h1>

                    <div className='md:w-[70%] md:flex w-full'>
                         <div className='flex gap-3 mt-2 flex-wrap md:text-base text-sm'>
                              <span className='text-sm leading-6'>I'm currently working on <span className='text-green-500'><Link href='https://xsphere.co'>Xsphere Co.,Ltd</Link></span>.
                                   I am actively involved in the development of <span className='text-green-500'><Link href='https://farytaxi.com'>farytaxi.com</Link></span> and <span className='text-green-500'><Link href='https://getbak.co'>getbak.co</Link></span>, microservices technologies like gRPC and Redis to build efficient and scalable solutions.
                                   In Farytaxi implement real-time communication features using WebSocket and Socket.IO to enable bidirectional communication between the server and clients.Design and implementation of low-latency, high-availability, and performant applications. Implement and optimize RESTful APIs using Express.js or Nest.js to facilitate data exchange between the server and client applications.
                              </span>
                         </div>
                         <div className='hidden md:block w-[30%] relative '>
                              <Image src='/img/Dots.svg' alt={''} width={80} height={80} className='w-full h-full absolute left-28' />
                              <Image src='/img/Dots.svg' alt={''} width={40} height={40} className='w-full h-full absolute left-56 -top-16' />
                         </div>
                    </div>
               </div>
          </motion.div>
     )
}

export default WorkPage