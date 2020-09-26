<?php

namespace App\Http\Controllers\Video;

use App\Video;
use Illuminate\Support\Facades\Auth;
use FFMpeg;

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
    //public function getImagesByUser(){
    //     return Auth::user()->Video;
    // }
    // public function getByPublication($user){
    //     return $user->Video;
    //     // Auth::user()->Images;
    // }

    public function indexByUser()
    {
        $videos = Auth::user()->videos;
        return $videos;
    }

    public function create($request)
    {
        $file = $request->file;
        $data = $this->saveFile($file);
        // $this->createThumbnail($data);
        $user = Auth::user();
        Video::create([
            'path' => $data['name'],
            'image_path' => $data['image'],
            'user_id' => $user->id
        ]);
    }

    public function saveFile($file)
    {
        $original_name = $file->getClientOriginalName();
        $replace = array(" ", "(", ")");
        $extension = $file->getClientOriginalExtension();
        $name = time().str_replace($replace, "", $original_name);
        $image_name = str_replace(".".$extension, "", $name);
        $file->storeAs('videos/', $name, 'uploads');
        return [
            'name' => $name,
            'image' => $image_name,
        ];
    }

    public function createThumbnail($data)
    {
        FFMpeg::fromDisk('videos')
                ->open($data['name'])
                ->getFrameFromSeconds(2)
                ->export()
                ->toDisk('images')
                ->save($data['image'].'.png');
    }

}
