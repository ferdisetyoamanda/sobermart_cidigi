import React from 'react';
import { Link } from 'react-router-dom';

function TopAppBar() {
  return (
    <div className="flex justify-between items-center p-2 bg-gray-100 text-black text-sm border-b border-gray-300">
      <div className="space-x-4 flex items-center">
        <Link to="/about" className="hover:text-blue-600 ">Tentang Kami</Link>
        <span className="border-l border-gray-400 h-3 my-1 mx-2"></span>
        <Link to="/favorite-list" className="hover:text-blue-600">Daftar Favorit</Link>
      </div>
      <div className="space-x-4 flex items-center">
        <select className="bg-transparent text-black hover:text-blue-600">
          <option value="id">Bahasa: Indonesia</option>
          
          <option value="en">Bahasa: Inggris</option>
        </select>
        <select className="bg-transparent text-black hover:text-blue-600">
          <option value="idr">Mata Uang: IDR</option>
          
          <option value="usd">Mata Uang: USD</option>
        </select>
        <span className="border-l border-gray-400 h-3 my-1 mx-2"></span>
        <Link to="/login" className="hover:text-blue-600">Masuk</Link>
        <span className="border-l border-gray-400 h-3 my-1 mx-2"></span>
        <Link to="/register" className="hover:text-blue-600">Daftar</Link>
      </div>
    </div>
  );
}

export default TopAppBar;
