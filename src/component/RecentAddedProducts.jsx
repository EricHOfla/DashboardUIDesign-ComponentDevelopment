

const RecentAddedProducts = ({Products, Category, Date, status}) => {
  return (
    <div className="p-4 bg-white rounded-lg flex flex-col mb-6 border-2 border-gray-200">
               <ul className="space-y-4 flex flex-row justify-between">
            <li className="items-center justify-between">
                <div className="">
                    <p className="font-bold text-xl">{Products}</p>
                 
                </div>
                <div className="pt-7">
                <p className="text-gray-500">{Category}</p>
                <span className="text-gray-400 font-semibold">{Date}</span>
               </div>
            </li>
             <span className="text-green-600 font-bold">{status}</span>
        </ul>
    </div>
  );
};

export default RecentAddedProducts;