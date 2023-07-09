import React from 'react';
import { motion } from 'framer-motion';

const LineAnimation = () => {
     return (
          <div className="flex justify-center">
               <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="h-full w-full"
               >
                    <motion.path
                         className="stroke-current text-blue-500"
                         d="M0 50 H100"
                         strokeWidth="2"
                         fill="none"
                         strokeDasharray="1000"
                         strokeLinecap="round"
                         initial={{ pathLength: 0, pathOffset: 1 }}
                         animate={{ pathLength: 1, pathOffset: 0 }}
                         transition={{ duration: 2, ease: 'easeInOut' }}
                    />
               </svg>
          </div>
     );
};

export default LineAnimation;
