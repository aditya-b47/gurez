import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';

const NavBar = () => {
  const [cartCount] = useState(0);
  return (
    <nav className="bg-gray-800 p-4">
       <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="relative w-32 h-12">
                <svg viewBox="0 0 120 50" className="w-full h-full">
                  {/* Frog character */}
                  <g transform="translate(10, 5)">
                    {/* Body */}
                    <ellipse cx="15" cy="25" rx="12" ry="15" fill="#7CB342"/>
                    {/* Head */}
                    <circle cx="15" cy="15" r="10" fill="#7CB342"/>
                    {/* Eyes */}
                    <circle cx="12" cy="12" r="3" fill="white"/>
                    <circle cx="18" cy="12" r="3" fill="white"/>
                    <circle cx="12" cy="12" r="1.5" fill="black"/>
                    <circle cx="18" cy="12" r="1.5" fill="black"/>
                    {/* Smile */}
                    <path d="M 10 16 Q 15 18 20 16" stroke="black" strokeWidth="1" fill="none"/>
                    {/* Arms */}
                    <ellipse cx="5" cy="22" rx="3" ry="5" fill="#7CB342" transform="rotate(-20 5 22)"/>
                    <ellipse cx="25" cy="22" rx="3" ry="5" fill="#7CB342" transform="rotate(20 25 22)"/>
                    {/* Speed lines */}
                    <line x1="28" y1="15" x2="35" y2="12" stroke="#7CB342" strokeWidth="2"/>
                    <line x1="28" y1="20" x2="38" y2="20" stroke="#7CB342" strokeWidth="2"/>
                    <line x1="28" y1="25" x2="35" y2="28" stroke="#7CB342" strokeWidth="2"/>
                  </g>
                  {/* GUREZ text */}
                  <text x="45" y="32" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#7CB342">
                    GUREZ
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
              />
            </div>
          </div>

          {/* My Account */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition-colors">
            <User className="w-5 h-5 text-gray-200" />   
            <span className="text-sm font-medium text-gray-200 hidden sm:inline">My Account</span>
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
            <ShoppingCart className="w-6 h-6 text-gray-200" />
            <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {cartCount}
            </div>
            <span className="text-sm font-medium text-gray-200 ml-1 hidden sm:inline">Cart</span>
          </div>
        </div>
      </div>
      <ul className="flex space-x-4 align-middle px-4">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/packing-material" className="text-white">Packing Material</Link></li>
        <li><Link to="/pet-products" className="text-white">Pet Products</Link></li>
        <li><Link to="/beauty-items" className="text-white">Beauty Items</Link></li>
        <li><Link to="/wooden-items" className="text-white">Wooden Items</Link></li>
        <li><Link to="/custom-items" className="text-white">Custom Items</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar