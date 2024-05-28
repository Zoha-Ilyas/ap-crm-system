<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customers;

class CustomerController extends Controller
{
    public function index() {
        $customers = Customers::all();
        return response()->json($customers);
    }

    public function store(Request $request){
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'string|max:255',
            'email' => 'required|string|unique:customers,email',
            'country' => 'required|string|max:255',
            'street_address' => 'required|string|max:255',
            'region' => 'string|max:255',
            'city' => 'string|max:255',
            'postal_code' => 'required|string|max:255',
        ]);

        try {
            $customer = Customers::create($request->all());
            return response()->json($customer, 201);
        }catch(\Exception $e){
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function show($id){

        try {
            $customer = Customers::findOrFail($id);
            return response()->json($customer);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Customer not found'], 404);
        }
    }

    public function edit($id)
    {
        $customer = Customers::find($id);
        if (!$customer) {
            return response()->json(['message' => 'Customer not found'], 404);
        }
        return response()->json($customer);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'string|max:255',
            'email' => 'required|string|unique:customers,email,'. $id,
            'country' => 'required|string|max:255',
            'street_address' => 'required|string|max:255',
            'region' => 'string|max:255',
            'city' => 'string|max:255',
            'postal_code' => 'required|string|max:255',
    ]);

    try {
        $customer = Customers::findorFail($id);
        if (!$customer) {
            return response()->json(['message' => 'Customer not found'], 404);
        }

        $customer->update($request->all());
        return response()->json($customer);
    } catch (\Exception $e) {
        return response()->json(['message' => $e->getMessage()], 500);
    }
    }

    public function destroy($id)
    {
        $customer = Customers::findorFail($id);
        if (!$customer) {
            return response()->json(['message' => 'Customer not found'], 404);
        }

        $customer->delete();
        return response()->json(['message' => 'Customer deleted']);
    }
}
