import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import styles from '../styles/main.module.css';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
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
      {/*  <button className="outline-none focus:outline-none m-2 bg-blue-500 hover:bg-blue-700 transition duration-300 text-white font-bold py-2 px-4 rounded-full absolute fixed right-1/4 bottom-1/12 w-20 h-12"> */}
      {isVisible && (
        <button className={styles.scrollTopTopBtn}>
          <div onClick={scrollToTop}>
            <AiOutlineArrowUp className="text-2xl mx-auto" />
          </div>
        </button>
      )}
    </div>
  );
}
