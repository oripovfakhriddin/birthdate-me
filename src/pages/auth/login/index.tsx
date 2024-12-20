import { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import LoginImg from "/pictures/logo-login-background.png";
import OpenEyeIcon from "../../../assets/icons/open-eye-icon";
import CloseEyeIcon from "../../../assets/icons/close-eye-icon";
import EmailIcon from "../../../assets/icons/email-icon";
import PasswordIcon from "../../../assets/icons/password-icon";
import { AuthContext } from "../../../context/auth";
import loginSchema from "../../../schema/login";
import LoginFormValues from "../../../types/login";
import User from "../../../types/user";
import request from "../../../server";
import { ENDPOINT, TOKEN, USER } from "../../../constants";
import { LanguageContext } from "../../../context/language";
import ThemeToggle from "../../../components/theme-toggle";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useContext(AuthContext);
  const { lang, langType, changeLanguage } = useContext(LanguageContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: yupResolver(loginSchema) });

  interface LoginDataTypes {
    user: User;
    token: string;
    message: string;
    success: boolean;
  }

  interface ErrorResponse {
    message: string;
  }

  const [isPasswordToogle, setIsPasswordToogle] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<LoginFormValues> = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post<LoginDataTypes>(
        `${ENDPOINT}api/auth/login`,
        values
      );

      request.defaults.headers.Authorization = `Bearer ${data?.token}`;

      Cookies.set(TOKEN, data?.token);
      localStorage.setItem(USER, JSON.stringify(data.user));
      setIsAuthenticated(true);
      setUser(data.user);
      if (data?.user?.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/");
      }
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
      <section className="h-screen relative">
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
          <div className="md:flex items-center hidden  justify-center relative h-full w-1/2 bg-black">
            <img className="w-3/4" src={LoginImg} alt="img for login" />
          </div>
          <div className="flex items-center justify-center relative  md:w-1/2 w-full h-full p-10">
            <div className="md:w-[330px] ">
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
              <h2 className="text-3xl font-bold text-center dark:text-white">
                {lang.login}
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <div className="mb-5">
                  <label
                    className=" text-sm mb-1 dark:text-white"
                    htmlFor="email"
                  >
                    {lang.email}
                  </label>
                  <div className="flex dark:text-white items-center gap-2 border-2 rounded border-gray-600 dark:border-gray-400 px-2 py-1">
                    <EmailIcon />
                    <input
                      id="email"
                      {...register("email")}
                      className="w-full outline-none  h-8 dark:text-white  dark:bg-gray-800"
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
                    className="text-sm mb-1 dark:text-white"
                    htmlFor="password"
                  >
                    {lang.password}
                  </label>
                  <div className="flex items-center gap-2 dark:text-white border-2 rounded-md border-gray-600 dark:border-gray-400 px-2 py-1">
                    <PasswordIcon />
                    <input
                      id="password"
                      {...register("password")}
                      className="w-full outline-none h-8 dark:text-white  dark:bg-gray-800"
                      type={isPasswordToogle ? "text" : "password"}
                    />

                    <button
                      className="outline-none p-1 rounded-md transition-all dark:text-white hover:bg-slate-200"
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
                <button
                  type="submit"
                  className="bg-black rounded-md text-white p-2 mb-4 dark:bg-blue-800"
                >
                  {loading ? `${lang.waiting}...` : lang.login}
                </button>
                <div className="flex justify-between dark:text-white">
                  <p>{lang.dontHaveAccount}</p>
                  <Link to="/register" className="text-blue-500">
                    {lang.registration}
                  </Link>
                </div>
              </form>
            </div>
            <p className="absolute bottom-[2%] text-xs text-center w-[90%] dark:text-white">
              Copyright © 2024 of Juniors Team
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LoginPage;
