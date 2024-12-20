import { useContext, useEffect, useState, Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/auth";
import { LanguageContext } from "../../../context/language";
import PersonIcon from "../../../assets/icons/person-icon";
import EditUserInfoFormValues from "../../../types/edit-user-info";
import editUserInfoSchema from "../../../schema/user-info";
import request from "../../../server";

const AdminAccountPage = () => {
  const { user } = useContext(AuthContext);
  const { lang } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EditUserInfoFormValues>({
    resolver: yupResolver(editUserInfoSchema),
  });

  const onSubmit: SubmitHandler<EditUserInfoFormValues> = async (values) => {
    try {
      setLoading(true);
      const { data } = await request.put(
        `api/user/change-user-info/${user?.email}`,
        values
      );
      toast.success(data.message);

      setLoading(false);
    } catch {
      setLoading(false);
      toast.warning(lang.couldnotEditThisUser);
    }
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

  return (
    <Fragment>
      <section className="py-10 my-auto dark:bg-gray-900">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            <div className="">
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl  font-bold mb-2 dark:text-white">
                {lang.account}
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full h-56 rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
                  <div
                    className={`mx-auto flex justify-center w-56 h-full bg-blue-300/20 rounded-full bg-[url()] bg-cover bg-center bg-no-repeat`}
                  >
                    <PersonIcon width="224px" height="224px" />
                  </div>
                </div>

                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full  mb-4 mt-6">
                    <label htmlFor="" className="mb-2 dark:text-gray-300">
                      {lang.firstName}
                    </label>
                    <input
                      {...register("firstName")}
                      type="text"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="First Name"
                    />
                    {errors?.firstName && (
                      <p className="text-red-500 text-sm">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full  mb-4 lg:mt-6">
                    <label htmlFor="" className=" dark:text-gray-300">
                      {lang.lastName}
                    </label>
                    <input
                      {...register("lastName")}
                      type="text"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Last Name"
                    />
                    {errors?.lastName && (
                      <p className="text-red-500 text-sm">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full">
                    <h3 className="dark:text-gray-300 mb-2">{lang.email}</h3>
                    <input
                      {...register("email")}
                      type="email"
                      className="text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    />
                    {errors?.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <h3 className="dark:text-gray-300 mb-2">
                      {lang.birthdate}
                    </h3>
                    <input
                      {...register("birthDate")}
                      type="date"
                      className="text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    />
                    {errors?.birthDate && (
                      <p className="text-red-500 text-sm">
                        {errors.birthDate.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                  <button type="submit" className="w-full p-4">
                    {loading ? lang.waiting : lang.confirmation}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AdminAccountPage;
