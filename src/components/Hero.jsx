import React from 'react';
import { motion } from 'framer-motion'
import { ComputersCanvas } from './canvas'
import { styles } from '../styles'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
        <div className={` ${styles.paddingX} absolute inset-0 top-[120px] max-w-8xl mx-auto flex flex-row items-start gap-5 mb-20`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className="w-5 h-5 rounded-full bg-neon"></div>
            <div className='w-1 sm:h-80 h-40 neon-gradient'></div>
          </div>
          <div>
            <h1 className= { `text-white {${styles.heroHeadText}`}>Namaste , I am <span className={`sm:text-[45px] text-[24px] text-neon  font-bold`}>Mijan Shrestha</span></h1>
            <p className={`${ styles.heroSubText} text-white `}> As a frontend web developer, I specialize in crafting engaging websites.</p>
          </div>
        </div>
          <ComputersCanvas />
          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center item-center">
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