import React from 'react'
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';
import { myImage } from '../constants';

const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card overflow-hidden'
        >
          <div option={{
            max:45,
            scale:1,
            speed:450
          }} className='bg-tertiary rounded-[20] py-5 px-12  min-h-[280px] flex justify-evenly items-center flex-col'>
              <img src={icon} alt="" className='w-16 h-16 object-contain' />
              <h3 className='text-white text-center text-[20px] font-bold'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <div id='about'>
      <motion.div variants={textVariant()}>
          <p className={`{styles.sectionSubText} `}>Overview</p>  
          <h2 className={styles.sectionHeadText} style={{textShadow:'#fffcff85 3px 5px 4px'}}>Introduction</h2>
      </motion.div>
      <motion.div className="flex sm:flex-row flex-col-reverse " variants={fadeIn('','', 0.1, 1)}>
      <div  className='sm:w-8/12 w-full'>
          <p className='mt-4 text-secondary text-[17px] mx-w-3x; leading-[30px]'>
          <strong className='text-white'>Experienced Frontend Web Developer </strong>and <strong className='text-white'> Fullstack WordPress Developer </strong> with a proven track record of delivering high-quality web solutions. 
          <strong className='text-white'> Proficient in HTML, CSS (including SCSS), and JavaScript (including jQuery) </strong>, with a keen eye for design and user experience. 
          Skilled in translating design mockups into  <strong className='text-white'>responsive and interactive web interfaces </strong> using tools like Figma .
           Additionally, adept at <strong className='text-white'> WordPress development </strong>, including theme customization, plugin integration, and backend functionality implementation. 
            In my current role, I am actively  <strong className='text-white'> investing time and effort </strong> into deepening my proficiency in  <strong className='text-white'> React.js and tailwind css </strong>,
             with a dedicated focus on expanding my skill set within these frameworks.<strong className='text-white'> Collaborative team player</strong>  dedicated to delivering innovative and impactful digital solutions
          </p>
      </div>
      <div className="float-end translate-y-0 absolute right-0 top-[-150px] sm:w-4/12 w-full" style={{ filter: "drop-shadow(7px -2px 6px #a9f7f766)" }}>
          <img src={myImage} alt="" className='object-cover' />
        </div>

      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10 justify-around'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index}{...service}/>
          ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About,"about")