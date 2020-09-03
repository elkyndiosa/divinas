<?php

namespace App\Http\Controllers\Image;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Image\ImageRepository; 
use App\Http\Controllers\Image\Requests\ImageSaveRequest;
use App\Image;
use App\User;
use Illuminate\Support\Facades\Auth;

class ImageController extends Controller 
{

    private $imageRepo;    
    /**
     * __construct create user and repository 
     *
     * @param  mixed $user
     * @param  mixed $userRepo
     * @return void
     */
    public function __construct(ImageRepository $imageRepo)
    {
        $this->imageRepo = $imageRepo;
    }
    public function index(){
        return $this->imageRepo->getImagesByUser();
    }
    public function getByPublication(User $uuid){
        return $this->imageRepo->getByPublication($uuid);
    }
    public function create(ImageSaveRequest $request){
       
        if (!empty($_FILES)) {    

            $file = $_FILES['file'];
            $name_file = $file['name'];
            $tmp_name_file = $file['tmp_name'];
            $replace = array(" ", "(", ")");
            $image_path = time().str_replace($replace,"", $name_file);
            if (!is_dir('uploads/images')) {
                mkdir('uploads/images', 0777, true);
            }
            
            move_uploaded_file($tmp_name_file, 'uploads/images/' . $image_path);
            
            return $this->saveName( $image_path);
        } else { echo 'error: no file'; }
    }
    public function saveName($name){
        return Image::create([
            'path' => $name,
            'user_id' =>Auth::user()->id,
        ]);
    }
    public function destroy(Image $uuid){
        $this->authorize('userIsOwner', $uuid);
        return $this->imageRepo->destroy($uuid);
    }
}