import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TiTimes } from 'react-icons/ti';
import ValidationError from './ValidationError';
import axios from 'axios';

const SignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [signUpValues, setSignUpValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    gender: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://site.pillot.ir/admin/Customers/API/_login', signUpValues, {
        headers: {
          token: 'test',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => {
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setSignUpValues({ firstName: '', lastName: '', phone: '', gender: '' });
  };

  const validateMobilephone = (input) => {
    let mobile = /^\d{11}$/;
    if (mobile.test(input)) {
      setMobileError(false);
    } else {
      setMobileError(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  console.log(signUpValues);

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
                <div className="w-full max-w-md m-auto bg-white rounded-lg shadow-default py-6 px-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-primary mb-10 mt-2 text-center">
                      ثبت نام
                    </h4>
                    <button
                      className="p-1 mb-10 mt-2 mr-auto bg-transparent border-0 text-black opacity-8 float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <TiTimes className="text-gray-500 hover:text-gray-700" />
                    </button>
                  </div>

                  <form onSubmit={handleFormSubmit}>
                    <div className="flex flex-row justify-between">
                      <div className="mx-2">
                        <label className="text-sm text-gray-600">نام</label>
                        <input
                          onChange={handleInputChange}
                          value={signUpValues.firstName}
                          required
                          type="text"
                          className={`w-full mt-1 p-2 text-primary border border-gray-300 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:ring-2 focus:ring-lightYellow focus:border-transparent`}
                          name="firstName"
                        />
                      </div>
                      <div className="mx-2">
                        <label className="text-sm text-gray-600">
                          نام خانوادگی
                        </label>
                        <input
                          onChange={handleInputChange}
                          required
                          value={signUpValues.lastName}
                          type="text"
                          className={`w-full mt-1 p-2 text-primary border border-gray-300 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:ring-2 focus:ring-lightYellow focus:border-transparent`}
                          name="lastName"
                        />
                      </div>
                    </div>
                    <div className="mx-2">
                      <label className="text-sm text-gray-600">موبایل</label>
                      <input
                        onChange={handleInputChange}
                        required
                        value={signUpValues.phone}
                        type="number"
                        className={`w-full mt-1 p-2 text-primary border border-gray-300 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:ring-2 focus:ring-lightYellow focus:border-transparent`}
                        name="phone"
                        onBlurCapture={() =>
                          validateMobilephone(signUpValues.phone)
                        }
                      />
                      {mobileError && (
                        <ValidationError
                          text={'شماره موبایل باید 11 رقم باشد.'}
                        />
                      )}
                    </div>
                    <div className="mx-2 flex flex-row justify-between">
                      <p className="text-sm text-gray-600">جنسیت</p>
                      <div className="flex flex-row justify-between items-center">
                        <div className="px-6">
                          <label
                            htmlFor="male"
                            className="text-sm text-gray-600 mx-2"
                          >
                            مرد
                          </label>
                          <input
                            onChange={handleInputChange}
                            required
                            type="radio"
                            id="male"
                            name="gender"
                            value="1"
                          />
                        </div>
                        <div className="px-6">
                          <label
                            htmlFor="female"
                            className="text-sm text-gray-600 mx-2"
                          >
                            زن
                          </label>
                          <input
                            onChange={handleInputChange}
                            required
                            type="radio"
                            id="female"
                            name="gender"
                            value="2"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start flex-row items-center my-4">
                      <p className="text-xs text-gray-700">
                        {' '}
                        قبلا ثبت نام کرده اید؟{' '}
                        <Link to="/login">
                          <button
                            className="bg-transparent border-0 leading-none font-medium outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <p className="text-xs text-indigo-500 inline">
                              ورود
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
                        ثبت نام
                      </button>
                    </div>
                  </form>
                </div>

                {/* <Signup
                  setShowModal={setShowModal}
                  handleInputChange={handleInputChange}
                  setSignUpValues={setSignUpValues}
                  signUpValues={signUpValues}
                /> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default SignUp;
