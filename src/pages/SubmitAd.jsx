import BackgroundLanding from '../components/BackgroundLanding';
import 'leaflet/dist/leaflet.css';
import Map from '../components/Map';
import FileUploader from '../components/FileUploader';

const SubmitAd = () => {
  return (
    <>
      <BackgroundLanding />
      <div className="text-center flex flex-col justify-center m-auto my-10">
        <h2 className="md:text-2xl text-lg text-center mx-5">
          اطلاعات آگهی را وارد کنید
        </h2>
        <button
          type="button"
          className="md:mr-40 lg:mr-64 md:mt-0 mx-auto mt-4 md:w-36 w-32 bg-white shadow text-gray-500 text-center focus:outline-none rounded-full sm:px-4 sm:py-2 px-2 py-2 hover:text-gray-700 hover:shadow-lg transition duration-300"
        >
          تغییر دسته بندی
        </button>

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">انتخاب شهر</label>
          <select className="w-full py-2 px-4 rounded-full appearance-none shadow-md mx-auto text-gray-500">
            <option>تهران</option>
            <option>کرج</option>
            <option>مشهد</option>
          </select>
        </div>

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">محدوده آگهی</label>
          <select className="w-full py-2 px-4 rounded-full appearance-none shadow-md mx-auto text-gray-500">
            <option>انتخاب محله</option>
            <option>کرج</option>
            <option>مشهد</option>
          </select>
        </div>

        <Map />

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">عکس آگهی</label>
          <p className="text-right my-2 mr-3 text-gray-600 text-sm">
            {' '}
            عکس هایی از فضای داخل و بیرون ملک اضافه کنید. آگهی های دارای عکس تا
            3 برابر بیشتر توسط کاربران دیده میشوند.
          </p>

          <FileUploader />

          <p className="text-right my-2 mr-3 text-gray-600 text-sm">
            {' '}
            تعداد عکس های انتخاب شده نباید بیشتر از 20 عدد باشد.
          </p>
        </div>

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">متراژ</label>
          <input
            type="number"
            className="w-full py-2 px-4 rounded-full shadow-md mx-auto text-gray-500"
          />
        </div>

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">آگهی دهنده</label>
          <div className="flex md:flex-row flex-col justify-start items-center mr-5">
            <div>
              <input
                type="radio"
                id="personal"
                name="adMaker"
                value="personal"
              />
              <label htmlFor="personal" className="md:ml-10 mr-5">
                شخصی
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="consultant"
                name="adMaker"
                value="consultant"
              />
              <label htmlFor="consultant" className="md:ml-10 mr-5">
                مشاور املاک
              </label>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">ودیعه</label>
          <input
            type="number"
            placeholder="ودیعه به تومان"
            className="w-full py-2 px-4 rounded-full shadow-md mx-auto text-gray-500"
          />
        </div>

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">ودیعه و اجاره</label>
          <input
            type="number"
            placeholder="انتخاب"
            className="w-full py-2 px-4 rounded-full shadow-md mx-auto text-gray-500"
          />
        </div>

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">مناسب برای</label>
          <input
            type="number"
            placeholder="انتخاب"
            className="w-full py-2 px-4 rounded-full shadow-md mx-auto text-gray-500"
          />
        </div>

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">تعداد اتاق</label>
          <input
            type="number"
            placeholder="انتخاب"
            className="w-full py-2 px-4 rounded-full shadow-md mx-auto text-gray-500"
          />
        </div>

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">سال ساخت</label>
          <input
            type="number"
            placeholder="انتخاب"
            className="w-full py-2 px-4 rounded-full shadow-md mx-auto text-gray-500"
          />
        </div>
        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">طبقه</label>
          <input
            type="number"
            placeholder="انتخاب"
            className="w-full py-2 px-4 rounded-full shadow-md mx-auto text-gray-500"
          />
        </div>

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">آسانسور</label>
          <input
            type="number"
            placeholder="انتخاب"
            className="w-full py-2 px-4 rounded-full shadow-md mx-auto text-gray-500"
          />
        </div>

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">پارکینگ</label>
          <input
            type="number"
            placeholder="انتخاب"
            className="w-full py-2 px-4 rounded-full shadow-md mx-auto text-gray-500"
          />
        </div>

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">انباری</label>
          <input
            type="number"
            placeholder="انتخاب"
            className="w-full py-2 px-4 rounded-full shadow-md mx-auto text-gray-500"
          />
        </div>

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <p className="text-right my-2 mr-3 text-darkYellow text-md">
            {' '}
            انتخاب سایر ویژگی ها و امکانات
          </p>
        </div>

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">شماره موبایل</label>
          <p className="text-right my-2 mr-3 text-gray-600 text-sm">
            {' '}
            توجه: لطفا پس از ثبت آگهی, از طریق هیچ پیامکی برای پرداخت وجه جهت
            انتشار آگهی اقدام نکنید.
          </p>
          <p className="text-right my-2 mr-3 text-gray-600 text-sm">
            {' '}
            کد تایید به شماره موبایل شما ارسال خواهد شد. تماس و چت نیز با این
            شماره انجام میشود.
          </p>
          <input
            type="number"
            placeholder="شماره موبایل شما ( **** ***0922 )"
            className="w-full py-2 px-4 rounded-full shadow-md mx-auto text-gray-500 mt-5"
          />
          <div className="text-right mt-5 mr-5 flex justify-start items-center">
            <input type="checkbox" id="chat" name="chat" value="chat" />
            <label htmlFor="chat" className="mr-5 text-gray-700">
              چت پیلوت فعال شود
            </label>
          </div>
        </div>

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">عنوان آگهی</label>
          <p className="text-right my-2 mr-3 text-gray-600 text-sm">
            {' '}
            در عنوان آگهی به موارد مهمی مانند نوع ملک, متراژ و محله اشاره کنید
          </p>

          <input
            type="text"
            placeholder="مثال: آپارتمان, 100 متر , ولیعصر"
            className="w-full py-2 px-4 rounded-full shadow-md mx-auto text-gray-500 mt-5"
          />
        </div>

        <div className="mt-5 flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <label className="text-right my-2 mr-3">توضیحات آگهی</label>
          <p className="text-right my-2 mr-3 text-gray-600 text-sm">
            {' '}
            در توضیحات آگهی به مواردی مانند شرایط اجاره, جزییات و ویژگی های قابل
            توجه, دسترسی های محلی و موقعیت قرارگیری ملک اشاره کنید.
          </p>
          <textarea
            placeholder="توضیحات را بنویسید"
            className="text-gray-600 px-5 py-2 rounded-md mt-5 shadow-md"
          ></textarea>
        </div>

        <div className="mt-5 flex justify-end w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
          <button class="bg-white mx-2 text-gray-500 border-2 border-gray-300 hover:border-yellow hover:text-gray-700 font-bold py-2 px-4 rounded-md transition duration-300">
            انصراف
          </button>
          <button class="bg-yellow mx-2 focus:outline-none hover:bg-darkYellow text-white font-bold py-2 px-4 rounded-md transition duration-300">
            ارسال آگهی
          </button>
        </div>
      </div>
    </>
  );
};

export default SubmitAd;
