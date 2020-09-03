<?php

namespace App\Http\Controllers\DataUser;
use App\Http\Controllers\Controller;
use App\Http\Controllers\DataUser\DataUserRepository; 
use App\DataUser;
use App\User;
use Illuminate\Support\Facades\Auth;

class DataUserController extends Controller 
{

    private $dataUserRepo;    
    /**
     * __construct create user and repository 
     *
     * @param  mixed $user
     * @param  mixed $userRepo
     * @return void
     */
    public function __construct(DataUserRepository $dataUserRepo)
    {
        $this->dataUserRepo = $dataUserRepo;
    }  

    public function incrementFavorites(User $uuid)
    {
        return $this->dataUserRepo->incrementFavorites($uuid->id);
    }
    public function decrementFavorites(User $uuid)
    {
        return $this->dataUserRepo->decrementFavorites($uuid->id);
    }
    public function incrementClicksWhatsapp(User $uuid)
    {
        return $this->dataUserRepo->incrementClicksWhatsapp($uuid->id);
    }
    public function index()
    {
        return Auth::user()->DataUser;
    }
}