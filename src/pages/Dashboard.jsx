import BackgroundLanding from '../components/BackgroundLanding';
import Tabs from '../components/TabGroup';

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <BackgroundLanding />
      <div className="my-20 h-max">
        <Tabs />
      </div>
    </div>
  );
};

export default Dashboard;
