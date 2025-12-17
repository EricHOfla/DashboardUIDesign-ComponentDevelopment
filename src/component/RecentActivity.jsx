import { activities, quickActions } from "../pages/data/UserData";

export default function RecentActivity() {
  

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6 border-b-2 border-gray-200 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Activity
          </h2>
          <button className="text-sm text-gray-600 hover:underline font-semibold">
            View all
          </button>
        </div>

        <div className="space-y-5">
          {activities.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${item.iconBg}`}
              >
                {item.icon}
              </div>

              <div>
                <p className="font-medium text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 border-b-2 border-gray-200 pb-4">
          Quick Actions
          
        </h2>
   
        <div className="space-y-4">
          {quickActions.map((action) => (
            <div
              key={action.id}
              className={`flex items-center justify-between p-5 rounded-lg ${action.bg}`}
            >
              <div className="flex gap-4 items-center">
                <span className="text-xl">{action.icon}</span>
                <div>
                  <p className="font-medium text-gray-900">{action.title}</p>
                  <p className="text-sm text-gray-500">
                    {action.description}
                  </p>
                </div>
              </div>

              <button
                className={`text-white px-4 py-1.5 rounded-lg text-sm ${action.btn}`}
              >
                Go
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
