import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";
import UsersTable from "../component/UsersTable";
import OverView from "../component/OverView";
import RecentAddedProducts from "../component/RecentAddedProducts";
import RecentActivity from "../component/RecentActivity";
import { recentProducts } from "./data/UserData";
import StatComponent from "../component/StatComponent";




const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <main className="flex-1  space-y-6">
        <Topbar />
        <div className="px-6">
           
        <OverView />
        </div>
      
        <div className="px-6">
        <StatComponent />
        </div>

        <div className="px-6">
        <RecentAddedProducts />

         
      </div>
      <div className="px-6">
        <UsersTable />
        </div>
        <div className="px-6">
        <RecentActivity />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
