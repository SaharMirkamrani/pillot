import { useState } from 'react';
import pic from '../assets/sample.jpg';
import pic2 from '../assets/sample2.jpg';
import { RiShareLine } from 'react-icons/ri';
import { RiBookmarkLine } from 'react-icons/ri';
import { FiPhone } from 'react-icons/fi';

const AdDesc = () => {
  return (
    <>
      <div class="mx-auto px-2 bg-white py-5 rounded-xl md:w-10/12 mb-10">
        <div>
          <div>
            <img
              src={pic2}
              alt="singleAdPic"
              className="rounded-xl mx-auto md:w-7/12 w-10/12"
            />
          </div>
          <div className="flex justify-center mt-5">
            <div className="sm:mt-0 m-0 w-90">
              <img
                src={pic}
                alt="singleAdPic"
                className="rounded-xl md:w-2/12 w-3/12 mx-auto"
              />
            </div>
            <div className="sm:mt-0 m-0 w-90">
              <img
                src={pic2}
                alt="singleAdPic"
                className="rounded-xl md:w-2/12 w-3/12 mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="sm:w-full text-center sm:text-right mt-10 px-4 md:flex md:justify-around">
          <div className="md:w-8/12 md:pr-20">
            <h2 className="font-semibold text-xl my-1">
              آپارتمان 500 متری در الهیه
            </h2>
            <p className="text-gray-500 text-sm my-1">
              یک ربع پیش در تهران، الهیه | فروش آپارتمان
            </p>
            <h3 className="font-semibold text-lg my-1">توضیحات</h3>
            <p>
              فرشته ( برج باغ ) ١١ طبقه کلا ٤٨ واحد طبقه دهم، نقشه و ویوی عالی ٤
              پارکینگ سندی کنار هم بصورت باکس ٧٠٠ متر لابی دوبلکس، روف گاردن ٤
              فصل، سالن اجتماعات،استخر، سونا، جکوزی، سالن جیم، سالن بیلیارد،
              جاده سلامت، ٤ لاین اسانسور، مشاور شما: فربُد
            </p>
            <h3 className="font-semibold text-lg my-1">قیمت</h3>
            <p>توافقی</p>
          </div>
          <div className="bg-yellow rounded-xl my-5 w-90 h-16 flex justify-around items-center m-auto md:flex-col md:w-32 md:h-72 justify-between">
            <div className="text-white hover:text-black transition duration-300 text-2xl flex flex-col items-center justify-between cursor-pointer">
              <p className="text-sm">اشتراک گذاری</p>
              <RiShareLine className="mx-auto" />
            </div>
            <div className="text-white hover:text-black transition duration-300 text-2xl cursor-pointer">
              <p className="text-sm">اطلاعات تماس</p>
              <FiPhone className="mx-auto" />
            </div>
            <div className="text-white hover:text-black transition duration-300 text-2xl cursor-pointer">
              <p className="text-sm">نشان کردن</p>
              <RiBookmarkLine className="mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdDesc;
