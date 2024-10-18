import { Fragment, useState } from "react";
import OpenEyeIcon from "../../../../public/icons/open-eye-icon";
import CloseEyeIcon from "../../../../public/icons/close-eye-icon";
import EmailIcon from "../../../../public/icons/email-icon";
import PasswordIcon from "../../../../public/icons/password-icon";
import PersonIcon from "../../../../public/icons/person-icon";
import DateIcon from "../../../../public/icons/date-icon";

const RegisterPage = () => {
  const [isPasswordToogle, setIsPasswordToogle] = useState(false);
  const [isPrePasswordToogle, setIsPrePasswordToogle] = useState(false);

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
              <form className='flex flex-col md:grid md:grid-cols-2 md:gap-5'>
                <div className='mb-5'>
                  <label className=' text-sm mb-1' htmlFor='firstName'>
                    Ism
                  </label>
                  <div className='flex items-center gap-2 border-2 rounded border-gray-600 px-2 py-1'>
                    <PersonIcon />
                    <input
                      id='firstName'
                      className='w-full outline-none h-8'
                      type='text'
                    />
                  </div>
                </div>
                <div className='mb-5'>
                  <label className=' text-sm mb-1' htmlFor='lastName'>
                    Familiya
                  </label>
                  <div className='flex items-center gap-2 border-2 rounded border-gray-600 px-2 py-1'>
                    <PersonIcon />
                    <input
                      id='lastName'
                      className='w-full outline-none h-8'
                      type='text'
                    />
                  </div>
                </div>
                <div className='mb-5'>
                  <label className=' text-sm mb-1' htmlFor='birthDate'>
                    Tug'ilgan kun
                  </label>
                  <div className='flex items-center gap-2 border-2 rounded border-gray-600 px-2 py-1'>
                    <DateIcon />
                    <input
                      id='birthDate'
                      className='w-full outline-none h-8'
                      type='date'
                    />
                  </div>
                </div>
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
                <div className='mb-5'>
                  <label className='text-sm mb-1' htmlFor='prePassword'>
                    Parolni tasdiqlash
                  </label>
                  <div className='flex items-center gap-2 border-2 rounded-md border-gray-600 px-2 py-1'>
                    <PasswordIcon />
                    <input
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
                </div>
                <button
                  type='submit'
                  className='bg-black rounded-md text-white p-2 col-span-2'>
                  Ro'yhatdan o'tish
                </button>
              </form>
            </div>
            <p className='absolute md:bottom-[-18%]  text-xs text-center w-[90%]'>
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
