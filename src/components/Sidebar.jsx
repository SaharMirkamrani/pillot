import { Link } from 'react-router-dom';
import { BiLandscape } from 'react-icons/bi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BsHouseDoor } from 'react-icons/bs';
import { BsFillCircleFill } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <>
      <div className="md:flex flex-col md:max-h-screen w-full">
        <div className="flex md:flex md:flex-col md:justify-center md:w-64 text-gray-700 bg-white flex-shrink-0 rounded-xl pb-10 mx-10">
          <nav className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto px-10 py-10">
            <div className="flex items-center justify-start">
              <BsFillCircleFill className="text-yellow ml-2" />
              <h3 className="font-semibold my-2"> خرید و فروش ملک </h3>
            </div>
            <div className="pr-3">
              <div className="flex items-center py-1 hover:text-yellow transition duration-300">
                <HiOutlineOfficeBuilding />
                <Link
                  to="/"
                  className="block px-4 mb-1 mt-2 text-sm text-gray-700 focus:text-gray-900 focus:outline-none focus:shadow-outline"
                >
                  آپارتمان
                </Link>
              </div>
              <div className="flex items-center py-1 hover:text-yellow transition duration-300">
                <BsHouseDoor />
                <Link
                  to="/"
                  className="block px-4 mb-1 text-sm text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
                >
                  ویلا
                </Link>
              </div>
              <div className="flex items-center py-1 hover:text-yellow transition duration-300">
                <BiLandscape />
                <Link
                  to="/"
                  className="block px-4 mb-1 text-sm text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
                >
                  زمین کلنگی
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-start pt-5">
              <BsFillCircleFill className="text-yellow ml-2" />
              <h3 className="font-semibold my-2"> اجاره ملک </h3>
            </div>
            <div className="pr-3">
              <div className="flex items-center py-1 hover:text-yellow transition duration-300">
                <HiOutlineOfficeBuilding />
                <Link
                  to="/"
                  className="block px-4 mb-1 text-sm text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
                >
                  آپارتمان
                </Link>
              </div>
              <div className="flex items-center py-1 hover:text-yellow transition duration-300">
                <BsHouseDoor />
                <Link
                  to="/"
                  className="block px-4 mb-1 text-sm text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
                >
                  ویلا
                </Link>
              </div>
              <div className="flex items-center py-1 hover:text-yellow transition duration-300">
                <BiLandscape />
                <Link
                  to="/"
                  className="block px-4 mb-1 text-sm text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
                >
                  زمین کلنگی
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-start pt-5">
              <BsFillCircleFill className="text-yellow ml-2" />
              <h3 className="font-semibold my-2"> رهن ملک </h3>
            </div>
            <div className="pr-3">
              <div className="flex items-center py-1 hover:text-yellow transition duration-300">
                <HiOutlineOfficeBuilding />
                <Link
                  to="/"
                  className="block px-4 mb-1 text-sm text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
                >
                  آپارتمان
                </Link>
              </div>
              <div className="flex items-center py-1 hover:text-yellow transition duration-300">
                <BsHouseDoor />
                <Link
                  to="/"
                  className="block px-4 mb-1 text-sm text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
                >
                  ویلا
                </Link>
              </div>
              <div className="flex items-center py-1 hover:text-yellow transition duration-300">
                <BiLandscape />
                <Link
                  to="/"
                  className="block px-4 mb-1 text-sm text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
                >
                  زمین کلنگی
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
