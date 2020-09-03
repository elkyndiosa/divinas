<?php

namespace App\Http\Controllers\Service;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Service\ServiceRepository; 
use App\Service;

class ServiceController extends Controller 
{

    private $serviceRepo;    
    /**
     * __construct create user and repository 
     *
     * @param  mixed $user
     * @param  mixed $userRepo
     * @return void
     */
    public function __construct(ServiceRepository $serviceRepo)
    {
        $this->serviceRepo = $serviceRepo;
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
        return $this->serviceRepo->index();
    }
}