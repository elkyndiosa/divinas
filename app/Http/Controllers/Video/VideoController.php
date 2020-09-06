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
        $this->videoeRepo = $videoRepo;
    }
    // public function index(){
    //     return $this->videoRepo->getImagesByUser();
    // }
    // public function getByPublication(User $uuid){
    //     return $this->videoRepo->getByPublication($uuid);
    // }
    public function create(VideoSaveRequest $request){

        if($request->file('file')) {
            $file = $request->file;
            $original_name = $file->getClientOriginalName();
            $replace = array(" ", "(", ")");
            $extension = $file->getClientOriginalExtension();
            $name = time().str_replace($replace, "", $original_name);
            $image_name = str_replace(".".$extension, "", $name);
            $file->storeAs('videos/', $name, 'uploads');

            FFMpeg::fromDisk('videos')
                ->open($name)
                ->getFrameFromSeconds(2)
                ->export()
                ->toDisk('images')
                ->save($image_name.'.png');
            $message = 'El video ha sido guardado.';
            return response()->json(compact('message'), 201);
        }

    }

    protected function createthumnail($video_name, $image_name)
    {

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
