import pic from '../assets/sample.jpg';

const AdDesc = () => {
  return (
    <>
      <div class="mx-auto px-2 bg-white py-5 rounded-xl md:w-10/12 mb-10">
        <div>
          <div>
            <img
              src={pic}
              alt="singleAdPic"
              className="rounded-xl mx-auto md:w-7/12 w-10/12"
            />
          </div>
          <div className="mt-5 sm:mt-0 m-0 w-90">
            <img
              src={pic}
              alt="singleAdPic"
              className="rounded-xl md:w-2/12 w-2/12 m-0"
            />
          </div>
        </div>
        <div className="md:w-8/12 sm:w-8/12 text-center sm:text-right mt-10 px-4">
          <h2 className="font-semibold text-xl my-1">
            آپارتمان 500 متری در الهیه
          </h2>
          <p className="text-gray-500 text-sm my-1">
            یک ربع پیش در تهران، الهیه | فروش آپارتمان
          </p>
          <div>
            <h3 className="font-semibold text-lg my-1">توضیحات</h3>
            <p>
              فرشته( برج باغ ) ١١ طبقه کلا ٤٨ واحد طبقه دهم، نقشه و ویوی عالی ٤
              پارکینگ سندی کنار هم بصورت باکس ٧٠٠ متر لابی دوبلکس، روف گاردن ٤
              فصل، سالن اجتماعات،استخر، سونا، جکوزی، سالن جیم، سالن بیلیارد،
              جاده سلامت، ٤ لاین اسانسور، مشاور شما: فربُد
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdDesc;
