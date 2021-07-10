import BackgroundLanding from '../components/BackgroundLanding';
import { BsHouseDoor } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const ChooseCategory = () => {
  const [categories, setCategories] = useState([]);

  const getCat = async () => {
    const headers = { token: 'test' };
    const response = await fetch('http://site.pillot.ir/admin/Assignments/API/_category?token=test', { headers });
    const data = await response.json();
    setCategories(data.data);
  };

  useEffect(() => {
    getCat();
  }, []);
  return (
    <div className="">
      <BackgroundLanding />
      <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
        <h2 className="md:text-xl text-lg text-center mx-5 my-10">دسته بندی مورد نظر خود را انتخاب کنید</h2>
      </div>

      <div className="flex flex-wrap md:justify-center my-2 mx-auto">
        {categories && categories.map(cat => <CategoryCard name={cat.name} key={cat.id} id={cat.id} />)}
      </div>
    </div>
  );
};

const CategoryCard = ({ id }) => {
  const [subcategories, setSubcategories] = useState([]);

  const getSubCat = useCallback(async () => {
    axios
      .post(
        'http://site.pillot.ir/admin/Ads/API/_subcategory?token=test',
        {
          assignment_id: id
        },
        {
          headers: {
            token: 'test'
          }
        }
      )
      .then(response => {
        setSubcategories(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    getSubCat();
  }, [getSubCat]);

  return (
    <>
      {subcategories &&
        subcategories.map(subcategory => (
          <div key={subcategory.housetype_id} className="shadow-md h-full sm:h-auto w-56 mx-auto md:mx-4 hover:shadow-xl hover:text-gray-700 transition duration-200 bg-white w-40 h-40 rounded-xl px-5 py-6 mb-5">
            <Link to="/submitAd">
              <BsHouseDoor className="text-6xl m-auto opacity-40 mt-2" />
              <h3 className="md:text-lg text-lg text-center mx-5 mt-3">{subcategory.name}</h3>
            </Link>
          </div>
        ))}
    </>
  );
};

export default ChooseCategory;
