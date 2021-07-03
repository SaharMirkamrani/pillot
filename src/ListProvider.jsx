import React, { createContext, useCallback, useEffect, useState } from 'react';

const url = 'http://site.pillot.ir/admin/Ads/API/_showads';

export const AdsContext = createContext({
  ads: [],
  getAds: () => {}
});

const AdProvider = ({ children }) => {
  const [ads, setAds] = useState([]);

  const getAds = useCallback(async () => {
    const headers = { token: 'test' };
    const response = await fetch(url, { headers });
    const data = await response.json();
    setAds(data.data);
  }, []);

  useEffect(() => {
    setAds('');
  }, [getAds]);

  return <AdsContext.Provider value={{ ads, getAds }}>{children}</AdsContext.Provider>;
};

export default AdProvider;
