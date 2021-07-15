import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { TiTimes } from 'react-icons/ti';
import { FiLogIn } from 'react-icons/fi';
import ValidationError from './ValidationError';
import axios from 'axios';
import Loader from './LoginLoader';

const codeValidateUrl = 'http://site.pillot.ir/admin/Customers/API/_codeValidate';
const startLoaginReg = 'http://site.pillot.ir/admin/Customers/API/_startLoginRegister';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [phone, setPhone] = useState('');
  const [seconds, setSeconds] = useState(30);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  const handleCodeChange = e => {
    setCode(e.target.value);
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

  const handleCountDown = useCallback(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(0);
    }
  }, [seconds]);

  useEffect(() => {
    if (isCodeSent) {
      handleCountDown();
    }
  }, [handleCountDown, isCodeSent]);

  const handleFormSubmitStep1 = e => {
    e.preventDefault();
    console.log(isCodeSent);
    validateMobilephone(phone);
    if (validateMobilephone(phone) === false) return;
    setLoading(true);
    axios
      .post(
        startLoaginReg,
        {
          mobile: phone
        },
        {
          headers: {
            token: 'test'
          }
        }
      )
      .then(response => {
        if (response.status === 200) {
          setIsCodeSent(true);
          handleCountDown();
        }
        setLoading(false);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    setShowCodeInput(true);
  };

  const handleFormSubmitStep2 = e => {
    e.preventDefault();
    validatePassword(code);
    if (validatePassword(code) === false) return;
    setLoading(true);
    axios
      .post(
        codeValidateUrl,
        {
          mobile: phone,
          code: code
        },
        {
          headers: {
            token: 'test'
          }
        }
      )

      .then(response => {
        if (response.status === 200) {
          setIsCodeSent(true);
        }
        setLoading(false);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    setShowCodeInput(true);
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
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none animate-fade-in-down">
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

                  <form onSubmit={handleFormSubmitStep1}>
                    <div>
                      <label htmlFor="number" className="text-sm text-gray-600">
                        شماره موبایل
                      </label>
                      <input
                        onChange={handlePhoneChange}
                        value={phone}
                        required
                        type="text"
                        className={`w-full mt-1 p-2 text-primary border border-gray-300 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:ring-2 focus:ring-lightYellow focus:border-transparent`}
                        id="number"
                        // onBlurCapture={() =>
                        //   validateMobilephone(loginValues.phone)
                        // }
                      />

                      {mobileError && <ValidationError text={'لطفا شماره موبایل صحیح را وارد کنید.'} />}
                      {loading && <Loader />}
                    </div>

                    {showCodeInput && !loading ? (
                      <div className="mb-4">
                        <div className="mt-1">
                          <div>
                            <label htmlFor="password" className="text-sm text-gray-600">
                              کد تایید
                            </label>
                            <input
                              onChange={handleCodeChange}
                              value={code}
                              required
                              type="text"
                              className={`w-full m-1 p-2 text-primary border border-gray-300 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:ring-2 focus:ring-lightYellow focus:border-transparent`}
                              id="password"
                              onBlurCapture={() => validatePassword(code)}
                            />
                            {passwordError && <ValidationError text={'لطفا رمز عبور صحیح وارد کنید.'} />}
                          </div>
                        </div>

                        <div className="flex justify-evenly items-center mt-2">
                          <p className="text-sm text-gray-600">
                            {' '}
                            {`${seconds !== 0 ? `ارسال مجدد کد تائید در ${seconds}` : ` ارسال مجدد کد تایید`}`}
                          </p>
                          <button
                            className={` ${seconds !== 0 && 'opacity-60 cursor-not-allowed'} mx-1 bg-yellow text-white hover:bg-lightYellow font-semibold text-sm px-6 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150`}
                            type="submit"
                            onClick={handleFormSubmitStep1}
                          >
                            ارسال
                          </button>
                        </div>
                      </div>
                    ) : null}
                    <hr />

                    <div className="flex justify-center items-center mt-1">
                      {!isCodeSent ? (
                        <button
                          className={`
                        mt-3 bg-yellow text-white hover:bg-lightYellow font-semibold text-sm px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                          type="submit"
                          onClick={handleFormSubmitStep1}
                        >
                          مرحله بعد
                        </button>
                      ) : (
                        <button
                          className={`
                          ${code.length !== 4 && 'opacity-60 cursor-not-allowed'}
                        mt-3 bg-yellow text-white hover:bg-lightYellow font-semibold text-sm px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                          type="submit"
                          onClick={handleFormSubmitStep2}
                        >
                          مرحله بعد
                        </button>
                      )}
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
