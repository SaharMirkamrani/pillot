import { DashCard } from './DashCardBookmark';

const arr = [1, 2, 3, 4, 5, 6, 7];

const Cards = () => {
  return (
    <div className="flex flex-wrap mx-auto lg:w-11/12 md:w-5/12 ">
      {arr.map(item => (
        <DashCard />
      ))}
    </div>
  );
};

export default Cards;
