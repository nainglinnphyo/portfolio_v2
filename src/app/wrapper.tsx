'use client'
import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import React, { useEffect, useState } from 'react'

function Wrapper({ children }: { children: React.ReactNode }) {

     const cursorX = useMotionValue(-100);
     const cursorY = useMotionValue(-100);
     const springConfig = { damping: 80, stiffness: 400 };
     const cursorXSpring = useSpring(cursorX, springConfig);
     const cursorYSpring = useSpring(cursorY, springConfig);

     useEffect(() => {
          const moveCursor = (e: any) => {
               cursorX.set(e.clientX - 16)
               cursorY.set(e.clientY - 16)
          };
          window.addEventListener('mousemove', moveCursor)
          window.addEventListener('mouseenter', moveCursor)
          return () => {
               window.removeEventListener('mousemove', moveCursor)
          }
     }, [])
     return (
          <div>
               <motion.div className={`pointer-events-none w-8 h-8 rounded-full border border-[#abb1be] items-center  justify-center fixed z-[9999] hidden md:flex`} style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
               }}>
                    <div className='w-1 h-1 bg-[#abb1be] rounded-full'></div>
               </motion.div>
               <NavBar />
               {children}
               <Footer />
          </div>
     )
}

export default Wrapper