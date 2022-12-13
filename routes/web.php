<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DeluxeController;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/get/deluxe/list', [DeluxeController::class, 'getDeluxeRideList'])->name('deluxe.list');

