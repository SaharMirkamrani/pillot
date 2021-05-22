import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiTimes } from 'react-icons/ti';
import { FiLogIn } from 'react-icons/fi';
import ValidationError from './ValidationError';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginValues, setLoginValues] = useState({ phone: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validateMobilephone = (input) => {
    let mobile = /^\d{11}$/;
    if (mobile.test(input)) {
      setMobileError(false);
    } else {
      setMobileError(true);
    }
  };

  const validatePassword = (pass) => {
    if (pass.length !== 4) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoginValues({ phone: '', password: '' })
  };

  console.log(loginValues)

  return (
    <>
      <button
        className="bg-yellow text-white hover:bg-lightYellow font-semibold text-md px-8 py-2.5 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="flex flex-row items-center justify-between">
          <FiLogIn className="pl-1 text-xl" /> <p className="pb-1">ورود</p>
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative sm:w-1/2 lg:w-4/12 my-6 mx-auto max-w-2xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="w-full max-w-md m-auto bg-white rounded-lg shadow-default p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-primary mb-10 mt-2 text-center">
                      ورود به سایت
                    </h4>
                    <button
                      className="p-1 mb-10 mt-2 mr-auto bg-transparent border-0 text-black opacity-8 float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <TiTimes className="text-gray-500 hover:text-gray-700" />
                    </button>
                  </div>

                  <form onSubmit={handleFormSubmit}>
                    <div>
                      <label htmlFor="email" className="text-sm text-gray-600">
                        شماره موبایل
                      </label>
                      <input
                        onChange={handleInputChange}
                        value={loginValues.phone}
                        name="phone"
                        required
                        type="number"
                        className={`w-full mt-1  p-2 text-primary border border-gray-300 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:ring-2 focus:ring-lightYellow focus:border-transparent`}
                        id="number"
                        onBlurCapture={() =>
                          validateMobilephone(loginValues.phone)
                        }
                      />
                      {mobileError && (
                        <ValidationError
                          text={'شماره موبایل باید 11 رقم باشد.'}
                        />
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600"
                      >
                        رمز عبور
                      </label>
                      <input
                        onChange={handleInputChange}
                        value={loginValues.password}
                        required
                        name="password"
                        type="password"
                        className={`w-full mt-1 p-2 text-primary border border-gray-300 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:ring-2 focus:ring-lightYellow focus:border-transparent`}
                        id="password"
                        onBlurCapture={() =>
                          validatePassword(loginValues.password)
                        }
                      />
                      {passwordError && (
                        <ValidationError
                          text={'پسورد باید 4 رقم باشد.'}
                        />
                      )}
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
                            <p className="text-xs text-indigo-500 inline">
                              بازیابی رمز عبور
                            </p>
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
                            <p className="text-xs text-indigo-500 inline">
                              ثبت نام
                            </p>
                          </button>
                        </Link>
                      </p>
                    </div>

                    <div className="flex justify-end items-center mt-1">
                      <button
                        className="bg-yellow text-white hover:bg-lightYellow font-semibold text-md px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={() => setShowModal(false)}
                      >
                        ورود
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Login;
