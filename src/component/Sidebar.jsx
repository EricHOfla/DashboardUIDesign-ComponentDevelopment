import React from 'react';
import {Layers, Laptop, List, Package, Users, TextAlignCenter, LogOut, } from "lucide-react"

export default function Sidebar() {
  return (
     <aside className="w-64 h-screen bg-white text-black p-5">
      <div className="flex flex-row">
    <div className='p-2 bg-blue-600 rounded m-3'>
        <Package className="text-white" size={30} />
    </div>
      <div className="pt-2">
        <h1 className="text-2xl font-bold">iHUZA </h1>
      <p className="text-sm font-semibold">INVENTORY</p>
      </div>
     </div>
      <nav className="space-y-2 pt-10">
        <a className="block px-4 py-2 rounded bg-blue-100 text-blue-700">
          <Laptop className="inline mr-2" size={16} />
          Dashboard</a>
        <a className="block px-4 py-2 rounded hover:bg-white/20">
        <Users className="inline mr-2" size={16} />
        Users</a>
        <a className="block px-4 py-2 rounded hover:bg-white/20">
        <Package className="inline mr-2" size={16} />
        Products</a>
        <a className="block px-4 py-2 rounded hover:bg-white/20">
        <TextAlignCenter className="inline mr-2" size={16} />
        Assignments</a>
        <a className="block px-4 py-2 rounded hover:bg-white/20">
        <Layers className="inline mr-2" size={16} />
        Categories</a>

        <a className="block px-4 py-2 mt-80">
          <LogOut className="inline mr-2" size={16} />
          Logout
        </a>
      </nav>
    </aside>
  );
}
