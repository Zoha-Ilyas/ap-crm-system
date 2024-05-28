import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Spinner from '../../components/spinner';

function CustomerEdit() {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8000/api/customer/edit/${id}`).then(res => {
      console.log(res.data);  // Check the API response
      setCustomer(res.data || {});
      setLoading(false);
    }).catch(error => {
      console.error("Error fetching Customer:", error);
      setLoading(false);
    });
  }, [id]);

  console.log(customer);  // Check the user state

  const updateCustomer = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(`http://localhost:8000/api/customer/edit/${id}`, {
        first_name: customer.first_name,
        last_name: customer.last_name,
        email: customer.email,
        country: customer.country,
        street_address: customer.street_address,
        city: customer.city,
        region: customer.region,
        postal_code: customer.postal_code,
      });
      console.log(response.data);
      alert("Customer updated successfully");
      setLoading(false);
      navigate('/customer');  // Use to redirect on other page
    } catch (error) {
      console.error('Error creating customer:', error.response ? error.response.data : error);
      alert(error.response ? error.response.data.message : 'Error creating customer');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      <Navbar />
      <div className='flex md:flex-row flex-col min-h-screen'>
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
            <Link to="/dashboard" className="block py-2.5 px-4 mb-6 rounded transition duration-200 hover:bg-gray-800"><i className="fa-solid fa-gauge pe-3" style={{ color: '#fff' }}></i>Overview</Link>
          </nav>
          <Link to="/" className="text-white text-2xl font-semibold disabled">Interface</Link>
          <nav>
            <Link to="/customer" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800"><i className="fa-solid fa-users pe-3" style={{ color: '#fff' }}></i>Customers</Link>
          </nav>
        </div>
        <div className="flex-grow flex justify-center items-center">
          {/* Customer Edit form Start from here */}
          <div className='m-auto w-full max-w-xl'>
            <form onSubmit={updateCustomer}>
              <div className="border border-gray-900/10 p-12 shadow-sm bg-black rounded-md m-5">
                <h2 className="text-base font-semibold leading-7 text-white text-center">Personal Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600 text-center">Use a permanent address where you can receive mail.</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="firstNameId" className="block text-sm font-medium leading-6 text-white">
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstName"
                        id="firstNameId"
                        value={customer.first_name || ''}
                        onChange={(e) => setCustomer({ ...customer, first_name: e.target.value })}
                        autoComplete="givenName"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="lastNameId" className="block text-sm font-medium leading-6 text-white">
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="lastName"
                        id="lastNameId"
                        value={customer.last_name || ''}
                        onChange={(e) => setCustomer({ ...customer, last_name: e.target.value })}
                        autoComplete="familyName"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="emailId" className="block text-sm font-medium leading-6 text-white">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="emailId"
                        value={customer.email || ''}
                        onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="countryId" className="block text-sm font-medium leading-6 text-white">
                      Country
                    </label>
                    <div className="mt-2">
                      <select
                        id="countryId"
                        name="country"
                        value={customer.country || ''}
                        onChange={(e) => setCustomer({ ...customer, country: e.target.value })}
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 ps-3"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Pakistan</option>
                        <option>India</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="streetAddressId" className="block text-sm font-medium leading-6 text-white">
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="streetAddress"
                        id="streetAddressId"
                        value={customer.street_address || ''}
                        onChange={(e) => setCustomer({ ...customer, street_address: e.target.value })}
                        autoComplete="streetAddress"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="cityId" className="block text-sm font-medium leading-6 text-white">
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="cityId"
                        value={customer.city || ''}
                        onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                        autoComplete="addressLevel2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="regionId" className="block text-sm font-medium leading-6 text-white">
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="region"
                        id="regionId"
                        value={customer.region || ''}
                        onChange={(e) => setCustomer({ ...customer, region: e.target.value })}
                        autoComplete="addressLevel1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="postalCodeId" className="block text-sm font-medium leading-6 text-white">
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postalCode"
                        id="postalCodeId"
                        value={customer.postal_code || ''}
                        onChange={(e) => setCustomer({ ...customer, postal_code: e.target.value })}
                        autoComplete="postalCode"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center gap-x-8">
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Update Customer
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* Customer Edit form End here */}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none fixed z-50 bottom-4 right-4 md:hidden bg-black p-2 rounded-full"
        >
          ☰
        </button>
      </div>
      <Footer />
    </>
  );
}

export default CustomerEdit;
