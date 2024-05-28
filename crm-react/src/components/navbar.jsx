import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileImg from '../assets/images/profile.jpg'

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side (Logo or Title) */}
        <div className="text-white text-lg font-semibold">
          Customer Relationship Management
        </div>

        {/* Center (Search Field) */}
        <div className="flex-grow flex sm:flex-col md:flex-row justify-end items-center mx-9">
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-40 py-2 px-4 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
            style={{width: '100%'}}
          />
        </div>

        {/* Right side (Admin Button) */}
        <div className="text-white relative inline-block">
          <button 
            onClick={toggleDropdown}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <div className='bg-black' style={{width: '40px', height: '40px', borderRadius: '50%' }}>
                <img src={ProfileImg} alt="profile" style={{width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover'}} />
            </div>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
              <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Profile</Link>
              <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Settings</Link><hr />
              <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 font-bold">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
