'use client'
import React from 'react'
import styles from '@/styles/about.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image'

function AboutPage() {
     return (
          <div className='flex flex-col gap-y-3 px-4 md:px-8 md:pt-10 pt-5 md:max-w-2xl lg:max-w-6xl mx-auto '>
               <div className='w-full px-2 '>
                    <h1 className='md:text-xl text-lg'><span className='font-extrabold text-green-500'>/</span>about-me</h1>
                    <span className='md:text-sm'>Who am i?</span>
               </div>
               <motion.div className='max-w-[100%] md:text-[0.9rem] md:leading-5 font-jetbrain text-xs w-full'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
               >
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
               </motion.div>
               <div className='w-full px-2  pt-8 pb-10'>
                    <h1 className='md:text-xl text-lg'><span className='font-extrabold text-green-500'>#</span>fun-facts</h1>
                    <div className='md:w-[70%] md:flex w-full'>
                         <div className='flex gap-3 mt-2 flex-wrap md:text-base text-sm'>
                              <h1 className='border border-[#acb2bf] py-1 px-2'>I enjoy live coding!</h1>
                              <h1 className='border border-[#acb2bf] py-1 px-2'>I like playing video games and football!</h1>
                              <h1 className='border border-[#acb2bf] py-1 px-2'>I like to get drunk ever TGIF!</h1>
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
          </div>
     )
}

export default AboutPage