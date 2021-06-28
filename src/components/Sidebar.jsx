import { Link } from 'react-router-dom';
import { BiLandscape } from 'react-icons/bi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BsHouseDoor } from 'react-icons/bs';
import { BsFillCircleFill } from 'react-icons/bs';

const Sidebar = () => {
  const listValues = {
    sellHouse: ['فروش زمین', 'فروش آپارتمان', 'فروش ویلا'],
    rentHouse: ['اجاره آپارتمان', 'اجاره ویلا'],
    sellCommercial: [
      'فروش دفترکار اتاق اداری مطب',
      'فروش مغازه و غرفه',
      'فروش صنعتی و کشاورزی',
    ],
    rentCommercial: [
      'اجاره دفتر کار ،اتاق اداری،مطب',
      'اجاره مغازه و غرفه',
      'اجاره صنعتی کشاورزی',
    ],
    shortTimeRent: [
      'اجاره کوتاه مدت آپارتمان و سوییت',
      'اجاره کوتاه مدت ویلا و باغ',
      'اجاره کوتاه مدت دفتر کار و فضای آموزشی',
    ],
  };
  return (
    <>
      <div className="md:flex flex-col md:h-full md:w-4/12">
        <div className="flex md:flex-col md:justify-center md:w-80 text-gray-700 bg-white flex-auto rounded-xl pb-10 mx-10 lg:mx-0 lg:mr-10">
          <nav className="flex-grow md:block pb-4 md:pb-0 md:overflow-y-auto px-4 py-10">
            <CardHeader text={'فروش مسکن'} />
            <CardItem items={listValues.sellHouse} />
            <CardHeader text={'اجاره مسکن'} />
            <CardItem items={listValues.rentHouse} />
            <CardHeader text={'فروش تجاری'} />
            <CardItem items={listValues.sellCommercial} />
            <CardHeader text={'اجاره تجاری'} />
            <CardItem items={listValues.rentCommercial} />
            <CardHeader text={'اجاره کوتاه مدت'} />
            <CardItem items={listValues.shortTimeRent} />
          </nav>
        </div>
      </div>
    </>
  );
};

const CardItem = ({ items }) => {
  return (
    <>
      <div className="pr-3">
        <div className="flex items-center py-1 hover:text-yellow transition duration-300">
          <HiOutlineOfficeBuilding />
          <Link
            to="/"
            className="block px-4 mb-1 mt-2 text-sm text-gray-700 focus:text-gray-900 focus:outline-none focus:shadow-outline"
          >
            {items[0]}
          </Link>
        </div>
        <div className="flex items-center py-1 hover:text-yellow transition duration-300">
          <BsHouseDoor />
          <Link
            to="/"
            className="block px-4 mb-1 text-sm text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
          >
            {items[1]}
          </Link>
        </div>
        {items[2] && (
          <div className="flex items-center py-1 hover:text-yellow transition duration-300">
            <BiLandscape />
            <Link
              to="/"
              className="block px-4 mb-1 text-sm text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
            >
              {items[2]}
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

const CardHeader = ({ text }) => {
  return (
    <>
      <div className="flex items-center justify-start">
        <BsFillCircleFill className="text-yellow ml-2" />
        <h3 className="font-semibold my-2">{text} </h3>
      </div>
    </>
  );
};

export default Sidebar;
