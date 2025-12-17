import { recentProducts } from "../pages/data/UserData";

const RecentAddedProducts = () => {
 
  return (
  <div className="p-8 bg-gray-50 border border-gray-200 rounded-lg">
      <h1 className="text-xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-2">Recent Added Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentProducts.map((product, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg border border-gray-200 p-6"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{product.Products}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2
               ${product.status === 'In Stock' ? 'bg-green-100 text-green-700' : product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                {product.status}
              </span>
            </div>
            
            <p className="text-gray-600 text-sm mb-2">{product.Category}</p>
            <p className="text-gray-500 text-sm">{product.Date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentAddedProducts;