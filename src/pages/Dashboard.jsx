import BackgroundLanding from '../components/BackgroundLanding';
import DashboardSideBar from '../components/DashBoardSidebar';
import Tabs from '../components/TabGroup';
import DashContainer from '../components/DashContainer';

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <BackgroundLanding />
      <div className="my-20">
        <Tabs />
      </div>
    </div>
  );
};

export default Dashboard;
