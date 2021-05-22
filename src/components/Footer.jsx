import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <>
      <nav className="flex sm:flex-row flex-col items-center sm:justify-around bg-yellow p-6">
        <div className="md:pr-20 pr-10 text-center m-auto">
          <p className="text-md text-white">تمام حقوق محفوظ است.</p>
        </div>
        <div className="flex-grow flex items-center w-auto h-auto text-2xl relative">
          <div className="sm:absolute sm:left-10 sm:pl-10 lg:mt-2">
            <a
              href="#item1"
              className="mt-4 inline-block lg:mt-0 hover:text-white mr-4"
            >
              <div className="flex items-center flex-no-shrink text-white mr-6 transition duration-500 ease-in-out hover:text-gray-400">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
            </a>
            <a
              href="#responsive-header"
              className="mt-4 inline-block lg:mt-0 hover:text-white mr-4"
            >
              <div className="flex items-center flex-no-shrink text-white mr-6 transition duration-500 ease-in-out hover:text-gray-400">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </a>
            <a
              href="#responsive-header"
              className="mt-4 inline-block lg:mt-0 hover:text-white mr-4"
            >
              <div className="flex items-center flex-no-shrink text-white mr-6 transition duration-500 ease-in-out hover:text-gray-400">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </a>
            <a
              href="#responsive-header"
              className="mt-4 inline-block lg:mt-0 hover:text-white mr-4"
            >
              <div className="flex items-center flex-no-shrink text-white mr-6 transition duration-500 ease-in-out hover:text-gray-400">
							<FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Footer;
