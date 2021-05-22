import React from 'react';
import Login from './Login';
import {useLocation} from "react-router-dom";
import Signup from './Signup';

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
	const location = useLocation();
	console.log(location.pathname)
  return (
    <>
      <button
        className="bg-yellow text-white hover:bg-lightYellow font-semibold text-md px-8 py-2.5 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        ورود
      </button>
      {showModal ? (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative sm:w-1/2 lg:w-4/12 my-6 mx-auto max-w-2xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <Login setShowModal={setShowModal} />
										{location.pathname === "/signup" && console.log("hey") }
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
