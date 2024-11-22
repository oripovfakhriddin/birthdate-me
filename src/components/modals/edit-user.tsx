import { Fragment } from "react/jsx-runtime";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/language";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import EditUserInfoFormValues from "../../types/edit-user-info";
import editUserInfoSchema from "../../schema/user-info";
import PersonIcon from "../../assets/icons/person-icon";
import DateIcon from "../../assets/icons/date-icon";
import CloseIcon from "../../assets/icons/close-icon";
import EmailIcon from "../../assets/icons/email-icon";
import EditUserPasswordModal from "./edit-user-password";
import User from "../../types/user";
import request from "../../server";
import { toast } from "react-toastify";

const EditUserModal = ({
  isEditModal,
  user,
  closeEditModal,
  refetch,
}: {
  isEditModal: boolean;

  user: User | null;
  closeEditModal: () => void;
  refetch: () => void;
}) => {
  const { lang } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);
  const [isPasswordEditModal, setIsPasswordEditModal] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EditUserInfoFormValues>({
    resolver: yupResolver(editUserInfoSchema),
  });

  const handleChange = () => {
    setIsChanged(true);
  };

  useEffect(() => {
    if (user !== null) {
      setValue("firstName", user.firstName, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
      setValue("lastName", user.lastName, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
      setValue("email", user.email, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
      setValue("birthDate", user.birthDate, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    }
  }, [user]);

  const closePasswordEditModal = () => {
    setIsPasswordEditModal(false);
  };

  const onSubmit: SubmitHandler<EditUserInfoFormValues> = async (values) => {
    try {
      setLoading(true);
      const { data } = await request.put(
        `api/user/change-user-info/${user?.email}`,
        values
      );
      toast.success(data.message);
      refetch();
      setLoading(false);
    } catch {
      setLoading(false);
      toast.warning(lang.couldnotEditThisUser);
      refetch();
    }
  };

  return (
    <Fragment>
      {/* START edit user Modal*/}
      <div
        id="crud-modal"
        className={`${
          isEditModal ? "flex" : "hidden"
        } overflow-y-auto backdrop-blur overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full md:max-w-3xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {lang.editUser}
              </h3>
              <button
                type="button"
                onClick={closeEditModal}
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
              className="flex p-4 flex-col md:grid md:grid-cols-2 md:gap-5"
            >
              <div className="mb-5">
                <label
                  className="dark:text-white text-sm mb-1"
                  htmlFor="firstName"
                >
                  {lang.firstName}
                </label>
                <div className="flex items-center gap-2 border-2 dark:text-white rounded border-gray-600 dark:border-gray-400 px-2 py-1">
                  <PersonIcon width="32px" height="32px" />
                  <input
                    {...register("firstName")}
                    id="firstName"
                    className="w-full outline-none h-8 dark:text-white dark:bg-gray-700"
                    type="text"
                    onChange={handleChange}
                  />
                </div>
                {errors?.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <label
                  className="dark:text-white text-sm mb-1"
                  htmlFor="lastName"
                >
                  {lang.lastName}
                </label>
                <div className="flex items-center gap-2 border-2 rounded dark:text-white border-gray-600 dark:border-gray-400 px-2 py-1">
                  <PersonIcon width="32px" height="32px" />
                  <input
                    {...register("lastName")}
                    id="lastName"
                    className="w-full outline-none h-8 dark:text-white dark:bg-gray-700"
                    type="text"
                    onChange={handleChange}
                  />
                </div>
                {errors?.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <label
                  className="dark:text-white text-sm mb-1"
                  htmlFor="birthDate"
                >
                  {lang.birthdate}
                </label>
                <div className="flex items-center gap-2 border-2 rounded dark:text-white border-gray-600 dark:border-gray-400 px-2 py-1">
                  <DateIcon />
                  <input
                    {...register("birthDate")}
                    id="birthDate"
                    className="w-full outline-none h-8 dark:text-white dark:bg-gray-700"
                    type="date"
                    onChange={handleChange}
                  />
                </div>
                {errors?.birthDate && (
                  <p className="text-red-500 text-sm">
                    {errors.birthDate.message}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <label className="dark:text-white text-sm mb-1" htmlFor="email">
                  {lang.email}
                </label>
                <div className="flex items-center gap-2 border-2 rounded dark:text-white border-gray-600 dark:border-gray-400 px-2 py-1">
                  <EmailIcon />
                  <input
                    {...register("email")}
                    id="email"
                    className="w-full outline-none h-8 dark:text-white dark:bg-gray-700"
                    type="text"
                    onChange={handleChange}
                  />
                </div>
                {errors?.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsPasswordEditModal(true);
                }}
                className="bg-orange-400 dark:bg-orange-700 rounded-md text-white p-2 mb-4 md:mb-0"
              >
                {lang.changePassword}
              </button>
              {isChanged ? (
                <button
                  type="submit"
                  className="bg-green-400 dark:bg-blue-800 rounded-md text-white p-2 mb-4 md:mb-0"
                >
                  {loading ? lang.waiting : lang.confirmation}
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-red-400 dark:bg-red-800 rounded-md text-white p-2 mb-4 md:mb-0"
                >
                  {lang.cancel}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      {isPasswordEditModal ? (
        <EditUserPasswordModal
          user={user}
          closePasswordEditModal={closePasswordEditModal}
          refetch={refetch}
        />
      ) : null}
    </Fragment>
  );
};

export default EditUserModal;
