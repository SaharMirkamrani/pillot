import { Link } from 'react-router-dom';
import { BiLandscape } from 'react-icons/bi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BsHouseDoor } from 'react-icons/bs';
import { BsFillCircleFill } from 'react-icons/bs';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Switch from './Switch';

const Sidebar = ({category}) => {
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
    <>
      <div className="md:flex flex-col md:h-full md:w-4/12">
        <div className="flex md:flex-col md:justify-center md:w-80 text-gray-700 bg-white flex-auto rounded-xl pb-10 mx-10 lg:mx-0 lg:mr-10">
          <nav className="flex-grow md:block pb-4 md:pb-0 md:overflow-y-auto px-4 py-10">
            {categories &&
              categories.filter(item => (category.includes(item.name.split(" ")[0]))).map(category => {
                return <CardItem key={category.id} text={category.name} id={category.id} />;
              })}
            <Switch />
          </nav>
        </div>
      </div>
    </>
  );
};

const CardItem = ({ text, id }) => {
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
      <div className="flex items-center justify-start">
        <BsFillCircleFill className="text-yellow ml-2" />
        <h3 className="font-semibold my-2">{text} </h3>
      </div>
      <div className="pr-3">
        <div className="flex items-center py-1 hover:text-yellow transition duration-300">
          <HiOutlineOfficeBuilding />
          <Link
            to="/"
            className="block px-4 mb-1 mt-2 text-sm text-gray-700 focus:text-gray-900 focus:outline-none focus:shadow-outline"
          >
            {subcategories[0] && subcategories[0].name}
          </Link>
        </div>
        <div className="flex items-center py-1 hover:text-yellow transition duration-300">
          <BsHouseDoor />
          <Link
            to="/"
            className="block px-4 mb-1 text-sm text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
          >
            {subcategories[1] && subcategories[1].name}
          </Link>
        </div>
        {subcategories[2] && (
          <div className="flex items-center py-1 hover:text-yellow transition duration-300">
            <BiLandscape />
            <Link
              to="/"
              className="block px-4 mb-1 text-sm text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
            >
              {subcategories[2] && subcategories[2].name}
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
