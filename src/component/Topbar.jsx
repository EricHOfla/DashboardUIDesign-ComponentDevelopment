import React from 'react';
import UserCircleIcon from '@heroicons/react/24/solid/UserCircleIcon';
import SettingIcon from '@heroicons/react/24/solid/Cog6ToothIcon';
import NotificationIcon from '@heroicons/react/24/solid/BellIcon';
import DarkIcon from '@heroicons/react/24/solid/MoonIcon';

const Topbar = () => {
  return (
    <div className="bg-white p-5 rounded-xl flex justify-between items-center">
      <div >
        <h2 className="text-2xl font-bold ">Dashboard</h2>
        <h3 className="text-l font-semibold">Welcome Back, Admin</h3>
      
      </div>
      <div>
        <div className="flex items-center space-x-4"> 
          <DarkIcon className="w-6 h-6 text-gray-400 cursor-pointer" />
          <SettingIcon className="w-6 h-6 text-gray-400 cursor-pointer" /> 
          <div>
          <NotificationIcon className="w-6 h-6 text-gray-400 cursor-pointer relative" />
           <p className='bg-red-600 absolute p-1.5 rounded-2xl top-6 mx-4'></p>
           </div>
                <p className="text-gray-500 text-sm">admin@ihuza.com</p>
                <UserCircleIcon className="w-10 h-10 text-blue-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
