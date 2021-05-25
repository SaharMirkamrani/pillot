import pic from '../assets/sample.jpg';

const ProductBanner = () => {
  return (
    <>
      <div className="w-full sm:w-1/2 lg:w-1/3 py-5 px-10 my-2">
        <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300">
          <img src={pic} alt="thumbnail" className="w-full" />
          <div className="px-6 pt-4 pb-10 relative">
            <div className="font-semibold text-lg mb-2 text-gray-600">
              آپارتمان 500 متری در الهیه
            </div>
            <p className="text-gray-600 text-base">توافقی</p>
            <p className="text-yellow text-base text-xs absolute left-6">امروز</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductBanner;
