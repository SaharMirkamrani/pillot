import { DashCard } from './DashAdCard';
import { useContext, useEffect, useState } from 'react';
import { AdsContext } from '../ListProvider';

const ListCards = ({ searchValue, category }) => {
  const [bookmarked, setBookmarked] = useState(true);
  const { ads, getAds } = useContext(AdsContext);

  useEffect(() => {
    getAds();
  }, [getAds]);

  return (
    <div className="flex flex-wrap mx-auto lg:w-11/12 md:w-5/12">
      {ads &&
        ads
          .filter(ad => ad.house_name.includes(searchValue))
          .map(ad => <DashCard key={ad.ad_id} bookmarked={bookmarked} {...ad} searchValue={searchValue} />)}
    </div>
  );
};

export default ListCards;
