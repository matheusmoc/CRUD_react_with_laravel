<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DeluxeController;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('get/deluxe/list', [DeluxeController::class, 'getDeluxeRideList'])->name('deluxe.list');
Route::post('get/individual/deluxe/details', [DeluxeController::class, 'getDeluxeRideDetails'])->name('deluxe.details');
Route::post('get/update/deluxe/data',[DeluxeController::class, 'getDeluxeUpdateData'])->name('deluxe.update');
Route::delete('get/delete/deluxe/data/{deluxe}',[DeluxeController::class, 'getDeluxeDestroyData'])->name('deluxe.destroy');
Route::post('get/store/deluxedata/',[DeluxeController::class, 'getDeluxeStoreData']);