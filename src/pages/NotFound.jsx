import { AiFillStop } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <div className="m-auto text-center mt-56">
        <div className="h-1/2"></div>
        <div className="mb-60">
          <h2 className="text-2xl font-semibold text-gray-600 my-2">
            این راه به جایی نمی‌رسد!
          </h2>
          <div>
            <div>
              <AiFillStop className="text-5xl text-yellow mx-auto my-2" />
            </div>
            <div className="w-80 mx-auto my-2 text-xl text-gray-600">
              به نظر آدرس را اشتباه وارد کرده‌اید. برای پیدا کردن مسیر درست به{' '}
              <Link to="/" className="text-blue-600 font-semibold">
                خانه{' '}
              </Link>
              برگردید.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
