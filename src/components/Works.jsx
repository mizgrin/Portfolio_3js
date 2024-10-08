import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { styles } from '../styles'
import { link } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full mb-10"
        >
          <Link to={source_code_link} target='_blank' className='h-full flex flex-col'>
          <div className="relative w-full h-[230px]">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover object-top rounded-2xl"
            />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div onClick={() => window.open(source_code_link, "_blank")}
                className='white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-xl'>
                <img src={link} alt={name} className="w-1/2 h-1/2 object-contain"/>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">

        
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">
              {name}
              </h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
          </div>
        
    </Link>
  </Tilt>

</motion.div>
  )

}
const Works = () => {
  return (
      <>
        <motion.div variants={textVariant()} className='text-center'>
            <p className={`${styles.sectionSubText}`}>Projects that I have worked on</p>  
            <h2 className={styles.sectionHeadText} >My works </h2>
      </motion.div> 
      <div className="w-full text-center">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]">
          Following projects showcases my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 mb-10 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        <strong className='text-center w-full position-absolute bottom-0 text-white text-[20px] font-bold'>And Many More...</strong>
      </div>
      
      </>
  )
}

export default SectionWrapper(Works, "");