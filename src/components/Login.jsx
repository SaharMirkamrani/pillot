import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TiTimes } from 'react-icons/ti';
import { FiLogIn } from 'react-icons/fi';
import ValidationError from './ValidationError';
import axios from 'axios';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginValues, setLoginValues] = useState({ phone: '' });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setLoginValues(prev => {
      return { ...prev, [name]: value };
    });
  };

  const validateMobilephone = input => {
    let mobile = /^09{1}[\d]{9}$/;
    if (mobile.test(input)) {
      setMobileError(false);
      return input;
    } else {
      setMobileError(true);
      return false;
    }
  };

  const validatePassword = pass => {
    if (pass.length !== 4) {
      setPasswordError(true);
      return false;
    } else {
      setPasswordError(false);
      return pass;
    }
  };

  const handleTimer = () => {
    const timerId = setTimeout(() => 'hey', 1000);
  };

  // console.log(handleTimer());

  const handleFormSubmit = e => {
    e.preventDefault();
    validateMobilephone(loginValues.phone);
    // validatePassword(loginValues.password);
    if (validateMobilephone(loginValues.phone) === false) return;
    // if (validatePassword(loginValues.password) === false) return;
    // setLoginValues({ phone: '' });

    axios
      .post(
        'http://site.pillot.ir/admin/Customers/API/_startloginregister',
        {
          mobile: loginValues.phone
        },
        {
          headers: {
            token: 'test',
            'Access-Control-Allow-Origin': '*'
            // 'Access-Control-Allow-Headers': '*'
          }
        }
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    setLoginValues({ phone: '' });
  };

  return (
    <>
      <button
        className="bg-lightYellow text-white hover:bg-yellow font-semibold text-md px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-200"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="flex flex-row items-center justify-between">
          <FiLogIn className="pl-1 text-2xl" /> <p className="pb-1">ورود</p>
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative sm:w-1/2 lg:w-4/12 my-6 mx-auto max-w-2xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="w-full max-w-md m-auto bg-white rounded-lg shadow-default p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-primary mb-10 mt-2 text-center">ورود به سایت</h4>
                    <button
                      className="p-1 mb-10 mt-2 mr-auto bg-transparent border-0 text-black float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <TiTimes className="text-gray-500 hover:text-gray-700" />
                    </button>
                  </div>

                  <form onSubmit={handleFormSubmit}>
                    <div>
                      <label htmlFor="number" className="text-sm text-gray-600">
                        شماره موبایل
                      </label>
                      <input
                        onChange={handleInputChange}
                        value={loginValues.phone}
                        name="phone"
                        required
                        type="text"
                        className={`w-full mt-1  p-2 text-primary border border-gray-300 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:ring-2 focus:ring-lightYellow focus:border-transparent`}
                        id="number"
                        // onBlurCapture={() =>
                        //   validateMobilephone(loginValues.phone)
                        // }
                      />
                      {mobileError && <ValidationError text={'لطفا شماره موبایل صحیح را وارد کنید.'} />}
                    </div>
                    {/* <div className="flex justify-around items-center mt-1">
                      {!token && (
                        <button
                          className={`mx-1 mb-2 bg-yellow text-white hover:bg-lightYellow font-semibold text-sm px-6 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150`}
                          type="submit"
                          onClick={handleFormSubmit}
                        >
                        کد تائید
                        </button>
                      )}

                      <div>
                        <label
                          htmlFor="password"
                          className="text-sm text-gray-600"
                        >
                          {token ? 'رمز عبور' : 'کد تائید'}
                        </label>
                        <input
                          onChange={handleInputChange}
                          value={loginValues.password}
                          required
                          name="password"
                          type="password"
                          className={`w-full m-1 p-2 text-primary border border-gray-300 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:ring-2 focus:ring-lightYellow focus:border-transparent`}
                          id="password"
                          onBlurCapture={() =>
                            validatePassword(loginValues.password)
                          }
                        />
                        {passwordError && (
                          <ValidationError
                            text={'لطفا رمز عبور صحیح وارد کنید.'}
                          />
                        )}
                      </div>
                    </div> */}

                    {/* <div className="flex justify-start flex-row items-center mt-2">
                      <p className="text-sm text-gray-600">
                        {' '}
                        ارسال مجدد کد تائید در 
                      </p>
                    </div> */}

                    <div className="flex justify-end items-center mt-1">
                      <button
                        className={`
                          // loginValues.password.length !== 4 &&
                          // 'opacity-60 cursor-not-allowed'
                        mt-3 bg-yellow text-white hover:bg-lightYellow font-semibold text-sm px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                        type="submit"
                        onClick={handleFormSubmit}
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
