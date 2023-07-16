import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { logo, close, menu } from "../assets";
import { navLinks } from "../constants/constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive]       = useState<string>('');
  const [isShowing, setIsShowing] = useState<boolean>(false);

  return (
    <div
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div
        className="w-full flex justify-between items-center max-w-7xl mx-auto"
      >
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Daniel &nbsp; <span className="sm:block hidden">Agüero</span></p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(link => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-green-500' : 'text-secondary'} hover:text-green-500 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={isShowing ? close : menu}
            alt="menu"
            className="cursor-pointer w-[28px] h-[28px] object-contain"
            onClick={() => setIsShowing(!isShowing)}
          />

          <div className={`${!isShowing ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
            {navLinks.map(link => (
              <li
                key={link.id}
                className={`${active === link.title ? 'text-green-500' : 'text-secondary'} hover:text-green-500 text-[16px] font-medium cursor-pointe font-poppins`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar