import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../components/spinner';

function CustomerForm() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [loading, setLoading] = useState(false);
  const toastify = () => 
    toast.success('🦄 Customer Saved Succesfully!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: "Bounce",
      });

  const SubmitHandler = async(e) => {
    e.preventDefault();
    setLoading(true); 
    try{
      const res = await axios.post(`http://localhost:8000/api/customer/customers`, {
        first_name: firstName,
        last_name: lastName,
        email,
        country,
        street_address: streetAddress,
        city,
        region,
        postal_code: postalCode
      });
      console.log(res.data);
      alert("Customer Created Successfully!");
      setLoading(false);
      setFirstName('');
      setLastName('');
      setEmail('');
      setCountry('');
      setRegion('');
      setStreetAddress('');
      setCity('');
      setPostalCode('');
      navigate('/customer');
    }catch(error){
      console.log("Error Creating customer:", error.res ? error.res.data : error);
      alert(error.res ? error.res.message.data : "Error creating Customer");
      setLoading(false);
    }
  };

  if(loading){
    return(
      <Spinner />
    )
  }

  return (
  <div className='m-auto'>
    <form onSubmit={SubmitHandler}>
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={country}
              onChange={(e) => setCountry(e.target.value)}
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
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
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
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
              value={region}
              onChange={(e) => setRegion(e.target.value)}
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
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              autoComplete="postalCode"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-x-8">
        <button
          type="submit"
          onClick={toastify}
          className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save Customer
        </button>
        <ToastContainer />
    </div>
    </div>
    </form>
  </div>
  )
}

export default CustomerForm