<?php

namespace App\Http\Controllers\Video;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Video\VideoRepository; 
use App\Http\Controllers\Video\Requests\VideoSaveRequest;
use App\Video;
use App\User;
use VideoThumbnail;
use Illuminate\Support\Facades\Auth;

class VideoController extends Controller 
{

    private $videoRepo;    
    /**
     * __construct create user and repository 
     *
     * @param  mixed $user
     * @param  mixed $userRepo
     * @return void
     */
    public function __construct(VideoRepository $videoRepo)
    {
        $this->videoeRepo = $videoRepo;
    }
    // public function index(){
    //     return $this->videoRepo->getImagesByUser();
    // }
    // public function getByPublication(User $uuid){
    //     return $this->videoRepo->getByPublication($uuid);
    // }
    public function create(VideoSaveRequest $request){
        if (!empty($_FILES)) {    
            $file = $_FILES['file'];
            $name_file = $file['name'];
            $tmp_name_file = $file['tmp_name'];
            $replace = array(" ", "(", ")");
            $image_path = time().str_replace($replace,"", $name_file);
            if (!is_dir('uploads/videos')) {
                mkdir('uploads/videos', 0777, true);
            }
            move_uploaded_file($tmp_name_file, 'uploads/videos/'.$image_path);

            VideoThumbnail::createThumbnail('uploads/videos/'.$image_path, 'uploads/images/', 'movie.jpg', 2, 1920, 1080);
            // VideoThumbnail::createThumbnail(public_path('uploads/videos/'.$image_path), public_path('uploads/videos/'), 'movie.jpg', 2, 920, 800);

            // return $this->saveName($image_path);;
        }
    }
    // public function saveName($name){
    //     return Video::create([
    //         'path' => $name,
    //         'image'=> 
    //         'user_id' =>Auth::user()->id,
    //     ]);
    // }
    // public function destroy(Image $uuid){
    //     $this->authorize('userIsOwner', $uuid);
    //     return $this->imageRepo->destroy($uuid);
    // }
}