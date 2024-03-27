import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';

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
            <AnimatePresence>
                
                    <h2
                        
                        className={`text-center overflow-hidden transition-width duration-1000 ${expanded ? 'w-10 opacity-10' : 'w-96 opacity-100'}`}
                    >
                        <div className='block whitespace-nowrap'>
                        <span className='whitespace-nowrap text-white font-bold text-[30px]'>To be continued...</span>
                        </div>
                    </h2>
              
            </AnimatePresence>
        </div>
    );
};

export default ComingSoon;
