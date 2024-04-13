import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { construction } from '../assets';

const ComingSoon = () => {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const animate = () => {
            setExpanded(true);
            setTimeout(() => {
                setExpanded(false);
            }, 1000);
            setTimeout(() => {
                animate();
            }, 2000);
        };

        animate();

        return () => {
            clearTimeout();
        };
    }, []);

    return (
        <div className='w-96 mx-auto'>
            <h2 className='text-center text-white text-[25px]'>Below this part,  the page is </h2>
                <div className="image-holder">
                    <img src={construction} className='filter invert m-auto' alt="gif" />
                </div>
                    <h2
                        className={`text-center overflow-hidden transition-width font-bold text-[30px] text-[#252525] duration-1000 `}
                    >
                        
                        <div className='block whitespace-nowrap'>
                        
                        <span className='whitespace-nowrap text-[#fff] '>To be continued ...</span>
                        </div>
                    </h2>
            </div>
    );
};

export default SectionWrapper(ComingSoon, "comingsoon");
