<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\User\UserRepository; 
use App\Http\Controllers\User\Requests\UserUpdateRequest;
use App\User;

class UserController extends Controller 
{

    private $userRepo;    
    /**
     * __construct create user and repository 
     *
     * @param  mixed $user
     * @param  mixed $userRepo
     * @return void
     */
    public function __construct(UserRepository $userRepo)
    {
        $this->userRepo = $userRepo;
    }  
    /**
     * update user data
     *
     * @param  mixed $data
     * @param  mixed $user
     * @return void
     */
    public function update(UserUpdateRequest $data, User $user)
    {
        return $this->userRepo->update($data, $user);
    }
    public function saveImageProfile($nameImage)
    {
        return $this->userRepo->saveImageProfile($nameImage);
    }
}