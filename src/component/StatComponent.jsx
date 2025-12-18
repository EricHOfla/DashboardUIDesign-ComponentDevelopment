import React from 'react'
import { statsData } from '../pages/data/UserData'

const StatComponent = () => {
  return (
    <div className='flex gap-6 flex-wrap'>
       {statsData.map((stat, index) => (
        <div key={index} className="bg-white p-6 w-70 rounded-xl shadow-sm flex items-center space-x-4">
          <div className={`p-3 rounded-lg ${stat.iconBg}`}>{stat.icon}</div>
          <div>
            
            <p className=" font-bold text-2xl">{stat.value}</p>
            <h3 className="font-semibold text-gray-500">{stat.title}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatComponent