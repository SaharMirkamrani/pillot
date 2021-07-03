
const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <div className="w-full mx-auto bg-transparent p-10 text-gray-800 relative min-w-80 max-w-md md:max-w-2xl">
        <div className="relative mt-1 flex flex-row justify-between">
          <form className="w-full mx-2">
            <input
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              type="text"
              className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:ring-2 focus:ring-blue-200 transition-colors"
              placeholder="جستجو در پیلوت"
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
