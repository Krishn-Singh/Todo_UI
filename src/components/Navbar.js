import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-950 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* <img src={logo} alt="Todo Logo" className="mr-2" /> */}
            <div className="text-white font-bold text-xl">Todo App</div>
          </div>
          <div className="hidden md:flex space-x-4 pointer">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/task" className="text-white hover:text-gray-300">Tasks</Link>
            <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar