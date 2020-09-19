<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::apiResource('/publication', 'Publication\PublicationController');
Route::get('/get-week', 'Publication\PublicationController@getWeek');
Route::get('/cities', 'City\CityController@index');
Route::get('/services', 'Service\ServiceController@index');
Route::get('/time/{id}', 'Time\TimeController@show');
Route::get('/images', 'Image\ImageController@index');
Route::get('/images/publication/{uuid}', 'Image\ImageController@getByPublication');

Route::get('/increment/clickwatsapp/{uuid}', 'DataUser\DataUserController@incrementClicksWhatsapp');
Route::get('/increment/favorites/{uuid}', 'DataUser\DataUserController@incrementFavorites');
Route::get('/decrement/favorites/{uuid}', 'DataUser\DataUserController@decrementFavorites');
Route::get('/data', 'DataUser\DataUserController@index');
Route::group(['middleware' => ['auth']], function () {
    Route::apiResource('user', 'User\UserController');
    Route::post('/upload/image', 'Image\ImageController@create');
    Route::post('/upload/video', 'Video\VideoController@create');
    Route::get('/destroy/images/{uuid}', 'Image\ImageController@destroy');
    Route::get('/profile/image/{name}', 'User\UserController@saveImageProfile');
    Route::get('/publications/{uuid}', 'Publication\PublicationController@indexByUser');
});

