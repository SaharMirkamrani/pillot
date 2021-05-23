import { Link } from 'react-router-dom';
import { GiHouseKeys } from 'react-icons/gi';
import { BsHouseDoor } from 'react-icons/bs';

const Categories = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around my-10">
        <div>
          <Link to="/buyandsell">
            <div className="max-w-sm md:px-28 bg-white shadow-xl rounded-xl py-16 my-5 m-auto flex flex-col justify-around">
              <GiHouseKeys className="pl-1 text-4xl text-center m-auto" />
              <h2 className="text-gray-700 text-xl font-semibold text-center pt-6">
                خرید و فروش
              </h2>
            </div>
          </Link>
        </div>
          <div>
            <Link to="/rentandmortgage">
              <div className="max-w-sm md:px-28 bg-white shadow-xl rounded-xl py-14 my-5 m-auto flex flex-col justify-around">
                <BsHouseDoor className="pl-1 text-4xl text-center m-auto" />
                <h2 className="text-gray-700 text-xl font-semibold text-center pt-6">
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
