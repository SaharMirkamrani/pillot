import pic from '../assets/sample.jpg';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { BsBookmark } from 'react-icons/bs';
import { useState } from 'react';

const DashCardBookmark = () => {
  const [bookmarked, setBookmarked] = useState(true)
  return (
    <>
      <DashCard bookmarked={bookmarked} />
      <DashCard bookmarked={bookmarked} />
      <DashCard bookmarked={bookmarked} />
      <DashCard bookmarked={bookmarked} />
      <DashCard bookmarked={bookmarked} />
      <DashCard bookmarked={bookmarked} />
    </>
  );
};

export default DashCardBookmark;

const DashCard = ({ bookmarked }) => {
  return (
    <>
      <div className="relative sm:mb-6 mb-4 mx-4 mt-6 bg-white p-2 w-80 max-w-3xl sm:w-full sm:p-6 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5">
        <div
          style={{
            backgroundImage: `url(${pic})`
          }}
          className="h-52 sm:h-full sm:w-52 rounded-xl bg-center bg-cover"
        ></div>
        <div className="flex sm:flex-1 flex-col gap-2 p-1 sm:mt-6">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-600 mb-6">آپارتمان 100 متری دهقان ویلا</h1>
          <p className="text-gray-500 text-sm sm:text-base line-clamp-3">ودیعه 350,000,000 تومان</p>
          <p className="text-gray-500 text-sm sm:text-base line-clamp-3">اجاره ماهیانه 2,500,000 تومان</p>
          <p className="text-gray-500 text-sm sm:text-base line-clamp-3">لحظاتی پیش در کوی مهر</p>
          {bookmarked ? (
            <BsFillBookmarkFill className="absolute left-4 bottom-4 text-darkYellow text-3xl" />
          ) : (
            <BsBookmark className="absolute left-4 bottom-4 text-darkYellow text-3xl" />
          )}
        </div>
      </div>
    </>
  );
};
