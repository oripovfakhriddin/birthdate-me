import { toast } from "react-toastify";
import CloseIcon from "../../assets/icons/close-icon";
import DeleteIcon from "../../assets/icons/delete-icon";
import request from "../../server";
import { useContext } from "react";
import { LanguageContext } from "../../context/language";

const DeleteUserModal = ({
  isDeleteModalOpen,
  selected,
  closeDeleteModal,
  refetch,
}: {
  isDeleteModalOpen: boolean;
  selected: number | string | null;
  closeDeleteModal: () => void;
  refetch: () => void;
}) => {
  const { lang } = useContext(LanguageContext);

  const deleteUser = async () => {
    try {
      const { data } = await request.delete("api/user/delete", {
        params: {
          email: selected,
        },
      });
      toast.success(data.message);
      refetch();
    } catch {
      toast.warning(lang.couldnotDeleteThisUser);
      refetch();
    }
  };

  return (
    <div
      className={`${
        isDeleteModalOpen ? "flex" : "hidden"
      } fixed backdrop-blur top-0 right-0 left-0 z-50 justify-center items-center w-full inset-0  max-h-full`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={() => {
              closeDeleteModal();
            }}
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <CloseIcon height="28px" width="28px" />
            <span className="sr-only">Close delete modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <DeleteIcon className="mx-auto my-5  w-12 h-12 text-red-500 " />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {lang.areYouSureDeleteUser}
            </h3>
            <button
              onClick={() => {
                deleteUser();
              }}
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              {lang.delete}
            </button>
            <button
              type="button"
              onClick={() => {
                closeDeleteModal();
              }}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {lang.cancel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
