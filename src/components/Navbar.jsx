import React, {useState} from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // const [active, setActive] = useState(false);


  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo"
      className='w-[124px] h-[32px]' />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* whenever we want to retun anything instantly use () instead of {} eg. rendering any html ele using map() */}
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer  text-white text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu"
        className='w-[28px] h-[28px] object-contain'
        onClick={() => setToggle((prev) => !prev)} />
        {/* while updating any state depending on its previous state eg. if toogle is true onclick set it to false
        in such case callback fnc are prefered inside of setToggle */}

        <div className={`${toggle ? 'flex' : 'hidden'}
        p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer  text-white text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar