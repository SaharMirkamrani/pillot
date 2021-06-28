import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';

const DashItem = () => {
  return (
    <>
      <div className="mx-auto px-4 bg-white w-10/12 md:w-1/2 lg:w-1/2 h-max rounded-md py-4 md:py-3 shadow-md my-2">
        <div className="flex flex-col md:flex-row justify-between text-center pb-2 mx-auto md:mx-0">
          <p className="text-lg">
            پرداخت <span className="text-green-700">موفق</span> از درگاه پارسیان
          </p>
          <div className="flex items-center text-center text-gray-600 justify-center">
            <p className="mx-2 pt-1 text-sm">12:34</p>
            <AiOutlineClockCircle />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-center text-gray-600 pt-2">
          <p className="pr-2">4,200,000 ریال</p>
          <div className="flex items-center text-center text-sm justify-center">
            <p className="mx-2 pt-1">1399/5/31</p>
            <BiCalendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashItem;
