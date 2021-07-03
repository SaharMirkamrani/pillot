import { AiOutlineReload } from 'react-icons/ai';

const LoadMore = () => {
  return (
    <>
      <button className="focus:outline-none mx-auto rounded-2xl bg-yellow p-5 text-gray-800 hover:text-white hover:shadow transition duration-150 text-lg shadow-md md:my-10 my-5 flex justify-center">
        <div className="flex flex-row items-center justify-center">
          <span className="px-2">بارگذاری بیشتر</span>
          <AiOutlineReload className="text-2xl" />
        </div>
      </button>
    </>
  );
};

export default LoadMore;
