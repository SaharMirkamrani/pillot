import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const BreadCrumb = ({singleAd}) => {
  const {assignment_id, house_name} = singleAd;
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
            {assignment_id && assignment_id.includes("فروش") ? <Link
              to="/category/buyandsell"
              className="font-bold hover:text-gray-500 transition duration-300"
            >
                خرید و فروش
            </Link> : <Link
              to="/category/rentandmortgage"
              className="font-bold hover:text-gray-500 transition duration-300"
            >
                رهن و اجاره
            </Link>}
            
          </li>
          <li className="mx-2">
            <span className="mx-2">
              <IoIosArrowBack />
            </span>
          </li>
          <li>{house_name}</li>
        </ol>
      </nav>
    </>
  );
};

export default BreadCrumb;
