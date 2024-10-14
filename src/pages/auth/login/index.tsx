import { Fragment, useState } from "react";
import LoginImg from "../../../../public/pictures/logo-login-background.png";
import OpenEyeIcon from "../../../../public/icons/open-eye-icon";
import CloseEyeIcon from "../../../../public/icons/close-eye-icon";
import EmailIcon from "../../../../public/icons/email-icon";
import PasswordIcon from "../../../../public/icons/password-icon";

const LoginPage = () => {
  const [isPasswordToogle, setIsPasswordToogle] = useState(false);

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
              <h2 className='text-3xl font-bold text-center'>Kirish</h2>
              <form action='' method='POST' className='flex flex-col'>
                <div className='mb-5'>
                  <label className=' text-sm mb-1' htmlFor='email'>
                    Email
                  </label>
                  <div className='flex items-center gap-2 border-2 rounded border-gray-600 px-2 py-1'>
                    <EmailIcon />
                    <input
                      id='email'
                      className='w-full outline-none h-8'
                      type='text'
                    />
                  </div>
                </div>
                <div className='mb-5'>
                  <label className='text-sm mb-1' htmlFor='password'>
                    Parol
                  </label>
                  <div className='flex items-center gap-2 border-2 rounded-md border-gray-600 px-2 py-1'>
                    <PasswordIcon />
                    <input
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
                </div>
                <button
                  type='submit'
                  className='bg-black rounded-md text-white p-2'>
                  Kirish
                </button>
              </form>
            </div>
            <p className='absolute bottom-[2%] text-xs text-center w-[90%]'>
              Copyright © 2021 of Tashkent University of Information
              Technologies
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LoginPage;
