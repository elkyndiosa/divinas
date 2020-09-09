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
use Image as ImageEditor;

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
    public function create(ImageSaveRequest $request)
    {
        if($request->file('file')) {
            $file = $request->file;
            $original_name = $file->getClientOriginalName();
            $replace = array(" ", "(", ")");
            $name = time().str_replace($replace, "", $original_name);
            $image = ImageEditor::make($file);
            $image->resize(1440, 1024);
            $image->insert(public_path('images/marca.png'), 'center');
            $image->save(public_path('uploads/images/'.$name));
            return $this->saveName($name);
        }

        $message = 'No ha enviado ninguna imagen';
        return response()->json(compact('message'), 401);
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
