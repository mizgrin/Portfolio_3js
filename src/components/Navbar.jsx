
import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles'
import { navLinks } from '../constants';
import { socialLinks } from '../constants';
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('Home')
  const [menuToggle , setToggle]=useState(false)
  return (
    <nav
      className={
        `${styles.paddingX} w-full flex fixed py-5 fixed top-0 z-20 bg-primary justify-between items-center`
      }
    >
      <Link to = "/" className='flex items-center gap-2' onClick={()=>{
          setActive('');
          window.scrollTo(0,0)
      }}>
          <img src= {logo}  alt="Logo" className='w-16 h-16 object-contain'/>
          <p className='text-[16px] text-neon font-medium cursor-pointer '>Mijan Shrestha <span className='sm:block hidden font-light text-white '>Frontend developer</span></p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
           <li
           key={link.id}
           className={`${
             active === link.title ? "text-neon" : "text-white"
           } hover:text-neon text-[16px] font-medium cursor-pointer`}
         >
           {link.disabled == 'true' ? (
             <span title="Coming soon" style={{ cursor: "not-allowed" }} className='text-secondary relative'>
               {link.title}
               <div className="absolute opacity-0 group-hover:opacity-100 bg-white p-5 shadow-slate-100">
                  <h6 className='text-black'>Coming soon</h6>
               </div>
             </span>
           ) : (
             <a href={`#${link.id}`} onClick={() => setActive(link.title)}>
               {link.title}
             </a>
           )}
         </li>
         
          ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end item-center'>
            <img 
              src={menuToggle ? close : menu}
              alt="menu" 
              className='w-[28px] h-[28px] object-contain cursor-pointer '
              onClick={() => setToggle(!menuToggle)} />
              <div className=
              {`
              ${!menuToggle ? "hidden" : "flex"} 
              p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-20 rounded-xl`}>
                <ul className='list-none flex justify-end items-start flex-col gap-4'>
                    {navLinks.map((link)=>(
                      <li key={link.id} className={` ${ 
                        active === link.title
                      ? "text-neon"
                      :"text-white"
                      } 
                        hover:text-neon text-[16px] font-medium cursor-pointer`}
                        onClick={()=> {
                          setToggle(!menuToggle)
                          setActive(link.title)
                          }}>
                        <a href={`#${link.id}`}>{link.title}</a>
                      </li>
                    ))}
                </ul>
              </div>
      </div>
      <ul className="fixed right-0 flex flex-col gap-10 p-5 bg-tertiary top-7 innerShadow ">
        <span className='absolute left-[-110px] w-48 transform rotate-[-90deg] top-[100px] text-white bg-tertiary text-center text-[16px] z-10 innerShadow'>Social Media</span>
            {socialLinks.map((link, index) => (
                <li key={index} className="cursor-pointer">
                    <a href={link.url} target="_blank" rel="noreferrer" className='w-[24px] h-[24px] block'>
                        <img src={link.icon} alt="" />
                    </a>
                </li>
            )

            )}
      </ul>
    </nav>
  )
}

export default Navbar