import { Link } from 'react-router-dom';
import { GiHouseKeys } from 'react-icons/gi';
import { BsHouseDoor } from 'react-icons/bs';

const Categories = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center my-10 items-center">
        <div>
          <Link to="/category/buyandsell">
            <div className="max-w-sm px-20 md:px-28 bg-white shadow-xl rounded-xl py-16 my-5 m-auto flex flex-col justify-around hover:bg-yellow hover:text-white transition duration-500 hover:shadow md:mx-10">
              <GiHouseKeys className="pl-1 text-4xl text-center m-auto" />
              <h2 className="text-xl font-semibold text-center pt-6">
                خرید و فروش
              </h2>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/category/rentandmortgage">
            <div className="max-w-sm px-20 md:px-28 bg-white shadow-xl rounded-xl py-16 my-5 m-auto flex flex-col justify-around hover:bg-yellow hover:text-white transition duration-500 hover:shadow md:mx-10">
              <BsHouseDoor className="pl-1 text-4xl text-center m-auto" />
              <h2 className="text-xl font-semibold text-center pt-6">
                رهن و اجاره
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Categories;
