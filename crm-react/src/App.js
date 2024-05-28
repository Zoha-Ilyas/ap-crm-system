import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import CustomerFormDisplay from './pages/customer/customerFormDisplay';
import Customer from './pages/customer/customer';
import CustomerEdit from './pages/customer/customerEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* DASHBOARD */}
        <Route index element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        {/* CUSTOMER */}
        <Route path='customer' element={<Customer />} />
        <Route path='customer/form' element={<CustomerFormDisplay />} />
        <Route path='customer/:id/edit' element={<CustomerEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
