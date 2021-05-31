import pic from '../assets/sample.jpg';
import { Link } from 'react-router-dom';

const ProductBanner = () => {
  return (
    <article className="overflow-hidden rounded-lg hover:shadow-lg transition duration-300 bg-white m-4">
      <Link to={`/AdPage/1`}>
        <img alt="thumbnail" className="block h-auto w-full" src={pic} />
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="font-semibold text-lg mb-2 text-gray-600">
            الهیه ۱۸۰ متر ، ۲ پارکینگ
          </h1>
        </header>
        <footer className="leading-none p-2 md:p-4">
          <div className="flex items-center justify-between">
            <p className="ml-2 text-sm text-gray-600 p-2">توافقی</p>
            <p className="text-yellow text-base text-xs border border-yellow px-2 py-1 rounded-lg mx-1">
              امروز
            </p>
          </div>
        </footer>
      </Link>
    </article>
  );
};

export default ProductBanner;
