<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Customer\CustomerController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['prefix' => 'customer'], function() {
    Route::get('/customers', [CustomerController::class, 'index'] );
    Route::post('/customers', [CustomerController::class, 'store'] );
    Route::get('/{id}', [CustomerController::class, 'show'] );
    Route::get('/edit/{id}', [CustomerController::class, 'edit'] );
    Route::put('/edit/{id}', [CustomerController::class, 'update'] );
    Route::delete('/delete/{id}', [CustomerController::class, 'destroy'] );
});