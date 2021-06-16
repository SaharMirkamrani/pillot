import BackgroundLanding from '../components/BackgroundLanding';
import { BsHouseDoor } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ChooseCategory = () => {
  return (
    <>
      <BackgroundLanding />
      <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
        <h2 className="md:text-xl text-lg text-center mx-5 my-10">
          دسته بندی مورد نظر خود را انتخاب کنید
        </h2>
      </div>

      <div className="md:flex md:justify-center my-2 mx-auto">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
      <div className="md:flex md:justify-center my-2 mx-auto">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </>
  );
};

const CategoryCard = () => {
  return (
    <>
      <div className="shadow-md mx-auto md:mx-4 hover:shadow-xl hover:text-gray-700 transition duration-200 bg-white w-40 h-40 rounded-xl px-5 py-6 mb-5">
        <Link to="/submitAd">
          <BsHouseDoor className="text-6xl m-auto opacity-40 mt-2" />
          <h3 className="md:text-xl text-lg text-center mx-5 mt-3">خانه</h3>
        </Link>
      </div>
    </>
  );
};

export default ChooseCategory;
