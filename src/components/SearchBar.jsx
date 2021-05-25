import { FiSearch } from 'react-icons/fi';
import {useState} from 'react';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("")
  return (
    <>
      <div className="w-full mx-auto bg-transparent p-10 text-gray-800 relative min-w-80 max-w-md md:max-w-2xl">
        <div className="relative mt-1 flex flex-row justify-between">
          <input
          value={searchValue}
          onChange={(e)=> setSearchValue(e.target)}
            type="text"
            className="w-full pl-3 pr-10 mx-2 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:ring-2 focus:ring-blue-200 transition-colors"
            placeholder="جستجوی آگهی..."
          />
          <div>
            <button class="bg-lightYellow hover:bg-yellow text-white font-semibold mx-2 py-2 px-4 rounded-lg shadow-md inline-flex items-center hover:shadow transition duration-300">
              <span className="px-1">بگرد</span>
              <FiSearch />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
