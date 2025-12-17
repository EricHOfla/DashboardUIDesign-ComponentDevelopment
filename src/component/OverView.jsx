import { CircleCheckBig, Package } from "lucide-react";

const OverView = () => {
  return (
    <div className="bg-blue-500 p-6 rounded-xl w-full shadow-sm">
      <h3 className="text-2xl p-1 font-bold  text-white">
        <Package className="inline mr-2 p-2 bg-blue-400 rounded" size={40} />
        iHUZA INVENTORY - System Overview</h3>
      <p className="px-13  text-white">Monitor your iHUZA inventory and product assignments in real-time.</p>
      <p className="px-12 mt-3 text-white">
        <CircleCheckBig className="inline mr-2 p-1 text-green-500" size={30} />
         All Systems Operational</p>
    </div>
  );
};

export default OverView;
