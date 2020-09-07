<?php

namespace App\Http\Controllers\Publication;

use App\DataUser;
use App\Publication;
use App\Time;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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
        $time_id = $this->saveTime($data);
        $publication = Publication::create([
            'description' => $data->description,
            'name' => $data->name,
            'price' => $data->price,
            'imgages_path' => json_encode($data->images),
            'videos_path' => '[]',
            'user_id'=> Auth::user()->id,
            'email' => $data->email,
            'phone' => $data->phone,
            'nikc' => $data->nikc,
            'whatsapp' => $data->whatsapp,
            'height' => $data->height,
            'weight' => $data->weight,
            'delivery' => $data->delivery,
            'fave_site' => $data->have_site,
            'barrio_id' => $data->barrio_id,
            'city_id' => $data->city_id,
            'time_id' => $time_id,
            'years' => $data->years
        ]);

        $this->saveServices($publication, $data);
    }

    public function saveTime($data){
            $dataToCreate =[
                'every_day' => $data->dataAdd['every_day'],
                'every_single_day' => $data->dataAdd['every_single_day'],
                'input' => $data->dataAdd['input'],
                'input_day' => $data->dataAdd['input_day'],
                'output' => $data->dataAdd['output'],
                'output_day' => $data->dataAdd['output_day'],
            ];
            $flight = Time::create($dataToCreate);
            return $flight->id;
    }

    public function saveServices($publication, $data){
        foreach ($data->services as $services) {
             $dataToCreate =[
                 'publication_id' => $publication->id,
                 'service_id' => $services['id'],
             ];
             DB::table('publications_services')->insert($dataToCreate);
        }
     }

    public function getByUser($user){
        return $user->publications;
    }
    public function index(){
        $publications = Publication::with('user')->orderBy('id','desc')->get();
        return $publications;
    }
     public function show($uuid){
        $publication = Publication::where('uuid', $uuid)->first();
        $user = $publication->user;
        $time = Time::where('id', '=', $publication->time_id)->first();
        $services = $publication->services;
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
