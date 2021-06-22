import { Link } from 'react-router-dom';
import { AiOutlineDashboard } from 'react-icons/ai';
import { BsArchive } from 'react-icons/bs';
import { BsFillCircleFill } from 'react-icons/bs';
import { BsBookmarks } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';

const DashboardSideBar = () => {
  return (
    <>
      <div className="md:flex flex-col md:max-h-screen w-full mx-auto justify-center">
        <div className="flex md:flex md:flex-col md:justify-center md:w-64 text-gray-700 bg-white flex-shrink-0 rounded-xl pb-10 mx-10">
          <nav className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto px-10 py-10">
            <div className="flex items-center justify-start">
              <BsFillCircleFill className="text-yellow ml-2" />
              <h3 className="font-semibold my-2"> سحر میرکامرانی </h3>
            </div>
            <div className="pr-3">
              <div className="flex items-center py-1 hover:text-yellow transition duration-300 text-yellow">
                <AiOutlineDashboard />
                <Link
                  to="/"
                  className="block px-4 mb-1 mt-2 text-sm text-gray-700 focus:text-gray-900 focus:outline-none focus:shadow-outline"
                >
                  داشبورد
                </Link>
              </div>
              <div className="flex items-center py-1 hover:text-yellow transition duration-300">
                <BsArchive />
                <Link
                  to="/"
                  className="block px-4 mb-1 text-sm text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
                >
                  آگهی های من
                </Link>
              </div>
              <div className="flex items-center py-1 hover:text-yellow transition duration-300">
                <BsBookmarks />
                <Link
                  to="/"
                  className="block px-4 mb-1 text-sm text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
                >
                  نشان شده ها
                </Link>
              </div>
							<div className="flex items-center py-1 hover:text-yellow transition duration-300">
                <FiLogOut />
                <Link
                  to="/"
                  className="block px-4 mb-1 text-sm text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
                >
                  خروج
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default DashboardSideBar;