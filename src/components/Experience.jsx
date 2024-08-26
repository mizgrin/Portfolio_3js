import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { Link } from 'react-router-dom';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement 
    contentStyle={{ background: '#1d1836', color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full rounded-full bg-white overflow-hidden'>
        <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <Link to={experience.company_website} className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }} target='_blank'>{experience.company_name}</Link>
      <p>{experience.date}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const outPutExperiences = [...experiences].reverse();
  return (
    <div id='work'>
      <motion.div variants={textVariant()} className='text-center'>
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>  
        <h2 className={styles.sectionHeadText}>My Work Experience</h2>
      </motion.div> 
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {outPutExperiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default SectionWrapper(Experience, "work");
