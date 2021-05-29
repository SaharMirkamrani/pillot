import BackgroundLanding from '../components/BackgroundLanding';
import Cards from '../components/Cards';
import SearchBar from '../components/SearchBar';
import LoadMore from '../components/LoadMore';

const BuyandSell = () => {
  return (
    <>
      <BackgroundLanding />
      <SearchBar />
			<Cards />
      <LoadMore />
    </>
  );
};

export default BuyandSell;
