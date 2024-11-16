import { Fragment } from "react/jsx-runtime";
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/language";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import EditUserInfoFormValues from "../../types/edit-user-info";
import editUserInfoSchema from "../../schema/user-info";
import PersonIcon from "../../assets/icons/person-icon";
import DateIcon from "../../assets/icons/date-icon";
import CloseIcon from "../../assets/icons/close-icon";
import EmailIcon from "../../assets/icons/email-icon";

const EditUserModal = ({
  isEditModal,
  selected,
  closeEditModal,
}: {
  isEditModal: boolean;
  selected: string | null;
  closeEditModal: () => void;
}) => {
  const { lang } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUserInfoFormValues>({
    resolver: yupResolver(editUserInfoSchema),
  });

  const onSubmit: SubmitHandler<EditUserInfoFormValues> = async (values) => {
    console.log(values, selected);
    setLoading(false);
  };

  return (
    <Fragment>
      {/* START edit user Modal*/}
      <div
        id="crud-modal"
        aria-hidden="true"
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
                  />
                </div>
                {errors?.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-black dark:bg-blue-800 rounded-md text-white p-2 col-span-2 mb-4 md:mb-0"
              >
                {loading ? lang.waiting : lang.confirmation}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditUserModal;
