const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-xl w-full shadow-sm">
        <h2 className="text-3xl font-bold">{value}</h2>
      <p className="text-gray-500 text-sm">{title}</p>
      
    </div>
  );
};

export default StatCard;
