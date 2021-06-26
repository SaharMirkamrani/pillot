import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TiTimes } from 'react-icons/ti';
import ValidationError from './ValidationError';
import axios from 'axios';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
	const [isActive, setIsActive] = useState(true)
  return (
    <>
      <button
        type="button"
        className="px-3 py-1 mr-10 focus:outline-none rounded-md border-2 text-gray-500 hover:text-gray-700 transition duration-150 hover:border-gray-400"
        onClick={() => setShowModal(true)}
      >
        تهران
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative sm:w-1/2 lg:w-4/12 my-6 mx-auto max-w-2xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="w-full max-w-md m-auto bg-white rounded-lg shadow-default p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-primary mb-10 mt-2 text-center">انتخاب استان</h4>
                    <button
                      className="p-1 mb-10 mt-2 mr-auto bg-transparent border-0 text-black float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <TiTimes className="text-gray-500 hover:text-gray-700" />
                    </button>
                  </div>

                  <form>
                    <div>
                      <label htmlFor="searchCity" className="text-sm text-gray-600">
                        جستجوی استان
                      </label>
                      <input
                        name="searchCity"
                        type="text"
                        className={`w-full mt-1 p-2 text-primary border border-gray-300 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:ring-2 focus:ring-lightYellow focus:border-transparent`}
                        id="searchCity"
                      />
                    </div>
                  </form>

                  <div className="flex justify-evenly flex-wrap">
                    <button
                      type="button"
                      className={`${isActive ? `bg-darkYellow border-darkYellow hover:border-yellow hover:bg-yellow hover:text-gray-800 text-white m-2 border-2 focus:outline-none transition duration-150 py-2 px-4 rounded`:`bg-white border-2 m-2 border-yellow text-gray-500 focus:outline-none hover:text-gray-800 hover:border-darkYellow transition duration-150 py-2 px-4 rounded`} `}
                    >
                      تهران
                    </button>
                    <button
                      type="button"
                      className="bg-white border-2 m-2 border-yellow text-gray-500 focus:outline-none hover:text-gray-800 hover:border-darkYellow transition duration-150 py-2 px-4 rounded"
                    >
                      کرج
                    </button>
                    <button
                      type="button"
                      className="bg-white border-2 m-2 border-yellow text-gray-500 focus:outline-none hover:text-gray-800 hover:border-darkYellow transition duration-150 py-2 px-4 rounded"
                    >
                      کرج
                    </button>
                    <button
                      type="button"
                      className="bg-white border-2 m-2 border-yellow text-gray-500 focus:outline-none hover:text-gray-800 hover:border-darkYellow transition duration-150 py-2 px-4 rounded"
                    >
                      کرج
                    </button>
										<button
                      type="button"
                      className="bg-white border-2 m-2 border-yellow text-gray-500 focus:outline-none hover:text-gray-800 hover:border-darkYellow transition duration-150 py-2 px-4 rounded"
                    >
                      کرج
                    </button>
										<button
                      type="button"
                      className="bg-white border-2 m-2 border-yellow text-gray-500 focus:outline-none hover:text-gray-800 hover:border-darkYellow transition duration-150 py-2 px-4 rounded"
                    >
                      کرج
                    </button>
										<button
                      type="button"
                      className="bg-white border-2 m-2 border-yellow text-gray-500 focus:outline-none hover:text-gray-800 hover:border-darkYellow transition duration-150 py-2 px-4 rounded"
                    >
                      کرج
                    </button>
										<button
                      type="button"
                      className="bg-white border-2 m-2 border-yellow text-gray-500 focus:outline-none hover:text-gray-800 hover:border-darkYellow transition duration-150 py-2 px-4 rounded"
                    >
                      کرج
                    </button>
										<button
                      type="button"
                      className="bg-white border-2 m-2 border-yellow text-gray-500 focus:outline-none hover:text-gray-800 hover:border-darkYellow transition duration-150 py-2 px-4 rounded"
                    >
                      کرج
                    </button>
										<button
                      type="button"
                      className="bg-white border-2 m-2 border-yellow text-gray-500 focus:outline-none hover:text-gray-800 hover:border-darkYellow transition duration-150 py-2 px-4 rounded"
                    >
                      کرج
                    </button>
										
                  </div>
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
