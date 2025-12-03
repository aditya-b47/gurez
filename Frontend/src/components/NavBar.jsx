import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
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