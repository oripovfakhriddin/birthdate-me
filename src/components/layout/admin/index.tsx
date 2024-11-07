import { Fragment, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "../../theme-toggle";
import PersonIcon from "../../../assets/icons/person-icon";
import LogOutIcon from "../../../assets/icons/log-out-icon";
import Logo from "/pictures/logo.png";
import HamburgerIcon from "../../../assets/icons/hamburger-icon";
import CloseIcon from "../../../assets/icons/close-icon";
import LogOutModal from "../../logout-modal";

const AdminLayoutPage = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isDropDownAccount, setIsDropDownAccount] = useState(false);
  const [isLogOutModal, setIsLogOutModal] = useState(false);

  const toggleIsSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  const toggleIsDropDownAccount = () => {
    setIsDropDownAccount(!isDropDownAccount);
  };

  const toggleIsLogOutModal = () => {
    setIsLogOutModal(!isLogOutModal);
  };

  return (
    <Fragment>
      <nav className='fixed top-0 z-50 w-full bg-gray-300 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start'>
              <button
                aria-controls='logo-sidebar'
                onClick={toggleIsSidebar}
                type='button'
                className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 '>
                <span className='sr-only'>Open sidebar</span>
                {isSidebar ? <CloseIcon /> : <HamburgerIcon />}
              </button>
              <Link
                to='/admin'
                className='flex ms-2 gap-1 items-center md:me-24'>
                <img
                  src={Logo}
                  className='h-auto w-12 dark:bg-white dark:rounded-lg'
                  alt='Birthdate Logo'
                />
                <span className='self-center hidden md:block text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>
                  Birthdate
                </span>
              </Link>
            </div>
            <div className='flex items-center'>
              <div className='flex items-center ms-3'>
                <div className='flex justify-between items-center gap-2'>
                  <ThemeToggle />
                  <button
                    type='button'
                    className='flex text-sm bg-gray-800 rounded-full '
                    aria-expanded='false'
                    onClick={toggleIsDropDownAccount}>
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='w-8 h-8 rounded-full'
                      src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                      alt='user photo'
                    />
                  </button>
                </div>
                <div
                  className={`z-50  ${
                    isDropDownAccount ? "absolute top-10 right-3" : "hidden"
                  } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                  id='dropdown-user'>
                  <div className='px-4 py-3' role='none'>
                    <p
                      className='text-sm text-gray-900 dark:text-white'
                      role='none'>
                      Neil Sims
                    </p>
                    <p
                      className='text-sm font-medium text-gray-900 truncate dark:text-gray-300'
                      role='none'>
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className='py-1' role='none'>
                    <li>
                      <Link
                        to='/admin'
                        onClick={toggleIsDropDownAccount}
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                        role='menuitem'>
                        Dashboard
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={() => {
                          setIsLogOutModal(!isLogOutModal);
                          setIsDropDownAccount(!isDropDownAccount);
                        }}
                        className='block px-4 w-full py-2 text-left text-sm text-red-700 hover:bg-red-200 dark:text-red-600 dark:hover:bg-red-600 dark:hover:text-white '
                        role='menuitem'>
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          !isSidebar && " -translate-x-full"
        } bg-gray-300 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}>
        <div className='h-full px-3 pb-4 overflow-y-auto  dark:bg-gray-800'>
          <ul className='space-y-2 font-medium'>
            <li onClick={toggleIsSidebar}>
              <NavLink
                end
                to='/admin'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 '>
                <svg
                  className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 21'>
                  <path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
                  <path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
                </svg>
                <span className='ms-3'>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                end
                to='/admin/accounts'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 '>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path d='m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z' />
                </svg>
                <span className='flex-1 ms-3 whitespace-nowrap'>Accounts</span>
                <span className='inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300'>
                  3
                </span>
              </NavLink>
            </li>
            <li onClick={toggleIsSidebar}>
              <NavLink
                end
                to='/admin/users'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 '>
                <PersonIcon />
                <span className='flex-1 ms-3 whitespace-nowrap'>Users</span>
              </NavLink>
            </li>

            <li>
              <button
                onClick={toggleIsLogOutModal}
                className='flex items-center p-2 w-full text-[#EA3323] rounded-lg hover:bg-red-100 dark:hover:bg-red-200'>
                <LogOutIcon className='' />
                <span className=' ms-3 whitespace-nowrap'>Log Out</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <main className='p-4 sm:ml-64'>
        <div className='mt-14'>
          <Outlet />
        </div>
      </main>
      {isLogOutModal && (
        <LogOutModal
          isOpen={isLogOutModal}
          text='Tizimdan chiqishga ishonchingiz komilmi?'
          icon={<LogOutIcon className='mx-auto !w-10 !h-10 mt-10 mb-5' />}
          toggleModal={toggleIsLogOutModal}
        />
      )}
    </Fragment>
  );
};

export default AdminLayoutPage;
