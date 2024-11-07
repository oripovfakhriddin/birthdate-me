import Cookies from "js-cookie";
import CloseIcon from "../assets/icons/close-icon";
import { TOKEN, USER } from "../constants";
import { AuthContext } from "../context/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const LogOutModal = ({
  isOpen,
  text,
  icon,
  toggleModal,
}: {
  isOpen: boolean;
  text: string;
  icon: JSX.Element;
  toggleModal: () => void;
}) => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOutFunction = () => {
    Cookies.remove(TOKEN);
    localStorage.removeItem(USER);
    setIsAuthenticated(false);
    navigate("/login");
    toggleModal();
  };

  return (
    <div
      id='popup-modal'
      className={`${
        isOpen ? "flex" : "hidden"
      } backdrop-blur overflow-y-auto overflow-x-hidden fixed  top-0 right-0 left-0  z-50 justify-center items-center w-full md:inset-0 h-full max-h-full`}>
      <div className='relative p-4 w-full max-w-md max-h-full'>
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <button
            type='button'
            className='absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
            data-modal-hide='popup-modal'
            onClick={() => {
              toggleModal();
            }}>
            <CloseIcon />
            <span className='sr-only'>Close modal</span>
          </button>
          <div className='p-4 md:p-5 text-center'>
            {icon}
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              {text}
            </h3>
            <button
              type='button'
              onClick={logOutFunction}
              className='text-white bg-red-600 hover:bg-red-800  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center'>
              Ha albatta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
