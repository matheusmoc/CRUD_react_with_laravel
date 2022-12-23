<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DeluxeController;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/get/deluxe/list', [DeluxeController::class, 'getDeluxeRideList'])->name('deluxe.list');
Route::get('/get/individual/deluxe/details', [DeluxeController::class, 'getDeluxeRideDetails'])->name('deluxe.details');
Route::get('/get/update/deluxe/data',[DeluxeController::class, 'getDeluxeUpdateData'])->name('deluxe.update');
