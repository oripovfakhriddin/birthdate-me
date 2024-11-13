import { Fragment, useContext, useState } from "react";
import LoginImg from "/pictures/logo-login-background.png";
import OpenEyeIcon from "../../../assets/icons/open-eye-icon";
import CloseEyeIcon from "../../../assets/icons/close-eye-icon";
import EmailIcon from "../../../assets/icons/email-icon";
import PasswordIcon from "../../../assets/icons/password-icon";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../../schema/login";
import LoginFormValues from "../../../types/login";
import Cookies from "js-cookie";
import User from "../../../types/user";
import request from "../../../server";
import axios, { AxiosError } from "axios";
import { ENDPOINT, TOKEN, USER } from "../../../constants";
import { toast } from "react-toastify";
import { LanguageContext } from "../../../context/language";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useContext(AuthContext);
  const { lang } = useContext(LanguageContext);

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
      <section className='h-screen'>
        <div className='flex items-center justify-between h-full w-full'>
          <div className='md:flex items-center hidden  justify-center relative h-full w-1/2 bg-black'>
            <img className='w-3/4' src={LoginImg} alt='img for login' />
          </div>
          <div className='flex items-center justify-center relative  md:w-1/2 w-full h-full p-10'>
            <div className='md:w-[330px] '>
              <div className='flex justify-center items-center flex-col mb-6'>
                <h1 className='text-xs font-semibold text-center mb-3 w-72'>
                  {lang.tuit}
                </h1>
                <div className=' w-20 '>
                  <img
                    src='https://lms.tuit.uz/assets/images/logo-md.png'
                    alt='Logo of tuit'
                  />
                </div>
              </div>
              <h2 className='text-3xl font-bold text-center'>Kirish</h2>
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                <div className='mb-5'>
                  <label className=' text-sm mb-1' htmlFor='email'>
                    {lang.email}
                  </label>
                  <div className='flex items-center gap-2 border-2 rounded border-gray-600 px-2 py-1'>
                    <EmailIcon />
                    <input
                      id='email'
                      {...register("email")}
                      className='w-full outline-none h-8'
                      type='text'
                    />
                    {errors?.email && (
                      <p className='text-red-500 text-sm'>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className='mb-5'>
                  <label className='text-sm mb-1' htmlFor='password'>
                    {lang.password}
                  </label>
                  <div className='flex items-center gap-2 border-2 rounded-md border-gray-600 px-2 py-1'>
                    <PasswordIcon />
                    <input
                      id='password'
                      {...register("password")}
                      className='w-full outline-none h-8'
                      type={isPasswordToogle ? "text" : "password"}
                    />
                    {errors?.password && (
                      <p className='text-red-500 text-sm'>
                        {errors.password.message}
                      </p>
                    )}
                    <button
                      className='outline-none p-1 rounded-md transition-all hover:bg-slate-200'
                      onClick={(e) => {
                        e.preventDefault();
                        setIsPasswordToogle(!isPasswordToogle);
                      }}>
                      {isPasswordToogle ? <OpenEyeIcon /> : <CloseEyeIcon />}
                    </button>
                  </div>
                </div>
                <button
                  type='submit'
                  className='bg-black rounded-md text-white p-2 mb-4'>
                  {loading ? `${lang.waiting}...` : lang.login}
                </button>
                <div className='flex justify-between'>
                  <p>{lang.dontHaveAccount}</p>
                  <Link to='/register' className='text-blue-500'>
                    {lang.registration}
                  </Link>
                </div>
              </form>
            </div>
            <p className='absolute bottom-[2%] text-xs text-center w-[90%]'>
              Copyright © 2024 of Juniors Team
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LoginPage;
