
import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles'
import { navLinks } from '../constants';
import { socialLinks , contactDetails } from '../constants';
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('Home')
  const [ menuToggle, setToggle ] = useState( false )
  const [socialMedia, setHovered] = useState(false)
  return (
    <header className='w-full  fixed py-5 fixed top-0 z-20 bg-primary'>
  
    <nav
      className={
        `${styles.paddingX} flex  justify-between items-center`
      }
    >
      <Link to = "/" className='flex items-center gap-2' onClick={()=>{
          setActive('');
          window.scrollTo(0,0)
      }}>
          <img src= {logo}  alt="Logo" className='w-16 h-16 object-contain'/>
          <p className='text-[16px] text-neon font-medium cursor-pointer '>Mijan Shrestha <span className='sm:block hidden font-light text-white '>Frontend developer</span></p>
        </Link>
        <div className="right-nav-wrap">
            <ul className='flex justify-end gap-5  mb-5'>
            {contactDetails.map(( contact, index) => (
              <li key={contact.title} className='contact__detail flex items-center gap-2' title={contact.title }>
                <div className="icon-holder w-[25px] h-[25px]">
                  <img src={contact.icon} alt={contact.title } />
                </div>
                <div className="contact-value text-white">
                <Link to={contact.title === "Email" ? 'mailto:' + contact.value : 'tel:' + contact.value} className='m-0' target='_blank'>
                  {contact.value}
                </Link>

                  </div>
                </li>
            ))}
              </ul>
              <ul className='list-none hidden sm:flex flex-row gap-10 justify-end'>
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
        </div>
   
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
        <ul className={` 
        ${socialMedia === false
            ? "right-[-55px]" : "right-0" } fixed flex flex-col gap-10 p-5 transition-all ease-linear bg-tertiary top-[100px]`}
          style={{ boxShadow: 'inset 3px -2px 4px 3px #ffffff42' }}>
          <span onClick={() =>
          {
            setHovered (!socialMedia)
          }} className=
            'border-primary border-2  absolute left-[-125px] w-48 transform rotate-[-90deg] top-[100px] p-3 border-1 border-[#fff] text-white bg-tertiary text-center text-[16px] z-10 transition-all ease-linear innerShadow cursor-pointer hover:opacity-70' title='Social media click here' style={{ boxShadow: 'inset 3px -2px 4px 3px #ffffff42' }}>
            Social Media
          </span>
            {socialLinks.map((link, index) => (
                <li key={index} className="cursor-pointer">
                    <Link to={link.url} target="_blank" rel="noreferrer" className='w-[24px] h-[24px] block hover:rotate-45 transition-all ease-linear'>
                        <img src={link.icon} alt="" />
                    </Link>
                </li>
            )

            )}
      </ul>
      </nav>
      </header>
  )
}

export default Navbar