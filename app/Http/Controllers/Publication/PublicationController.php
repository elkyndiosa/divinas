<?php

namespace App\Http\Controllers\Publication;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Publication\PublicationRepository;
use App\Http\Controllers\Publication\Requests\PublicationSaveRequest;
use App\Publication;
use App\PublicationService;
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
        $this->middleware('auth')->only('destroy', 'update');
    }
    public function index(Request $request)
    {
        $list = $this->publicationRepo->index($request);
        return response()->json(compact('list'), 200);
    }
    public function getWeek()
    {
        $week = $this->publicationRepo->week();
        return response()->json(compact('week'), 200);
    }
    public function indexByUser(User $uuid){
        return $this->publicationRepo->getByUser($uuid);
    }
    public function store(PublicationSaveRequest $request){
        $this->publicationRepo->create($request);
        $message = 'La publicacion ha sido creada.';
        return response()->json(compact('message'), 201);
    }
    public function update($uuid, Request $request){
        $this->publicationRepo->update($uuid, $request);
        $message = 'La publicacion ha sido actualizada.';
        return response()->json(compact('message'), 201);
    }
    public function destroy(Publication $publication){
        // $this->authorize('userIsOwner', $uuid);
        // return $this->imageRepo->destroy($uuid);
        PublicationService::where('publication_id', '=', $publication->id)->delete();
        $publication->delete();
        $message = 'La publicacion ha sido eliminada.';
        return response()->json(compact('message', 201));
    }
    public function show($uuid/*Publication $publication*/){
        //return $uuid;
        // $this->authorize('userIsOwner', $uuid);
        return $this->publicationRepo->show($uuid);
    }
}
