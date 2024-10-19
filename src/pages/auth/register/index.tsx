import { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OpenEyeIcon from "../../../assets/icons/open-eye-icon";
import CloseEyeIcon from "../../../assets/icons/close-eye-icon";
import EmailIcon from "../../../assets/icons/email-icon";
import PasswordIcon from "../../../assets/icons/password-icon";
import PersonIcon from "../../../assets/icons/person-icon";
import DateIcon from "../../../assets/icons/date-icon";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../../../schema/register";
import RegisterFormValues from "../../../types/register";
import Cookies from "js-cookie";
import { ENDPOINT, TOKEN, USER } from "../../../constants";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/auth";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isPasswordToogle, setIsPasswordToogle] = useState(false);
  const [isPrePasswordToogle, setIsPrePasswordToogle] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setIsAuthenticated, setUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
  });

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
      toast.error("Kiritilgan ma'lumotlaringizni tekshiring!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <section>
        <div className='flex items-center justify-between h-full w-full'>
          <div className='flex items-center justify-center relative   w-full h-full p-10'>
            <div>
              <div className='flex justify-center items-center flex-col mb-6'>
                <h1 className='text-xs font-semibold text-center mb-3 w-72'>
                  MUHAMMAD AL-XORAZMIY NOMIDAGI TOSHKENT AXBOROT TEXNOLOGIYALARI
                  UNIVERSITETI
                </h1>
                <div className=' w-20 '>
                  <img
                    src='https://lms.tuit.uz/assets/images/logo-md.png'
                    alt='Logo of tuit'
                  />
                </div>
              </div>
              <h2 className='text-3xl font-bold text-center mb-5'>
                Ro'yhatdan o'tish
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col md:grid md:grid-cols-2 md:gap-5'>
                <div className='mb-5'>
                  <label className=' text-sm mb-1' htmlFor='firstName'>
                    Ism
                  </label>
                  <div className='flex items-center gap-2 border-2 rounded border-gray-600 px-2 py-1'>
                    <PersonIcon />
                    <input
                      {...register("firstName")}
                      id='firstName'
                      className='w-full outline-none h-8'
                      type='text'
                    />
                  </div>
                  {errors?.firstName && (
                    <p className='text-red-500 text-sm'>
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className='mb-5'>
                  <label className=' text-sm mb-1' htmlFor='lastName'>
                    Familiya
                  </label>
                  <div className='flex items-center gap-2 border-2 rounded border-gray-600 px-2 py-1'>
                    <PersonIcon />
                    <input
                      {...register("lastName")}
                      id='lastName'
                      className='w-full outline-none h-8'
                      type='text'
                    />
                  </div>
                  {errors?.lastName && (
                    <p className='text-red-500 text-sm'>
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
                <div className='mb-5'>
                  <label className=' text-sm mb-1' htmlFor='birthDate'>
                    Tug'ilgan kun
                  </label>
                  <div className='flex items-center gap-2 border-2 rounded border-gray-600 px-2 py-1'>
                    <DateIcon />
                    <input
                      {...register("birthDate")}
                      id='birthDate'
                      className='w-full outline-none h-8'
                      type='date'
                    />
                  </div>
                  {errors?.birthDate && (
                    <p className='text-red-500 text-sm'>
                      {errors.birthDate.message}
                    </p>
                  )}
                </div>
                <div className='mb-5'>
                  <label className=' text-sm mb-1' htmlFor='email'>
                    Email
                  </label>
                  <div className='flex items-center gap-2 border-2 rounded border-gray-600 px-2 py-1'>
                    <EmailIcon />
                    <input
                      {...register("email")}
                      id='email'
                      className='w-full outline-none h-8'
                      type='text'
                    />
                  </div>
                  {errors?.email && (
                    <p className='text-red-500 text-sm'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className='mb-5'>
                  <label className='text-sm mb-1' htmlFor='password'>
                    Parol
                  </label>
                  <div className='flex items-center gap-2 border-2 rounded-md border-gray-600 px-2 py-1'>
                    <PasswordIcon />
                    <input
                      {...register("password")}
                      id='password'
                      className='w-full outline-none h-8'
                      type={isPasswordToogle ? "text" : "password"}
                    />

                    <button
                      className='outline-none p-1 rounded-md transition-all hover:bg-slate-200'
                      onClick={(e) => {
                        e.preventDefault();
                        setIsPasswordToogle(!isPasswordToogle);
                      }}>
                      {isPasswordToogle ? <OpenEyeIcon /> : <CloseEyeIcon />}
                    </button>
                  </div>
                  {errors?.password && (
                    <p className='text-red-500 text-sm'>
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className='mb-5'>
                  <label className='text-sm mb-1' htmlFor='prePassword'>
                    Parolni tasdiqlash
                  </label>
                  <div className='flex items-center gap-2 border-2 rounded-md border-gray-600 px-2 py-1'>
                    <PasswordIcon />
                    <input
                      {...register("prePassword")}
                      id='prePassword'
                      className='w-full outline-none h-8'
                      type={isPrePasswordToogle ? "text" : "password"}
                    />

                    <button
                      className='outline-none p-1 rounded-md transition-all hover:bg-slate-200'
                      onClick={(e) => {
                        e.preventDefault();
                        setIsPrePasswordToogle(!isPrePasswordToogle);
                      }}>
                      {isPrePasswordToogle ? <OpenEyeIcon /> : <CloseEyeIcon />}
                    </button>
                  </div>
                  {errors?.prePassword && (
                    <p className='text-red-500 text-sm'>
                      {errors.prePassword.message}
                    </p>
                  )}
                </div>
                <button
                  type='submit'
                  className='bg-black rounded-md text-white p-2 col-span-2 mb-4 md:mb-0'>
                  {loading ? "Kutilmoqda" : "Ro'yhatdan o'tish"}
                </button>
                <div className='flex justify-between col-span-2'>
                  <p>Akauntingiz bormi?</p>
                  <Link to='/register' className='text-blue-500'>
                    Kirish
                  </Link>
                </div>
              </form>
            </div>
            <p className='absolute md:bottom-[-10%] bottom-[0] text-xs text-center w-[90%]'>
              Copyright © 2021 of Tashkent University of Information
              Technologies
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default RegisterPage;
