import { Fragment, useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "../../theme-toggle";
import PersonIcon from "../../../assets/icons/person-icon";
import LogOutIcon from "../../../assets/icons/log-out-icon";
import Logo from "/pictures/logo.png";
import HamburgerIcon from "../../../assets/icons/hamburger-icon";
import CloseIcon from "../../../assets/icons/close-icon";
import LogOutModal from "../../modals/logout-modal";
import { LanguageContext } from "../../../context/language";
import { AuthContext } from "../../../context/auth";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getUsers } from "../../../redux/slices/user";
import DashboardIcon from "../../../assets/icons/dashboard-icon";
import UsersIcon from "../../../assets/icons/users-icon";

const AdminLayoutPage = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isDropDownAccount, setIsDropDownAccount] = useState(false);
  const [isLogOutModal, setIsLogOutModal] = useState(false);
  const { lang, langType, changeLanguage } = useContext(LanguageContext);
  const { user } = useContext(AuthContext);
  const { total } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers({ size: "10", currentPage: "1", search: "" }));
  }, [dispatch]);

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
      <nav className="fixed top-0 z-50 w-full bg-gray-300 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center justify-start">
              <button
                aria-controls="logo-sidebar"
                onClick={toggleIsSidebar}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 "
              >
                <span className="sr-only">Open sidebar</span>
                {isSidebar ? (
                  <CloseIcon width="32px" height="32px" />
                ) : (
                  <HamburgerIcon />
                )}
              </button>
              <Link
                to="/admin"
                className="flex ms-2 gap-1 items-center md:me-24"
              >
                <img
                  src={Logo}
                  className="h-auto w-12 dark:bg-white dark:rounded-lg"
                  alt="Birthdate Logo"
                />
                <span className="self-center hidden md:block text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Birthdate
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex justify-between items-center gap-2">
                <div>
                  <select
                    id="languages"
                    value={
                      langType ? (langType as "uzb" | "rus" | "eng") : "uzb"
                    }
                    onChange={changeLanguage}
                    className="border cursor-pointer border-gray-400 outline-none bg-gray-200 text-gray-900 text-sm rounded-lg  focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
                  >
                    <option value="rus">RUS</option>
                    <option value="eng">ENG</option>
                    <option value="uzb">UZB</option>
                  </select>
                </div>
                <ThemeToggle />
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full "
                  aria-expanded="false"
                  onClick={toggleIsDropDownAccount}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
              </div>
              <div
                className={`z-50  ${
                  isDropDownAccount ? "absolute top-10 right-3" : "hidden"
                } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p
                    className="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    {user?.firstName}
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    {user?.lastName}
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <Link
                      to="/admin"
                      onClick={toggleIsDropDownAccount}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      {lang.dashboard}
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        setIsLogOutModal(!isLogOutModal);
                        setIsDropDownAccount(!isDropDownAccount);
                      }}
                      className="block px-4 w-full py-2 text-left text-sm text-red-700 hover:bg-red-200 dark:text-red-600 dark:hover:bg-red-600 dark:hover:text-white "
                      role="menuitem"
                    >
                      {lang.logout}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          !isSidebar && " -translate-x-full"
        } bg-gray-300 border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto  dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li onClick={toggleIsSidebar}>
              <NavLink
                end
                to="/admin"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
              >
                <DashboardIcon height="24px" width="24px" />
                <span className="ms-3">{lang.dashboard}</span>
              </NavLink>
            </li>

            <li onClick={toggleIsSidebar}>
              <NavLink
                end
                to="/admin/accounts"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
              >
                <PersonIcon height="24px" width="24px" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {lang.account}
                </span>
              </NavLink>
            </li>
            <li onClick={toggleIsSidebar}>
              <NavLink
                end
                to="/admin/users"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
              >
                <UsersIcon height="24px" width="24px" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {lang.users}
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  {total}
                </span>
              </NavLink>
            </li>

            <li>
              <button
                onClick={toggleIsLogOutModal}
                className="flex items-center p-2 w-full text-[#EA3323] rounded-lg hover:bg-red-100 dark:hover:bg-red-200"
              >
                <LogOutIcon className="" />
                <span className="ms-3 whitespace-nowrap">{lang.logout}</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <main className="p-4 md:ml-64">
        <div className="mt-14">
          <Outlet />
        </div>
      </main>
      {isLogOutModal && (
        <LogOutModal
          isOpen={isLogOutModal}
          text={lang.areYouSureYouWantToLogOut}
          icon={<LogOutIcon className="mx-auto !w-10 !h-10 mt-10 mb-5" />}
          toggleModal={toggleIsLogOutModal}
        />
      )}
    </Fragment>
  );
};

export default AdminLayoutPage;
