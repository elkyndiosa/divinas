<?php

namespace App\Http\Controllers\city;

use App\City;
class CityRepository
{
    private $city;
    /**
     * __construct create user and repository
     *
     * @param  mixed $user
     * @param  mixed $userRepo
     * @return void
     */
    public function __construct(City $city)
    {
        $this->city = $city;
    }
    public function index(){
        $cities = City::with('barrios')->get();
        return $cities;
    }


}
