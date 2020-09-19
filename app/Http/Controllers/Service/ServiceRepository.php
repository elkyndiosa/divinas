<?php

namespace App\Http\Controllers\Service;

use App\Service;
use Illuminate\Support\Facades\Auth;

class ServiceRepository
{
    private $service;
    /**
     * __construct create user and repository
     *
     * @param  mixed $user
     * @param  mixed $userRepo
     * @return void
     */
    public function __construct(Service $service)
    {
        $this->service = $service;
    }
    public function index(){
        $services = Service::all();
        $servicesUser = [];

        if(Auth::check())
            $servicesUser = Auth::user()->services;

        return response()->json([
            'services' => $services,
            'servicesUser' => $servicesUser
        ], 200);
    }


}
