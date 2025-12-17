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

        <div className="bg-white  rounded-xl p-5 mx-6">
      <div className=" ">
        <div className="border-b-2 border-gray-200 py-4 px-3">

        <h3 className="font-semibold text-lg">Recently Added Products</h3>
        </div>
        
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 w-full ">
            {recentProducts.map((products, index) => (
              <RecentAddedProducts
                key={index} 
                Products={products.Products} 
                Category={products.Category} 
                Date={products.Date}
                status={products.status}
             />
            ))}
        </div>

         </div>
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
