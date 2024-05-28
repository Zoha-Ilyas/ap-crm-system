import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import Spinner from '../../components/spinner';

function CustomerList() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/customer/customers`)
        .then(res => {
            setCustomers(res.data);
            setLoading(false);
        })
        .catch(error => {
            console.log("Error Fetching Customer", error);
            setLoading(false);
        })
    }, []);

    const deleteCustomer = (event, id) => {
        event.preventDefault();
        const thisClicked = event.currentTarget;
        thisClicked.innerText = "Del...";

        try{
            axios.delete(`http://localhost:8000/api/customer/delete/${id}`);
            alert('Do you wanna remove it Permanently?');
            setLoading(false);

            thisClicked.closest("tr").remove();
            navigate('/customer');
        }catch (error) {
            console.error('Error deleting Customer:', error.response? error.response.data : error);
            alert(error.response? error.response.data.message : 'Error deleting Customer');
            setLoading(false);     
        }
    }

    if(loading){
        return(
            <Spinner />
        )
    }

    var customerDetails = "";
    customerDetails = customers.map((customer, index) => {
        return(
            <tr key={index} className='text-center border-b-2 py-4'>
                <td className='py-3'>{customer.id}</td>
                <td className='py-3'>{customer.first_name}</td>
                <td className='py-3'>{customer.last_name}</td>
                <td className='py-3'>{customer.email}</td>
                <td className='py-3'>{customer.country}</td>
                <td className='py-3'>{customer.street_address}</td>
                <td className='py-3'>{customer.city}</td>
                <td className='py-3'>{customer.postal_code}</td>
                <td className='py-3'>{customer.region}</td>
                <td className='flex gap-3 justify-center items-center py-3'>
                    <Link to={`/customer/${customer.id}/edit`}>
                        <i className="fa-solid fa-pen-to-square" style={{color: 'blue'}}></i>
                    </Link>
                    <button onClick={(e) => deleteCustomer(e, customer.id)}>
                        <i className="fa-solid fa-delete-left" style={{color: 'red'}}></i>
                    </button>
                </td>
            </tr>
        );
    });

  return (
    <div className="w-full md:w-5/5">
    <div className="container mx-auto px-4 sm:px-8 py-4">
        <div className="py-2">
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal border">
                        <thead>
                            <tr>
                                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
                                    Sr. No
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
                                    First Name
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
                                    Last Name
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
                                    Country
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
                                    Address
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
                                    City
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
                                    Postal Code
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
                                    State
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                          {customerDetails}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    <div className='flex justify-end'>
        <Link to="/customer/form">
            <button className='bg-black text-white py-2 px-6 rounded-md'>
                +Add New
            </button>
        </Link>
    </div>
    </div>
  </div>
  )
}

export default CustomerList