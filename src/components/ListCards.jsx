import ProductBanner from './AdBanner';
import { DashCard } from './DashCardBookmark';

const arr = [1, 2, 3, 4, 5, 6, 7];

const Cards = () => {
  return (
    <div className="flex flex-wrap mx-auto lg:w-10/12 md:w-5/12 ">
      {arr.map(item => (
        // <div key={item} className="my-1 px-1 lg:my-4 lg:px-4">
        <DashCard />
        // </div>
      ))}
    </div>
  );
};

export default Cards;
