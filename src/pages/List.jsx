import BackgroundLanding from '../components/BackgroundLanding';
import ListCards from '../components/ListCards';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';
import { useState} from 'react';
import { useLocation } from 'react-router-dom';
import LoadMoreButton from '../components/LoadMore';

const List = () => {
  const [searchValue, setSearchValue] = useState('');
  const { pathname } = useLocation();


  return (
    <div className="min-h-screen">
      <BackgroundLanding />
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="md:flex w-full">
        {pathname.includes('/category/buyandsell') ? (
          <Sidebar searchValue={searchValue} category={'فروش'} />
        ) : (
          <Sidebar searchValue={searchValue} category={'اجاره'} />
        )}
        {pathname.includes('category/buyandsell') ? (
          <ListCards searchValue={searchValue} />
        ) : (
          <ListCards searchValue={searchValue} />
        )}
      </div>
      <LoadMoreButton />
    </div>
  );
};

export default List;
