import { Fragment, useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "/pictures/logo.png";
import ThemeToggle from "../../../theme-toggle";
import HamburgerIcon from "../../../../assets/icons/hamburger-icon";
import CloseIcon from "../../../../assets/icons/close-icon";
import LogOutIcon from "../../../../assets/icons/log-out-icon";
import HomeIcon from "../../../../assets/icons/home-icon";
import ContactUsIcon from "../../../../assets/icons/contact-us-icon";
import AboutUsIcon from "../../../../assets/icons/about-us-icon";
import PersonIcon from "../../../../assets/icons/person-icon";
import { LanguageContext } from "../../../../context/language";
import LogOutModal from "../../../modals/logout-modal";

const UserHeader = () => {
  const [isNavbar, setIsNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { langType, changeLanguage, lang } = useContext(LanguageContext);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Fragment>
      <header className="fixed top-0 z-20 w-full bg-gray-200 dark:bg-gray-900">
        <nav>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 md:p-4">
            <Link
              to="#"
              className="flex items-center space-x-3  rtl:space-x-reverse hover:text-blue-700"
            >
              <img
                src={Logo}
                className="h-auto w-20 dark:bg-white dark:rounded-lg"
                alt="Birthdate Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap hidden md:inline-block hover:text-blue-700 dark:text-white">
                Juniors
              </span>
            </Link>
            <div className="flex items-center md:gap-2 gap-1 md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
              <select
                id="languages"
                value={langType ? (langType as "uzb" | "rus" | "eng") : "uzb"}
                onChange={changeLanguage}
                className="border cursor-pointer border-gray-400 outline-none bg-gray-200 text-gray-900 text-sm rounded-lg  focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
              >
                <option value="rus">RUS</option>
                <option value="eng">ENG</option>
                <option value="uzb">UZB</option>
              </select>
              <ThemeToggle />
              <NavLink
                to="/account"
                className="p-1 text-black rounded-lg transition  hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700 focus:outline-none"
              >
                <PersonIcon width="32px" height="32px" />
              </NavLink>
              <button
                data-collapse-toggle="log-out toggle"
                type="button"
                onClick={toggleModal}
                className="p-1 hidden md:block text-gray-500 rounded-lg transition  hover:bg-red-300  dark:hover:bg-red-300 focus:outline-none"
              >
                <LogOutIcon className="" />
              </button>
              <button
                onClick={() => {
                  setIsNavbar(!isNavbar);
                }}
                data-collapse-toggle="navbar-language"
                type="button"
                className="p-1 text-gray-500 rounded-lg transition md:hidden hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none"
                aria-controls="navbar-language"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isNavbar ? (
                  <CloseIcon height="32px" width="32px" />
                ) : (
                  <HamburgerIcon />
                )}
              </button>
            </div>
            <div
              className={`items-center justify-between ${
                isNavbar ? null : "hidden"
              } w-full h-full md:flex md:w-auto md:order-1`}
              id="navbar-language"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink
                    to={""}
                    onClick={() => {
                      setIsNavbar(!isNavbar);
                    }}
                    className="flex items-center  gap-1 py-2 px-3 md:p-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    <HomeIcon className="md:hidden" />
                    <span>{lang?.home}</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact-us"
                    onClick={() => {
                      setIsNavbar(!isNavbar);
                    }}
                    className="flex items-center  gap-1 py-2 px-3 md:p-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <ContactUsIcon className="md:hidden" />
                    <span>{lang?.contact}</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about-me"
                    onClick={() => {
                      setIsNavbar(!isNavbar);
                    }}
                    className="flex items-center  gap-1 py-2 px-3 md:p-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <AboutUsIcon className="md:hidden" />
                    <span>{lang?.about}</span>
                  </NavLink>
                </li>
                <li className="md:hidden">
                  <button
                    onClick={() => toggleModal()}
                    data-collapse-toggle="log-out toggle"
                    type="button"
                    className="flex items-center gap-2 py-2 px-3 md:p-0 w-full text-gray-900 rounded hover:bg-red-200 md:hover:bg-transparent  dark:hover:bg-red-300  md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <LogOutIcon className="" />
                    <span className=" text-[#EA3323]">{lang.logout}</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {isOpen && (
        <LogOutModal
          isOpen={isOpen}
          text="Tizimdan chiqishga ishonchingiz komilmi?"
          icon={<LogOutIcon className="mx-auto !w-10 !h-10 mt-10 mb-5" />}
          toggleModal={toggleModal}
        />
      )}
    </Fragment>
  );
};

export default UserHeader;
