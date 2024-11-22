import { Fragment, useContext, useState } from "react";
import { LanguageContext } from "../../context/language";
import CloseIcon from "../../assets/icons/close-icon";
import OpenEyeIcon from "../../assets/icons/open-eye-icon";
import CloseEyeIcon from "../../assets/icons/close-eye-icon";
import PasswordIcon from "../../assets/icons/password-icon";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import editUserPasswordSchema from "../../schema/user-password";
import EditUserPasswordFormValues from "../../types/edit-user-password";
import request from "../../server";
import { toast } from "react-toastify";
import User from "../../types/user";

const EditUserPasswordModal = ({
  user,
  refetch,
  closePasswordEditModal,
}: {
  user: User | null;
  refetch: () => void;
  closePasswordEditModal: () => void;
}) => {
  const { lang } = useContext(LanguageContext);
  const [isPasswordToogle, setIsPasswordToogle] = useState(false);
  const [isPrePasswordToogle, setIsPrePasswordToogle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(editUserPasswordSchema) });

  const onSubmit: SubmitHandler<EditUserPasswordFormValues> = async ({
    oldPassword,
    newPassword,
  }) => {
    try {
      setIsLoading(true);
      const { data } = await request.patch("api/user/change/password", {
        params: {
          oldPassword,
          newPassword,
          email: user?.email,
        },
      });
      toast.success(data.message);
      refetch();
    } catch {
      setIsLoading(false);
      toast.warning(lang.couldnotPasswordEditThisUser);
      refetch();
    }
  };

  return (
    <Fragment>
      {/* START edit user Modal*/}
      <div
        id="crud-modal"
        className={`flex overflow-y-auto backdrop-blur overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full md:max-w-3xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {lang.changePassword}
              </h3>
              <button
                type="button"
                onClick={() => {
                  closePasswordEditModal();
                }}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <CloseIcon width="28px" height="28px" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col md:grid md:grid-cols-2 md:gap-5 p-5"
            >
              <div className="mb-5">
                <label
                  className="dark:text-white text-sm mb-1"
                  htmlFor="password"
                >
                  {lang.password}
                </label>
                <div className="flex items-center gap-2 border-2 rounded-md dark:text-white border-gray-600 dark:border-gray-400 px-2 py-1">
                  <PasswordIcon />
                  <input
                    {...register("oldPassword")}
                    id="password"
                    className="w-full outline-none h-8 dark:text-white dark:bg-gray-700"
                    type={isPasswordToogle ? "text" : "password"}
                  />

                  <button
                    className="outline-none p-1 rounded-md transition-all dark:text-white hover:bg-slate-200 dark:hover:bg-gray-600"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsPasswordToogle(!isPasswordToogle);
                    }}
                  >
                    {isPasswordToogle ? <OpenEyeIcon /> : <CloseEyeIcon />}
                  </button>
                </div>
                {errors?.oldPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.oldPassword.message}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <label
                  className="dark:text-white text-sm mb-1"
                  htmlFor="prePassword"
                >
                  {lang.confirmPassword}
                </label>
                <div className="flex items-center gap-2 border-2 rounded-md dark:text-white border-gray-600 dark:border-gray-400 px-2 py-1">
                  <PasswordIcon />
                  <input
                    {...register("newPassword")}
                    id="prePassword"
                    className="w-full outline-none h-8 dark:text-white dark:bg-gray-700"
                    type={isPrePasswordToogle ? "text" : "password"}
                  />

                  <button
                    className="outline-none p-1 rounded-md transition-all dark:text-white hover:bg-slate-200 dark:hover:bg-gray-600"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsPrePasswordToogle(!isPrePasswordToogle);
                    }}
                  >
                    {isPrePasswordToogle ? <OpenEyeIcon /> : <CloseEyeIcon />}
                  </button>
                </div>
                {errors?.newPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.newPassword.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-black dark:bg-blue-800 rounded-md text-white p-2 col-span-2 mb-4 md:mb-0"
              >
                {isLoading ? lang.waiting : lang.confirmation}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditUserPasswordModal;
