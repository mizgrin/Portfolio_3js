import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { themesDesign } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import Lightbox from './lightbox'; // Import the new Lightbox component

const ThemeCard = ({ index, name, image, }) => {
  const [isLightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  return (
    <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-[360px] h-full mb-10"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top rounded-2xl cursor-pointer"
            onClick={openLightbox}
          />
        </div>
        <h4 className='p-4'>{name}</h4>
      </Tilt>

      {isLightboxOpen && (
        <Lightbox image={image} onClose={closeLightbox} />
      )}
    </div>
  );
};

const Morework = () => {
  return (
    <>
      <div variants={textVariant()} className='text-center'>
        <p className={`${styles.sectionSubText}`}>More glimpse of theme designs</p>  
        <h2 className={styles.sectionHeadText} >Theme Designs</h2>
      </div> 
      <div className="w-full text-center">
        <p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]">
          Following Themes showcases my skills and experience through real-world examples of my work.
           It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
      </div>
      
      <div className="mt-20 mb-10 flex flex-wrap justify-center gap-7">
        {themesDesign.map((themes, index) => (
          <ThemeCard key={`project-${index}`} index={index} {...themes} />
        ))}
        <strong className='text-center w-full position-absolute bottom-0 text-white text-[20px] font-bold'>
          And Many More...
        </strong>
      </div>
    </>
  );
};

export default SectionWrapper(Morework, "");
