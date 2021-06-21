import BackgroundLanding from '../components/BackgroundLanding';
import BreadCrumb from '../components/BreadCrumb';
import AdDesc from '../components/AdDesc';

const AdPage = () => {
  return (
    <div className="min-h-screen">
      <BackgroundLanding />
      <BreadCrumb />
      <AdDesc />
    </div>
  );
};

export default AdPage;
