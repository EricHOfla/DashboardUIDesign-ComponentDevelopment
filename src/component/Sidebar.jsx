import React from 'react';
import { Layers, Laptop, Menu, Package, Users, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 p-6">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-8">
        <div className='p-3 bg-blue-600 rounded-xl'>
          <Package className="text-white" size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">iHUZA</h1>
          <p className="text-xs font-medium text-gray-500 tracking-wide">INVENTORY</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        {/* Dashboard - Active */}
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 text-blue-600 font-medium">
          <Laptop size={20} />
          <span>Dashboard</span>
        </a>

        {/* Users */}
        <a className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium group cursor-pointer">
          <div className="flex items-center gap-3">
            <Users size={20} className="text-gray-400 group-hover:text-gray-600" />
            <span>Users</span>
          </div>
          <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            116
          </span>
        </a>

        {/* Products */}
        <a className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium group cursor-pointer">
          <div className="flex items-center gap-3">
            <Package size={20} className="text-gray-400 group-hover:text-gray-600" />
            <span>Products</span>
          </div>
          <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            100
          </span>
        </a>

        {/* Assignments */}
        <a className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium group cursor-pointer">
          <div className="flex items-center gap-3">
            <Menu size={20} className="text-gray-400 group-hover:text-gray-600" />
            <span>Assignments</span>
          </div>
          <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            10
          </span>
        </a>

        {/* Categories */}
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium group cursor-pointer">
          <Layers size={20} className="text-gray-400 group-hover:text-gray-600" />
          <span>Categories</span>
        </a>
      </nav>

      {/* Logout - Bottom */}
      <div className="absolute bottom-6">
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium group cursor-pointer">
          <LogOut size={20} className="text-gray-400 group-hover:text-gray-600" />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
}