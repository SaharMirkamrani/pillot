import { BiCircle } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import { FaRegDotCircle } from 'react-icons/fa';
import { useState } from 'react';

const DashAddressCards = () => {
	const [selected, setSelected] = useState(false);

	const handleChooseInput = ()=> {

	}

  return (
    <div className="h-full my-10">
      <DashItem selected={selected} />
      <DashItem selected={true} />
      <DashItem selected={selected} />
    </div>
  );
};

export default DashAddressCards;

const DashItem = ({selected}) => {
  return (
    <>
      <div className="mx-auto flex justify-between px-4 bg-white w-10/12 md:w-1/2 h-max rounded-md py-4 md:py-3 shadow-md my-2">
        <div className="flex flex-col justify-center pb-2 mx-auto md:mx-0">
          <p className="text-lg py-1">دفتر دهقان ویلا </p>
          <p className="pr-2 py-1 text-gray-700 text-sm">
            کرج، البرز، خیابان بهشتی، نبش دهقان ویلای دوم، ساختمان شهر پرده، طبقه 4، واحد 3
          </p>
        </div>
        <div className="flex flex-col justify-between pt-2 px-2">
          <div className="text-red-500 text-lg p-2">
            <BsTrash />
          </div>
          {selected ? (
            <div className="text-green-600 text-lg p-2">
              <FaRegDotCircle />
            </div>
          ) : (
            <div className="text-gray-600 text-lg p-2">
              <BiCircle />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
