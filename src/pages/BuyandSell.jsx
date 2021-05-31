import BackgroundLanding from '../components/BackgroundLanding';
import Cards from '../components/Cards';
import LoadMore from '../components/LoadMore';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';

const BuyandSell = () => {
  return (
    <>
      <BackgroundLanding />
      <SearchBar />
      <div className="md:flex md:justify-around">
        <Sidebar />
        <Cards />
      </div>
      <LoadMore />
    </>
  );
};

export default BuyandSell;
