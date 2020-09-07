<?php

namespace App\Http\Controllers\City;
use App\Http\Controllers\Controller;
use App\Http\Controllers\City\CityRepository;
use App\City;

class CityController extends Controller
{

    private $cityRepo;
    /**
     * __construct create user and repository
     *
     * @param  mixed $user
     * @param  mixed $userRepo
     * @return void
     */
    public function __construct(CityRepository $cityRepo)
    {
        $this->cityRepo = $cityRepo;
    }
    /**
     * update user data
     *
     * @param  mixed $data
     * @param  mixed $user
     * @return void
     */
    public function index()
    {
        $cities = $this->cityRepo->index();
        return response()->json(compact('cities'), 200);
    }
}
