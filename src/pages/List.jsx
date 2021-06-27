import BackgroundLanding from '../components/BackgroundLanding';
import Cards from '../components/ListCards';
import LoadMore from '../components/LoadMore';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';

const List = () => {
  return (
    <div className="min-h-screen">
      <BackgroundLanding />
      <SearchBar />
      <div className="md:flex md:justify-around">
        <Sidebar />
        <Cards />
      </div>
      <LoadMore />
    </div>
  );
};

export default List;
