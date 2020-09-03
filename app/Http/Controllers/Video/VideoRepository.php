<?php

namespace App\Http\Controllers\Video;

use App\Video;
use Illuminate\Support\Facades\Auth;

class VideoRepository
{
    private $video;
    /**
     * __construct create user and repository 
     *
     * @param  mixed $user
     * @param  mixed $userRepo
     * @return void
     */
    public function __construct(Video $video)
    {
        $this->video = $video;
    }    
    // public function getImagesByUser(){
    //     return Auth::user()->Video;
    // }
    // public function getByPublication($user){
    //     return $user->Video;
    //     // Auth::user()->Images;
    // }

    
}
