import ProductBanner from './AdBanner';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Cards = () => {
  return (
    <>
      <div className="flex flex-wrap lg:mx-28 md:mx-8 mx-10 px-4 sm:mx-0">
        {arr.map((item) => (
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <ProductBanner />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
