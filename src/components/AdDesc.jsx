import { useState, useEffect } from 'react';
import { RiShareLine } from 'react-icons/ri';
import { RiBookmarkLine } from 'react-icons/ri';
import { FiPhone } from 'react-icons/fi';
import Loader from './Loader';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';

const AdDesc = ({ singleAd, loading }) => {
  const {
    house_name,
    city_id,
    region_id,
    assignment_id,
    housetype_id,
    house_detail,
    house_price,
    house_phone,
    house_floor,
    house_room
  } = singleAd;

  return (
    <>
      <div className="mx-auto px-2 bg-white py-5 rounded-xl md:w-10/12 mb-10">
        <div>
          <div className="lg:w-3/5 md:w-3/4 mx-auto md:mt-10">
            <ImagesGallery />
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className="sm:w-full text-center md:text-right mt-10 px-4 md:flex md:justify-around">
              <div className="md:w-8/12 md:pr-20">
                <h2 className="font-semibold text-xl my-1">{house_name}</h2>
                <p className="text-gray-500 text-sm my-1">
                  یک ربع پیش در {city_id}، {region_id} | {housetype_id}
                </p>
                <h3 className="font-semibold text-lg my-1">توضیحات</h3>
                <p>{house_detail}</p>
                <h3 className="font-semibold text-lg my-1">قیمت</h3>
                <p>{house_price}</p>

                <h3 className="font-semibold text-lg my-1">تعداد اتاق ها</h3>
                <p>{house_room}</p>

                <h3 className="font-semibold text-lg my-1">تعداد طبقات</h3>
                <p>{house_floor}</p>
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
          )}
        </div>
      </div>
    </>
  );
};

export default AdDesc;

const ImagesGallery = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    let shouldCancel = false;

    const call = async () => {
      const response = await axios.get('https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948');
      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(
          response.data.map(url => ({
            original: `${url}=w1024`,
            thumbnail: `${url}=w100`
          }))
        );
      }
    };
    call();
    return () => (shouldCancel = true);
  }, []);

  return images ? <ImageGallery items={images} /> : null;
};
