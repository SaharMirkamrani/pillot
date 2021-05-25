import ProductBanner from './ProductBanner'

const arr = [1,2,3,4,5,6,7,8,9]

const Cards = () => {
  return (
    <>
		<div className="flex flex-wrap lg:mx-28 md:mx-8 mx-10 px-4 sm:mx-0 flex-shrink">
		{arr.map((item)=> <ProductBanner />)}
		</div>

    </>
  );
};

export default Cards;
