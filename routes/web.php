<?php
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'web'], function () {
    Route::get('/{option?}/{op?}/{opt?}/{opti?}/{opti4?}/{opti5?}/{opti2?}', function () {
        return view('home');
    });
    Auth::routes();
});
