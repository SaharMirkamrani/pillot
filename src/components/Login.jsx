import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ setShowModal }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    console.log(email, password);
  };
  return (
    <div className="w-full max-w-md m-auto bg-white rounded-lg shadow-default py-6 px-6">
      <div className="flex items-center justify-between">
        <h4 className="text-md font-semibold text-primary mb-10 mt-2 text-center">
          ورود به سایت
        </h4>
        <button
          className="p-1 mb-10 mt-2 mr-auto bg-transparent border-0 text-black opacity-8 float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
          onClick={() => setShowModal(false)}
        >
          <span className="bg-transparent text-gray-700 h-6 w-6 text-xl block outline-none ">
            x
          </span>
        </button>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email" className="text-sm text-gray-600">
            نام کاربری
          </label>
          <input
            type="email"
            className={`w-full mt-1  p-2 text-primary border border-gray-300 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:ring-2 focus:ring-lightYellow focus:border-transparent`}
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm text-gray-600">
            رمز عبور
          </label>
          <input
            type="password"
            className={`w-full mt-1 p-2 text-primary border border-gray-300 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:ring-2 focus:ring-lightYellow focus:border-transparent`}
            id="password"
          />
        </div>
        <div className="flex justify-start flex-row items-center mt-2">
          <p className="text-xs text-gray-700">
            {' '}
            رمز عبور خود را فراموش کرده اید؟{' '}
            <Link to="/resetPass">

            <button
                className="bg-transparent border-0 leading-none font-medium outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
								<p className="text-xs text-indigo-500 inline">بازیابی رمز عبور</p>
                
              </button>
            </Link>
          </p>
        </div>

        <div className="flex justify-start flex-row items-center mt-2">
          <p className="text-xs text-gray-700">
            {' '}
            حساب کاربری ندارید؟{' '}
            <Link to="/signup">
              <button
                className="bg-transparent border-0 leading-none font-medium outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
								<p className="text-xs text-indigo-500 inline">ثبت نام</p>
                
              </button>
            </Link>
          </p>
        </div>

        <div className="flex justify-end items-center mt-1">
          <button
            className="bg-yellow text-white hover:bg-lightYellow font-semibold text-md px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(false)}
          >
            ورود
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
