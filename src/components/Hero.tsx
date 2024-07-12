"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      className="px-4 md:px-8 md:min-h-[700px] h-[400px] justify-center flex flex-col items-center md:max-w-2xl lg:max-w-6xl mx-auto"
      initial={{ translateY: -800 }}
      animate={{ translateY: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="md:text-start text-center  max-w-4xl mx-auto">
        <div className="md:mt-0 mt-2 w-full overflow-hidden">
          <div className="mt-2 md:mt-0">
            <h1 className="md:text-sm text-xl font-medium tracking-tight text-start ">
              <pre className="md:text-[0.78rem] md:leading-4 text-[0.62rem] leading-3">
                <code className="text-start">
                  {`
   _  __     _             __   _             ___  __
  / |/ /__ _(_)__  ___ _  / /  (_)__  ___    / _ \\/ /  __ _____
 /    / _ \`/ / _ \\/ _ \`/ / /__/ / _ \\/ _ \\  / ___/ _ \\/ // / _ \\
/_/|_/\\_,_/_/_//_/\\_, / /____/_/_//_/_//_/ /_/  /_//_/\\_, /\\___/
                 /___/                               /___/`}
                </code>
              </pre>
              <br className="hidden md:block" />
              <span className="md:text-lg text-base">
                I build & develop{" "}
                <span className="text-green-500">web app</span>{" "}
                <br className="md:hidden" /> and{" "}
                <span className="text-green-500">cross platform</span>!
              </span>
            </h1>
            <h1 className="md:text-sm text-xs mt-2 text-[#9398a4] text-start">
              I'm a skilled fullstack developer proficient <br /> in JavaScript,
              TypeScript, PHP, and Golang.
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-4 max-w-xl mx-auto relative">
        <Image
          src="/img/QuotOne.svg"
          width={15}
          height={15}
          alt={""}
          className="absolute -top-2 z-10 bg-[#282C34] left-2"
        />
        <Image
          src="/img/QuotOne.svg"
          width={15}
          height={15}
          alt={""}
          className="absolute right-8 -bottom-1 z-10 bg-[#282C34]"
        />
        <div className="text-[0.7rem] md:text-lg border border-[#acb2bf] md:max-w-[600px] mx-auto">
          <h1 className="py-4 md:py-2 px-2">
            Writing reusable, testable, and efficient code!🔥
          </h1>
        </div>
        <span className="w-max text-[0.65rem] md:text-sm border border-[#acb2bf] border-t-0 right-0 md:max-w-[200px] mx-auto absolute ">
          <h1 className="py-4 md:py-3 px-2">What Can i help you❓</h1>
        </span>
        <motion.div
          className="left-1/2 w-5 h-9 rounded-3xl md:-bottom-24 -bottom-28 border border-[#acb2bf] absolute flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-[0.4rem] h-[0.4rem] rounded-full bg-[#acb2bf] mb-5"
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
