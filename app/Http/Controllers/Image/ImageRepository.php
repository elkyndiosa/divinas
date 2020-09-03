<?php

namespace App\Http\Controllers\Image;

use App\Image;
use Illuminate\Support\Facades\Auth;

class ImageRepository
{
    private $image;
    /**
     * __construct create user and repository 
     *
     * @param  mixed $user
     * @param  mixed $userRepo
     * @return void
     */
    public function __construct(Image $image)
    {
        $this->image = $image;
    }    
    public function getImagesByUser(){
        return Auth::user()->Images;
    }
    public function getByPublication($user){
        return $user->Images;
        // Auth::user()->Images;
    }

    
    public function destroy($uuid){
        
        $filename = 'uploads/images/'.$uuid->path;
        if(file_exists($filename)){
            unlink($filename);
            $uuid->delete();
            return response()->json([
                'message' => 'Deleted file',
                'status' => 201
            ], 201);
        }else{
        return response()->json([
            'message' => 'Your data has been successfully delete',
            'status' => 201
        ], 201);
    }
    }
    
}
