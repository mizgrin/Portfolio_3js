import React from 'react';
import { motion } from 'framer-motion'
import { ComputersCanvas } from './canvas'
import { styles } from '../styles'

const Hero = () => {
  const downloadCV = () => {
    window.open('https://drive.google.com/file/d/1Mh8EENQYj4FQgS1xpUaRXrYDvOS9ZiZG/view?usp=sharing', '_blank');
  }
  return (
    <section className='relative w-full h-screen mx-auto'>
        <div className={` ${styles.paddingX} absolute inset-0 top-[120px] max-w-8xl mx-auto flex flex-row items-start gap-5 mb-12 z-10`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className="w-5 h-5 rounded-full bg-neon"></div>
            <div className='w-1 sm:h-80 h-40 neon-gradient'></div>
          </div>
          <div>
            <h1 className= { `text-white {${styles.heroHeadText}`}>Namaste , I am <span className={`sm:text-[45px] text-[24px] text-neon  font-bold`}>Mijan Shrestha</span></h1>
            <p className={`${ styles.heroSubText} text-white mb-3 `}> As a website developer, I specialize in creating engaging sites.</p>
            <button
              onClick={downloadCV}
              className="bg-transparent border border-neon hover:border-1 hover:opacity-70 transition-all ease-linear text-white font-bold py-2 px-4 rounded"
            >
              Download My Resume
            </button>
          </div>
        </div>
          <ComputersCanvas />
          <div className="absolute xs:bottom-16 bottom-32 w-full flex justify-center item-center z-20">
              <a href="#about">
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                    <motion.dev
                    animate = {{
                      y:[0, 24, 0]
                    }}
                      transition={{
                        duration:1.5,
                        repeat :Infinity,
                        repeatType: 'loop'
                      }}
                      className='w-3 h-3 rounded-full bg-secondary mb-1'
                    />
                </div>
              </a>
          </div>
    </section>
  )
}

export default Hero