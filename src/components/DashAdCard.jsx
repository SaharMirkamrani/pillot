import { BsFillBookmarkFill } from 'react-icons/bs';
import { BsBookmark } from 'react-icons/bs';

const DashCard = ({ bookmarked, house_name, house_image, house_price, city_id, searchValue }) => {
  return (
    <>
      <div className="relative flex-auto mb-6 mb-4 mx-4 mt-6 bg-white p-4 pl-6 h-52 rounded-xl shadow-lg flex gap-5">
        <div
          style={{
            backgroundImage: `url(${house_image})`
          }}
          className="h-full w-52 rounded-xl bg-center bg-cover"
        ></div>
        <div className="flex flex-col justify-between gap-2 lg:pt-4 pl-0 lg:pb-4">
          <h1 className="text-lg font-semibold text-gray-600 mb-4">{house_name}</h1>
          <div className="text-gray-500 text-sm pb-2">
            <p>{house_price} تومان</p>
            {/* <p>اجاره ماهیانه 2,500,000 تومان</p> */}
            <p className="text-gray-400 text-xs py-2">لحظاتی پیش در {city_id}</p>
          </div>
          {bookmarked ? (
            <BsFillBookmarkFill className="absolute left-3 bottom-3 text-darkYellow text-2xl" />
          ) : (
            <BsBookmark className="absolute left-3 bottom-3 text-darkYellow text-2xl" />
          )}
        </div>
      </div>
    </>
  );
};

export { DashCard };
