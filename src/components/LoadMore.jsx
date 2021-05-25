import { AiOutlineReload } from 'react-icons/ai';

const LoadMore = () => {
  return (
    <>
      <button className="focus:outline-none w-full mx-auto rounded-2xl bg-yellow p-10 text-gray-800 hover:text-white hover:shadow transition duration-300 text-lg min-w-80 max-w-sm md:max-w-2xl shadow-md my-10 flex justify-center">
        <div className="flex flex-row items-center justify-center">
          <span className="px-2">بارگذاری بیشتر</span>
          <AiOutlineReload className="text-2xl" />
        </div>
      </button>
    </>
  );
};

export default LoadMore;
