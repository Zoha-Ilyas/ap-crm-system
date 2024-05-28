// SideContentBar.jsx
import React from 'react';
import SimpleChart from './charts/simpleChart';
import Table from './table';
import Messages from './messages';

function SideContentBar() {
  return (
    <div className="bg-white w-full h-screen overflow-y-auto p-6">
      {/* Your side content goes here */}
      <div className="flex flex-wrap mb-6">
        <div className="w-full sm:w-1/2 lg:w-1/6 p-2">
          <div className="text-black text-center mb-3 max-w-xs bg-transparent shadow-lg border">
            <div className="flex items-center justify-around p-4">
              <i className="fa-solid fa-earth-americas fa-xl" style={{color: '#B3005E'}}></i>
              <div>
                <p>Profit</p>
                <h2 className="font-bold">37%</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/6 p-2">
          <div className="text-black text-center mb-3 max-w-xs bg-transparent shadow-lg border">
            <div className="flex items-center justify-around p-4">
              <i className="fa-solid fa-person-biking fa-xl" style={{color: '#FFFF00'}}></i>
              <div>
                <p>Delivery</p>
                <h2 className="font-bold">240</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/6 p-2">
          <div className="text-black text-center mb-3 max-w-xs bg-transparent shadow-lg border">
            <div className="flex items-center justify-around p-4">
              <i className="fa-solid fa-sack-dollar fa-xl" style={{color: '#570A57'}}></i>
              <div>
                <p>Increase</p>
                <h2 className="font-bold">20%</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/6 p-2">
          <div className="text-black text-center mb-3 max-w-xs bg-transparent shadow-lg border">
            <div className="flex items-center justify-around p-4">
              <i className="fa-solid fa-shop fa-xl" style={{color: '#14C38E'}}></i>
              <div>
                <p>Sales</p>
                <h2 className="font-bold">320</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/6 p-2">
          <div className="text-black text-center mb-3 max-w-xs bg-transparent shadow-lg border">
            <div className="flex items-center justify-around p-4">
              <i className="fa-solid fa-border-all fa-xl" style={{color: '#6F4E37'}}></i>
              <div>
                <p>Marketing</p>
                <h2 className="font-bold">68%</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/6 p-2">
          <div className="text-black text-center mb-3 max-w-xs bg-transparent shadow-lg border">
            <div className="flex items-center justify-around p-4">
              <i className="fa-solid fa-truck-ramp-box fa-xl" style={{color: '#B197FC'}}></i>
              <div>
                <p>Purchases</p>
                <h2 className="font-bold">383</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SimpleChart />
      </div>
      <div className='my-7 flex flex-col md:flex-row'>
        <Table />
        <Messages />
      </div>
    </div>
  );
}

export default SideContentBar;
