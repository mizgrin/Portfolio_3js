import {React, useState} from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {styles} from '../styles';


const Footer = () => {  
    return (
        <div className="w-full bg-slate-700 p-2 ">
            <p className='text-white text-center'>Copyright &copy; {new Date().getFullYear()} All rights reserved 

                <Link to="https://linkedin.com/in/mijan-shrestha-412aba12a/" className="text-slate-400 ml-2 hover:text-gray-300 transition-all ease-linear ">Mijan Shrestha</Link>
            </p>
        </div>

    )
}

export default Footer;