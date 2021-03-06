import { DashCard } from './DashAdCard';
import { useContext, useEffect, useState } from 'react';
import { AdsContext } from '../ListProvider';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const ListCards = ({ searchValue }) => {
  const [bookmarked, setBookmarked] = useState(true);
  const { ads, getAds, loading } = useContext(AdsContext);

  useEffect(() => {
    getAds();
  }, [getAds]);

  return (
    <div className="flex flex-wrap mx-auto lg:w-11/12 md:w-5/12 justify-center">
      {loading ? (
        <Loader />
      ) : (
        ads
          .filter(ad => ad.house_name.includes(searchValue))
          .map(ad => (
            <Link to={`/adPage/${ad.ad_id}`}>
              <DashCard key={ad.ad_id} bookmarked={bookmarked} {...ad} searchValue={searchValue} />{' '}
            </Link>
          ))
      )}
    </div>
  );
};

export default ListCards;
