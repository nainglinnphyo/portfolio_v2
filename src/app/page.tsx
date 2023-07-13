'use client'
import Hero from '@/components/Hero'
import NavBar from '@/components/Navbar'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion';
import { opacityMotion } from '@/utils/motions';
import { Icon } from '@iconify/react';
import Project from '@/components/Project';
import Skill from '@/components/Skill';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Link from 'next/link';
import DropDownSocial from '@/components/DropDownSocial';

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, }} animate={{ opacity: 1, }} exit={{ opacity: 0 }} className=''>
        <Hero />
        <motion.span className='md:block hidden text-[0.65rem] md:text-sm border border-[#acb2bf] border-r-0 md:max-w-[80px] h-20 mx-auto w-40 md:w-48 right-0 bottom-40 absolute'
          initial={{ opacity: 0.5 }}
          animate={{
            x: 0,
            boxShadow: "-10px 10px 0 rgba(0, 0, 0, 0.3)",
          }}
        >
        </motion.span>
        <motion.div className='md:block hidden  border border-[#acb2bf] border-l-0 top-96 md:max-w-[80px] h-20 mx-auto w-40 md:w-48 left-0 absolute'
          animate={{
            x: 0,
            boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.3)",
          }}
        >
        </motion.div>

        <motion.div className='md:block hidden border border-[#acb2bf] border-r-0 -bottom-96 md:max-w-[80px] h-36 mx-auto w-40 md:w-48 right-0 absolute'
          animate={{
            x: 0,
            boxShadow: "-10px 10px 0 rgba(0, 0, 0, 0.3)",
          }}
        ></motion.div>

        <Project />
        <Skill />
        <motion.div className='md:block hidden border border-[#acb2bf] border-l-0 md:max-w-[80px] h-32 mx-auto w-16 left-0 -bottom-[90rem] absolute'
          animate={{
            x: 0,
            boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.3)",
          }}
        >
        </motion.div>
        <motion.div className='md:block hidden -bottom-[60rem] md:max-w-[80px] h-40 mx-auto absolute right-0'>
          <Image src='/img/DotsOne.svg' alt={''} width={60} height={60} className='w-full h-full rotate-180' />
        </motion.div>
        <motion.div className='md:block hidden -bottom-[130rem] md:max-w-[80px] h-40 mx-auto absolute right-0'>
          <Image src='/img/DotsOne.svg' alt={''} width={20} height={60} className='w-full h-full rotate-180' />
        </motion.div>
        <motion.div className='left-1/2 w-5 h-9 rounded-3xl border border-[#acb2bf] absolute md:bottom-16 bottom-6 flex items-center justify-center' initial={{ opacity: 0, }} animate={{ opacity: 1, }} exit={{ opacity: 0 }} >
          <motion.div className='w-[0.4rem] h-[0.4rem] rounded-full bg-[#acb2bf] mb-5'
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
          >
          </motion.div>
        </motion.div>
        <About />
        <Contact />
      </motion.div>
    </AnimatePresence>
  )
}
