<?php

namespace App\Http\Controllers\Time;

use App\Time;
class TimeRepository
{
    private $time;
    /**
     * __construct create user and repository 
     *
     * @param  mixed $user
     * @param  mixed $userRepo
     * @return void
     */
    public function __construct(Time $time)
    {
        $this->time = $time;
    }    
    public function show($id){
        return Time::findOrFail($id);
    }

    
}
