import React, { createContext, useCallback, useEffect, useState } from 'react';

const url = 'http://site.pillot.ir/admin/Ads/API/_showads';

export const AdsContext = createContext({
  ads: [],
  getAds: () => {}
});

const AdProvider = ({ children }) => {
  const [ads, setAds] = useState([]);
  const [filteredBy, setFilteredBy] = useState('');

  const getAds = useCallback(async () => {
    const headers = { token: 'test' };
    const response = await fetch(url, { headers });
    const data = await response.json();
    if (filteredBy) {
      let temp = data.data;
      let filtered = temp.filter(item => item.assignment_id.trim() === filteredBy || item.housetype_id === filteredBy);
      setAds(filtered);
    } else {
      setAds(data.data);
    }
  }, [filteredBy]);

  useEffect(() => {
    setAds('');
  }, [getAds]);

  console.log(filteredBy);

  return <AdsContext.Provider value={{ ads, getAds, setFilteredBy }}>{children}</AdsContext.Provider>;
};

export default AdProvider;
