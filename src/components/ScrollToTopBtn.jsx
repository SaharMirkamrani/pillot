import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="text-white fixed left-6 bottom-6 w-10 h-10 rounded bg-blue-500 block animate-fade-in-down focus:outline-none focus:border-none hover:bg-blue-600 transition duration-150">
          <div onClick={scrollToTop}>
            <AiOutlineArrowUp className="text-2xl mx-auto" />
          </div>
        </button>
      )}
    </div>
  );
}
