'use client'
import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import React, { useEffect, useState } from 'react'

function Wrapper({ children }: { children: React.ReactNode }) {

     const backWardX = useMotionValue(-100);
     const backWardY = useMotionValue(-100);
     const backWardSpringConfig = { damping: 30, stiffness: 180 };
     const backWardXSpring = useSpring(backWardX, backWardSpringConfig);
     const backWardYSpring = useSpring(backWardY, backWardSpringConfig);

     const cursorX = useMotionValue(0);
     const cursorY = useMotionValue(0);
     const springConfig = { damping: 30, stiffness: 500 };
     const cursorXSpring = useSpring(cursorX, springConfig);
     const cursorYSpring = useSpring(cursorY, springConfig);

     useEffect(() => {
          const moveCursor = (e: any) => {
               cursorX.set(e.clientX - 0)
               cursorY.set(e.clientY - 0)
          };
          const backWardMoveCursor = (e: any) => {
               backWardX.set(e.clientX - 12)
               backWardY.set(e.clientY - 12)
          };
          window.addEventListener('mousemove', moveCursor)
          window.addEventListener('mousemove', backWardMoveCursor)
          // window.addEventListener('mouseenter', moveCursor)
          return () => {
               window.removeEventListener('mousemove', backWardMoveCursor)
               window.removeEventListener('mousemove', moveCursor)
          }
     }, [])
     return (
          <div>
               <motion.div className='w-2 h-2 bg-[#abb1be] rounded-full absolute z-[9999]' style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
               }}>
               </motion.div>
               <motion.div className={`pointer-events-none w-8 h-8 rounded-full border border-[#abb1be] z-[9999] absolute`} style={{
                    translateX: backWardXSpring,
                    translateY: backWardYSpring,
               }}>
               </motion.div>
               <NavBar />
               {children}
               <Footer />
          </div>
     )
}

export default Wrapper