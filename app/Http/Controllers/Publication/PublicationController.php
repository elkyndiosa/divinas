<?php

namespace App\Http\Controllers\Publication;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Publication\PublicationRepository; 
use App\Http\Controllers\Publication\Requests\PublicationSaveRequest;
use App\Publication;
use App\User;
use Illuminate\Support\Facades\Auth;

class PublicationController extends Controller 
{

    private $publicationRepo;    
    /**
     * __construct create user and repository 
     *
     * @param  mixed $user
     * @param  mixed $userRepo
     * @return void
     */
    public function __construct(PublicationRepository $publicationRepo)
    {
        $this->publicationRepo = $publicationRepo;
    }
    public function index(){
        return $this->publicationRepo->index();

    }
    public function indexByUser(User $uuid){
        return $this->publicationRepo->getByUser($uuid);
    }
    public function store(PublicationSaveRequest $request){
        return $this->publicationRepo->create($request);
    }
    public function update(){
        // return Image::create([
        //     'path' => $name,
        //     'user_id' =>Auth::user()->id,
        // ]);
    }
    public function destroy(){
        // $this->authorize('userIsOwner', $uuid);
        // return $this->imageRepo->destroy($uuid);
    }
    public function show(Publication $publication){
        // return $publication;
        // $this->authorize('userIsOwner', $uuid);
        return $this->publicationRepo->show($publication);
    }
}