import BackgroundLanding from '../components/BackgroundLanding';
import BreadCrumb from '../components/BreadCrumb';
import AdDesc from '../components/AdDesc';
import axios from 'axios';
import { useCallback, useState, useEffect } from 'react';
import {useLocation} from "react-router-dom"

const singleAdUrl = 'http://site.pillot.ir/admin/Ads/API/_chooseAds';

const AdPage = () => {
  const {pathname} = useLocation();
  const id = pathname.split("/")[2];
  console.log(id)
  const [singleAd, setSingleAd] = useState({});
  const [loading, setLoading] = useState(true);

  const getSingleAd = useCallback(async () => {
    setLoading(true);
    axios
      .post(
        singleAdUrl,
        {
          ad_id: id
        },
        {
          headers: {
            token: 'test'
          }
        }
      )
      .then(response => {
        setLoading(false);
        setSingleAd(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    getSingleAd();
  }, [getSingleAd]);

  return (
    <div className="min-h-screen">
      <BackgroundLanding />
      <BreadCrumb singleAd={singleAd} />
      <AdDesc singleAd={singleAd} loading={loading} />
    </div>
  );
};

export default AdPage;
