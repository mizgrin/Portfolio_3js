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
            <h2 className='text-center text-white text-[25px]'>Under construction: More content will be added shortly. Thanks for your patience!</h2>
                <div className="image-holder">
                    <img src={construction} className='filter invert m-auto' alt="gif" />
                </div>
            </div>
    );
};

export default SectionWrapper(ComingSoon, "comingsoon");
