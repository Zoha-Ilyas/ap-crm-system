import React from 'react';

const data = [
    { name: "John Doe", email: "john@example.com", joined: "2023-01-15", status: "Active", userType: "Admin" },
    { name: "Jane Smith", email: "jane@example.com", joined: "2022-11-23", status: "Inactive", userType: "User" },
    { name: "Bob Johnson", email: "bob@example.com", joined: "2022-08-17", status: "Active", userType: "Admin" },
    { name: "Alice Williams", email: "alice@example.com", joined: "2022-05-01", status: "Active", userType: "User" },
    { name: "Charlie Brown", email: "charlie@example.com", joined: "2022-02-20", status: "Inactive", userType: "User" },
    { name: "Samantha Davis", email: "samantha@example.com", joined: "2021-12-12", status: "Active", userType: "Admin" },
    { name: "David Thompson", email: "david@example.com", joined: "2021-09-15", status: "Active", userType: "User" },
    { name: "Emily Johnson", email: "emily@example.com", joined: "2021-06-22", status: "Inactive", userType: "User" },
];

const Table = () => {
    return (
        <div className="w-full md:w-3/5">
            <div className="container mx-auto px-4 sm:px-8 py-4">
                <div className="py-2">
                    <div className="overflow-x-auto">
                        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal border">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
                                            Joined
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider">
                                            User Type
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((user, index) => (
                                        <tr key={index} className='text-center'>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{user.name}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{user.joined}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${user.status === "Active" ? "text-green-900" : "text-red-900"}`}>
                                                    <span aria-hidden="true" className={`absolute inset-0 ${user.status === "Active" ? "bg-green-200" : "bg-red-200"} opacity-50 rounded-full`}></span>
                                                    <span className="relative">{user.status}</span>
                                                </span>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{user.userType}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
