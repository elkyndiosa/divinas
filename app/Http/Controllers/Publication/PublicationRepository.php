<?php

namespace App\Http\Controllers\Publication;

use App\DataUser;
use App\Publication;
use App\Time;
use Illuminate\Support\Facades\Auth;

class PublicationRepository
{
    private $publication;
    /**
     * __construct create user and repository 
     *
     * @param  mixed $user
     * @param  mixed $userRepo
     * @return void
     */
    public function __construct(Publication $publication)
    {
        $this->publication = $publication;
    }    
    public function create($data){
        Publication::create([
            'description' => $data->description,
            'price' => $data->price,
            'imgages_path' => json_encode($data->images),
            'videos_path' => '[]',
            'user_id'=> Auth::user()->id,

        ]);
        return response()->json([
            'message' => 'Your data has been successfully created',
            'status' => 201
        ], 201);
    }
    public function getByUser($user){
        return $user->Publications;
    }
    public function index(){
        $publications = Publication::orderBy('id','desc')->get();
        foreach ($publications as $publication) {
            $publication->User;
        }
        return $publications;
    }
     public function show($publication){
        $user = $publication->User;
        $time = Time::where('id', '=', $user->time_id)->first();
        $services =$user->Services;
        $this->incrementViews($user->id);
        return response()->json([
            'user' => $user,
            'publication' => $publication,
            'times' => $time,
            'services' =>  $services
        ]);
    }
    public function incrementViews($userId){
            $data = DataUser::where('user_id', '=', $userId)->first();
            if(isset($data)){
                $data->increment('views');// increase one count
            }else{
                $data = new DataUser();
                $data->views = 1;
                $data->user_id = $userId;
                $data->save();
            }
    }
}