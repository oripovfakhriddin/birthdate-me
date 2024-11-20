import { Fragment, useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import OpenEyeIcon from "../../../assets/icons/open-eye-icon";
import CloseEyeIcon from "../../../assets/icons/close-eye-icon";
import EmailIcon from "../../../assets/icons/email-icon";
import PasswordIcon from "../../../assets/icons/password-icon";
import PersonIcon from "../../../assets/icons/person-icon";
import DateIcon from "../../../assets/icons/date-icon";
import registerSchema from "../../../schema/register";
import RegisterFormValues from "../../../types/register";
import { ENDPOINT, TOKEN, USER } from "../../../constants";
import { AuthContext } from "../../../context/auth";
import { LanguageContext } from "../../../context/language";
import ThemeToggle from "../../../components/theme-toggle";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isPasswordToogle, setIsPasswordToogle] = useState(false);
  const [isPrePasswordToogle, setIsPrePasswordToogle] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setIsAuthenticated, setUser } = useContext(AuthContext);
  const { langType, changeLanguage, lang } = useContext(LanguageContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
  });

  interface ErrorResponse {
    message: string;
  }

  const onSubmit: SubmitHandler<RegisterFormValues> = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${ENDPOINT}api/auth/registration`,
        values
      );
      Cookies.set(TOKEN, data.token);
      localStorage.setItem(USER, JSON.stringify(values));
      toast.success(data.message);
      setIsAuthenticated(true);
      setUser(data);
      navigate("/login");
    } catch (err) {
      const error = err as AxiosError;
      const message = error.response?.data as ErrorResponse;
      toast.error(message?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <section className="relative">
        <div className="absolute flex items-center gap-2 z-50 end-2 top-2">
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
        </div>
        <div className="flex items-center justify-between h-full w-full">
          <div className="flex items-center justify-center relative   w-full h-full p-10">
            <div>
              <div className="flex justify-center items-center flex-col mb-6">
                <h1 className="text-xs font-semibold text-center mb-3 w-72 dark:text-white">
                  {lang.tuit}
                </h1>
                <div className=" w-20 ">
                  <img
                    src="https://lms.tuit.uz/assets/images/logo-md.png"
                    alt="Logo of tuit"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center mb-5 dark:text-white">
                {lang.registration}
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col md:grid md:grid-cols-2 md:gap-5"
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
                      className="w-full outline-none h-8 dark:text-white dark:bg-gray-800"
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
                      className="w-full outline-none h-8 dark:text-white dark:bg-gray-800"
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
                      className="w-full outline-none h-8 dark:text-white dark:bg-gray-800"
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
                  <label
                    className="dark:text-white text-sm mb-1"
                    htmlFor="email"
                  >
                    {lang.email}
                  </label>
                  <div className="flex items-center gap-2 border-2 rounded dark:text-white border-gray-600 dark:border-gray-400 px-2 py-1">
                    <EmailIcon />
                    <input
                      {...register("email")}
                      id="email"
                      className="w-full outline-none h-8 dark:text-white dark:bg-gray-800"
                      type="text"
                    />
                  </div>
                  {errors?.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
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
                      {...register("password")}
                      id="password"
                      className="w-full outline-none h-8 dark:text-white dark:bg-gray-800"
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
                  {errors?.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
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
                      {...register("prePassword")}
                      id="prePassword"
                      className="w-full outline-none h-8 dark:text-white dark:bg-gray-800"
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
                  {errors?.prePassword && (
                    <p className="text-red-500 text-sm">
                      {errors.prePassword.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-black dark:bg-blue-800 rounded-md text-white p-2 col-span-2 mb-4 md:mb-0"
                >
                  {loading ? lang.waiting : lang.registration}
                </button>
                <div className="flex justify-between col-span-2 dark:text-white">
                  <p>{lang.doYouHaveAccount}</p>
                  <Link to="/login" className="text-blue-500">
                    {lang.login}
                  </Link>
                </div>
              </form>
            </div>
            <p className="absolute md:bottom-[-10%] bottom-[0] text-xs text-center w-[90%] dark:text-white">
              Copyright © 2024 of Juniors Team
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default RegisterPage;
