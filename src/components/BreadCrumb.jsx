import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const BreadCrumb = () => {
  return (
    <>
      <nav className="bg-grey-100 p-3 rounded mr-5">
        <ol className="list-reset flex text-grey-dark items-center">
          <li className="mx-2">
            <Link
              to="/"
              className="font-bold hover:text-gray-500 transition duration-300"
            >
              خانه
            </Link>
          </li>
          <li>
            <span class="mx-2">
              <IoIosArrowBack />
            </span>
          </li>
          <li className="mx-2">
            <Link
              to="/category/buyandsell"
              className="font-bold hover:text-gray-500 transition duration-300"
            >
              خرید و فروش
            </Link>
          </li>
          <li className="mx-2">
            <span className="mx-2">
              <IoIosArrowBack />
            </span>
          </li>
          <li>اسم آگهی</li>
        </ol>
      </nav>
    </>
  );
};

export default BreadCrumb;
