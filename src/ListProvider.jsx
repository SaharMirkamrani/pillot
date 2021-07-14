import React, { createContext, useCallback, useEffect, useState, useReducer } from 'react';
import reducer from './reducers/filter-reducer';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const url = 'http://site.pillot.ir/admin/Ads/API/_showads';


export const AdsContext = createContext();

const AdProvider = ({ children }) => {
  const [ads, setAds] = useState([]);
  const [filteredBy, setFilteredBy] = useState('');
  const [isPhoto, setIsPhoto] = useState(false);
  const [isUrgent, setIsUrgent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState('');
  const [singleAd, setSingleAd] = useState({})

  const { pathname } = useLocation();
  const path = pathname.split('/')[2];

  const getAds = useCallback(async () => {
    setLoading(true);
    const headers = { token: 'test' };
    const response = await fetch(url, { headers });
    const data = await response.json();
    let temp = data.data;

    if (path === 'buyandsell') {
      console.log('buy');
      let filtered = temp.filter(item => item.assignment_id.includes('فروش'));
      setLoading(false);
      setAds(filtered);
    } else if (path === 'rentandmortgage') {
      console.log('rent');
      let filtered = temp.filter(item => item.assignment_id.includes('اجاره'));
      setLoading(false);
      setAds(filtered);
    } else {
      console.log('else');
      setLoading(false);
      setAds(data.data);
    }

    if (isPhoto || filteredBy) {
      if (path !== 'buyandsell' && path !== 'rentandmortgage') {
        setIsPhoto(false);
        setFilteredBy('');
      }

      if (isPhoto) {
        console.log('photo');
        let filtered = temp.filter(item => item.house_image !== '');
        setLoading(false);
        setAds(filtered);
      } else if (filteredBy) {
        console.log('filterby');
        let filtered = temp.filter(item => item.assignment_id.trim() === filteredBy || item.housetype_id === filteredBy);
        setLoading(false);
        setAds(filtered);
      }
    }
  }, [filteredBy, isPhoto, path]);


  useEffect(() => {
    getAds();
  }, [getAds]);



  console.log(ads);

  return (
    <AdsContext.Provider
      value={{ ads, getAds, setFilteredBy, isPhoto, setIsPhoto, isUrgent, setIsUrgent, loading, state, setState }}
    >
      {children}
    </AdsContext.Provider>
  );
};

export default AdProvider;
