'use client'
import React, { useState } from 'react'
import styles from '@/styles/about.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image'
import emailjs from '@emailjs/browser';
import { Icon } from '@iconify/react';

function AboutPage() {
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
               }, (err) => {
                    setName('')
                    setEmail('')
                    setMessage('')
               });
     }

     return (
          <motion.div className='flex flex-col gap-y-3 px-4 md:px-8 md:pt-10 pt-5 md:max-w-2xl lg:max-w-6xl mx-auto '
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
          >
               <div className='w-full px-2 '>
                    <h1 className='md:text-xl text-lg'><span className='font-extrabold text-green-500'>/</span>about-me</h1>
                    <span className='md:text-sm'>Who am i?</span>
               </div>
               <div className='max-w-[100%] md:text-[0.9rem] md:leading-5 font-jetbrain text-xs w-full'>
                    <div className='flex space-x-3 hover:bg-[#362c3d] px-2 py-1 w-full'>
                         <div className='text-[#8b59a7]'>@Injectable()</div>
                    </div>
                    <div className='flex space-x-3 hover:bg-[#362c3d] px-2 py-1 w-full'
                    >
                         <div className='text-[#8b59a7]'>export class</div>
                         <span className='text-[#DDBA78]'>WhoAmI </span><span>{` {`}</span>
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'

                    >
                         <div className='text-[#645B69]'>··</div>
                         <span className='text-[#645B69]'>{'//'} Hello, Enjoy Everyone</span>
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'

                    >
                         <div className='text-[#645B69]'>··</div>
                         <span className='text-[#645B69]'>{'//'} Huu yay ya dr ma lwal bu</span>
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'

                    >
                         <div className='text-[#645B69]'>··</div>
                         <div className='text-[#8b59a7]'>constructor <span className='text-[#ACB2BF]'>(){` {`}</span></div>
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'

                    >
                         <div className='text-[#645B69]'>····</div>
                         <div className=''><span className='text-[#DDBA78]'>this</span>.<span className='text-[#E06C75]'>name</span> = <span className='text-green-500'>'Naing Linn Phyo'</span></div>
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'
                    >
                         <div className='text-[#645B69]'>····</div>
                         <div className=''><span className='text-[#DDBA78]'>this</span>.<span className='text-[#E06C75]'>dateOfBirth</span> = <span className='text-green-500'>'2001-08-18'</span></div>
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'
                    >
                         <div className='text-[#645B69]'>····</div>
                         <div className=''><span className='text-[#DDBA78]'>this</span>.<span className='text-[#E06C75]'>email</span> = <span className='text-green-500'>'nainglinnphyo24@gmail.com'</span></div>
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'
                    >
                         <div className='text-[#645B69]'>····</div>
                         <div className=''><span className='text-[#DDBA78]'>this</span>.<span className='text-[#E06C75]'>currentWork</span> = <span className='text-green-500'>'Backend Developer'</span></div>
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'
                    >
                         <div className='text-[#645B69]'>··</div>
                         <span>{'}'}</span>
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'

                    >
                         <div className='text-[#645B69]'>··</div>
                         <div className=''><span className='text-[#DDBA78]'>workingExperience</span>() {'{'}</div>
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'
                    >
                         <div className='text-[#645B69]'>····</div>
                         <div className=''><span className='text-[#8b59a7]'>return</span> {'['}</div>
                    </div>
                    <div className='hover:bg-[#362c3d] px-2 py-1'>
                         <span className='text-[#645B69]'>······</span>
                         {'{ '}
                         <span className='text-green-500'>'2022-now'</span>
                         {' : '}
                         <span className='text-green-500'>
                              'Senior Backend Developer at Xsphere Co.,Ltd'
                         </span>
                         {' }'}
                    </div>
                    <div className='hover:bg-[#362c3d] px-2 py-1'>
                         <span className='text-[#645B69]'>······</span>
                         {'{ '}
                         <span className='text-green-500'>'2021-2022'</span>
                         {' : '}
                         <span className='text-green-500'>
                              'Junior Web Developer at Zone-95 Co.,Ltd'
                         </span>
                         {' }'}
                    </div>
                    <div className='hover:bg-[#362c3d] px-2 py-1'>
                         <span className='text-[#645B69]'>······</span>
                         {'{ '}
                         <span className='text-green-500'>'2018-2022'</span>
                         {' : '}
                         <span className='text-green-500'>
                              'Data Center Operator(Port EDI System)'
                         </span>
                         {' }'}
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'>
                         <div className='text-[#645B69]'>····</div>
                         <div className=''>{']'}</div>
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'>
                         <div className='text-[#645B69]'>··</div>
                         <span>{'}'}</span>
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'>
                         <div className='text-[#645B69]'>··</div>
                         <div className=''><span className='text-[#DDBA78]'>education</span>() {'{'}</div>
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'>
                         <div className='text-[#645B69]'>····</div>
                         <div className=''><span className='text-[#8b59a7]'>return</span> {'['}</div>
                    </div>
                    <div className='hover:bg-[#362c3d] px-2 py-1'>
                         <span className='text-[#645B69]'>······</span>
                         {'{ '}
                         <span className='text-green-500'>'2018-2021'</span>
                         {' : '}
                         <span className='text-green-500'>
                              'West Yangon University - Botany Major(BSC)'
                         </span>
                         {' }'}
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'>
                         <div className='text-[#645B69]'>····</div>
                         <div className=''>{']'}</div>
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'>
                         <div className='text-[#645B69]'>··</div>
                         <span>{'}'}</span>
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'>
                         <div className='text-[#645B69]'>··</div>
                         <div className=''><span className='text-[#DDBA78]'>skills</span>() {'{'}</div>
                    </div>
                    <div className='hover:bg-[#362c3d] px-2 py-1'>
                         <span className='text-[#645B69]'>····</span>
                         <span className='text-[#8b59a7]'>return</span>
                         {' [ '}
                         <span className='text-green-500'>'HTML/CSS/JS','React/Next/React Native', 'TypeScript', 'Node.js', 'Golang', 'Redis/GRPC/RabbitMQ', 'Tailwind', 'Webpack/Vite', 'npm/yarn/pnpm', 'PWA', 'SSR', 'SPA', 'Web-extensions', 'Web Sockets/Socket.io', 'Firebase/Sanity', 'Nginx/Apache', 'PHP', 'MySQL/PSQL/MongoDB/ORM/Graphql', 'NestJS' 'Jest'</span>
                         {' ]'}
                    </div>
                    <div className='flex hover:bg-[#362c3d] px-2 py-1'>
                         {'}'}
                    </div>
               </div>
               <div className='w-full px-2  pt-8 pb-10'>
                    <h1 className='md:text-xl text-lg'><span className='font-extrabold text-green-500'>#</span>fun-facts</h1>
                    <div className='md:w-[70%] md:flex w-full'>
                         <div className='flex gap-3 mt-2 flex-wrap md:text-base text-sm'>
                              <h1 className='border border-[#acb2bf] py-1 px-2'>I enjoy live coding!</h1>
                              <h1 className='border border-[#acb2bf] py-1 px-2'>I like playing video games and football!</h1>
                              <h1 className='border border-[#acb2bf] py-1 px-2'>I like to get drunk every TGIF!</h1>
                              <h1 className='border border-[#acb2bf] py-1 px-2'>I don’t have any siblings!</h1>
                              <h1 className='border border-[#acb2bf] py-1 px-2'>I also like travel!</h1>
                              <h1 className='border border-[#acb2bf] py-1 px-2'>Favourite Programming Language is Golang!</h1>
                              <h1 className='border border-[#acb2bf] py-1 px-2'>Enjoy new to learning technology!</h1>
                         </div>
                         <div className='hidden md:block w-[30%] relative '>
                              <Image src='/img/Dots.svg' alt={''} width={40} height={40} className='w-full h-full absolute left-28' />
                              <Image src='/img/Dots.svg' alt={''} width={40} height={40} className='w-full h-full absolute left-56 -top-16' />
                         </div>
                    </div>
               </div>
               <div className='md:flex mb-8 px-2 max-sm:flex-col justify-between items-center space-y-6 gap-10'>
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
                                   <input required type="text" value={name} onChange={(e) => setName(e.target.value)} name="" className='w-full p-2 h-8 focus:outline-none bg-[#edf1f4] md:text-sm text-sm' id="" placeholder='Enter your name.' />
                              </div>
                              <div className='w-full py-1'>
                                   <h1 className='md:text-base text-sm'>Your email</h1>
                                   <input required type="text" value={email} name="" onChange={(e) => setEmail(e.target.value)} className='w-full p-2 h-8 focus:outline-none bg-[#edf1f4] md:text-sm text-sm' id="" placeholder='Enter your email.' />
                              </div>
                              <div className='w-full py-1'>
                                   <h1 className='md:text-base text-sm'>Message</h1>
                                   <textarea required name="" value={message} onChange={(e) => setMessage(e.target.value)} className='w-full p-2 h-28 focus:outline-none bg-[#edf1f4] md:text-sm text-sm' id="" placeholder='Type a message...' />
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
          </motion.div>
     )
}

export default AboutPage