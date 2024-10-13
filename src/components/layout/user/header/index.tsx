import { useState } from "react";
import Logo from "../../../../../public/pictures/logo.png";
import ThemeToggle from "../../../theme-toggle";
import HamburgerIcon from "../../../../../public/icons/hamburger-icon";
import CloseIcon from "../../../../../public/icons/close-icon";
import { NavLink } from "react-router-dom";

const UserHeader = () => {
  const [isNavbar, setIsNavbar] = useState(false);
  return (
    <header className='fixed top-0 z-20 w-full bg-gray-200 dark:bg-gray-900'>
      <nav>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 md:p-4'>
          <a
            href='#'
            className='flex items-center space-x-3  rtl:space-x-reverse hover:text-blue-700'>
            <img
              src={Logo}
              className='h-auto w-20 dark:bg-white dark:rounded-lg'
              alt='Birthdate Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap hidden md:inline-block hover:text-blue-700 dark:text-white'>
              Juniors
            </span>
          </a>
          <div className='flex items-center md:gap-2 gap-1 md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse'>
            <select
              id='languages'
              className='border cursor-pointer border-gray-400 outline-none bg-gray-200 text-gray-900 text-sm rounded-lg  focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 '>
              <option value='rus'>RU</option>
              <option value='eng'>EN</option>
              <option value='uzb'>UZ</option>
            </select>
            <ThemeToggle />
            <button
              onClick={() => {
                setIsNavbar(!isNavbar);
              }}
              data-collapse-toggle='navbar-language'
              type='button'
              className='p-1 text-gray-500 rounded-lg transition md:hidden hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none'
              aria-controls='navbar-language'
              aria-expanded='false'>
              <span className='sr-only'>Open main menu</span>
              {isNavbar ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              isNavbar ? null : "hidden"
            } w-full h-full md:flex md:w-auto md:order-1`}
            id='navbar-language'>
            <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <NavLink
                  to={""}
                  onClick={() => {
                    setIsNavbar(!isNavbar);
                  }}
                  className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  aria-current='page'>
                  Bosh sahifa
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/contact-us'
                  onClick={() => {
                    setIsNavbar(!isNavbar);
                  }}
                  className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                  Bog'lanish
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about-me'
                  onClick={() => {
                    setIsNavbar(!isNavbar);
                  }}
                  className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                  Biz haqimizda
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default UserHeader;
