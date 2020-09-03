<?php

namespace App\Http\Controllers\Time;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Time\TimeRepository;
use App\Time;

class TimeController extends Controller 
{

    private $timeRepo;    
    /**
     * __construct create user and repository 
     *
     * @param  mixed $user
     * @param  mixed $userRepo
     * @return void
     */
    public function __construct(TimeRepository $timeRepo)
    {
        $this->timeRepo = $timeRepo;
    }  
    /**
     * update user data
     *
     * @param  mixed $data
     * @param  mixed $user
     * @return void
     */
    public function show($id)
    {
        return $this->timeRepo->show($id);
    }
}