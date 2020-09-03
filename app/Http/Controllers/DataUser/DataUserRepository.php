<?php

namespace App\Http\Controllers\DataUser;

use App\DataUser;
class DataUserRepository
{
    private $dataUser;
    /**
     * __construct create user and repository 
     *
     * @param  mixed $user
     * @param  mixed $userRepo
     * @return void
     */
    public function __construct(DataUser $dataUser)
    {
        $this->dataUser = $dataUser;
    }    
    public function incrementFavorites($id)
    {
        DataUser::where('user_id', $id)->increment('favorites');
        return response()->json([
            'messaje' => "Data save successfull"
        ]);
    }
    public function decrementFavorites($id)
    {
        DataUser::where('user_id', $id)->decrement('favorites');
        return response()->json([
            'messaje' => "Data save successfull"
        ]);
    }
    public function incrementClicksWhatsapp($id)
    {
        DataUser::where('user_id', $id)->increment('click_whatsapp');
        return response()->json([
            'messaje' => "Data save successfull"
        ]);
    }

    
}
