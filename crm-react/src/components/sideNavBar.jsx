import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideContentBar from './sideContentBar';

function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex md:flex-row flex-col'>
      <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'} bg-black opacity-50 md:hidden`} onClick={() => setIsOpen(false)}></div>
      <div className={`bg-black text-white w-60 space-y-6 py-7 px-3 fixed h-screen inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-50`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none md:hidden absolute top-2 right-2"
        >
          ✕
        </button>
        <Link to="/" className="text-white text-2xl font-semibold disabled">Dashboard</Link>
        <nav>
          <Link to="/dashboard" className="block py-2.5 px-4 mb-6 rounded transition duration-200 hover:bg-gray-800"><i className="fa-solid fa-gauge pe-3" style={{color: '#fff'}}></i>Overview</Link>
        </nav>
        <Link to="/" className="text-white text-2xl font-semibold disabled">Interface</Link>
        <nav>
          <Link to="/customer" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800"><i className="fa-solid fa-users pe-3" style={{color: '#fff'}}></i>Customers</Link>
          {/* <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800"><i className="fa-solid fa-sitemap pe-3" style={{color: '#fff'}}></i>Sales</Link>
          <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800"><i className="fa-solid fa-bullhorn pe-3" style={{color: '#fff'}}></i>Marketing</Link>
          <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800"><i className="fa-solid fa-chart-simple pe-3" style={{color: '#fff'}}></i>Analytics</Link>
          <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800"><i className="fa-solid fa-gears pe-3" style={{color: '#fff'}}></i>Settings</Link>
          <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800"><i className="fa-solid fa-bullseye pe-3" style={{color: '#fff'}}></i>Help & Support</Link> */}
        </nav>
      </div>
      {/* SideContentBar */}
      {/* <div className={`flex-grow bg-white w-full h-screen overflow-y-auto p-6 md:ml-60 ${isOpen ? 'hidden' : 'block'} md:block`}> */}
        <SideContentBar />
      {/* </div> */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none fixed z-50 bottom-4 right-4 md:hidden bg-black p-2 rounded-full"
      >
        ☰
      </button>
    </div>
  );
}

export default SideNavbar;