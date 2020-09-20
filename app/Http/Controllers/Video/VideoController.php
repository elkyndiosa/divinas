<?php

namespace App\Http\Controllers\Video;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Video\VideoRepository;
use App\Http\Controllers\Video\Requests\VideoSaveRequest;
use App\Video;
use App\User;
//use VideoThumbnail;
use Illuminate\Support\Facades\Auth;
use FFMpeg;

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
        $this->videoRepo = $videoRepo;
    }
    // public function index(){
    //     return $this->videoRepo->getImagesByUser();
    // }
    // public function getByPublication(User $uuid){
    //     return $this->videoRepo->getByPublication($uuid);
    // }

    public function indexUser()
    {
        $list = $this->videoRepo->indexByUser();
        return response()->json(compact('list'), 200);
    }

    public function create(VideoSaveRequest $request){

        if($request->file('file')) {
            $this->videoRepo->create($request);
            $message = 'El video ha sido guardado.';
            return response()->json(compact('message'), 201);
        }

        $message = 'No ha enviado ningun video.';
        return response()->json(compact('message'), 401);
    }

}
