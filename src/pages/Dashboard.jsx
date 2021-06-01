import BackgroundLanding from '../components/BackgroundLanding';
import DashboardCard from '../components/DashboardCard';
import DashboardSideBar from '../components/DashBoardSidebar';

const Dashboard = () => {
  return (
    <>
      <BackgroundLanding />
			<div className="md:flex md:justify-center my-20">
				<DashboardSideBar/>
        <DashboardCard />
			</div>
			
    </>
  );
};

export default Dashboard;
