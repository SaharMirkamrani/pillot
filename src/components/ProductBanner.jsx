import pic from '../assets/sample.jpg';

const ProductBanner = () => {
  return (
    <>
      <div className="p-10 m-auto flex flex-row justify-center border-r border-b border-l border-gray-400">
        <div className="bg-white rounded w-5/6 flex items-right flex-col justify-between">
          <div className="p-3">
            <h3 className="text-md text-gray-800">
              {' '}
              آپارتمان 500 متری در الهیه
            </h3>
            <div>
              <p className="text-sm font-medium text-gray-500 leading-none pt-5">
                توافقی
              </p>
              <p className="text-sm text-gray-400">امروز</p>
            </div>
          </div>
        </div>
        <div className="rounded-t rounded-t-none rounded-l overflow-hidden bg-black w-64">
          <img src={pic} alt="itemPic" className="" />
        </div>
      </div>
      
      {/* 
      <div class="p-10">
      <div className=" w-full lg:max-w-full lg:flex">

      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">توافقی</p>
            <p className="text-gray-600">امروز</p>
          </div>
        </div>
      </div>
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
      <img src={pic} alt="itemPic" />
      </div>
    </div>
  </div> */}
    </>
  );
};

export default ProductBanner;
