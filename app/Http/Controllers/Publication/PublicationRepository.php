<?php

namespace App\Http\Controllers\Publication;

use App\DataUser;
use App\Publication;
use App\Time;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Boolean;

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
            'have_site' => $data->have_site,
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

     public function update($uuid, $data)
     {

        $timeId = $data->time_id;
        $this->updateTime($timeId, $data->dataAdd);

        Publication::where('uuid', $uuid)->update([
            'description' => $data->description,
            'name' => $data->name,
            'price' => $data->price,
            'imgages_path' => json_encode($data->images),
            //'videos_path' => '[]',
            'email' => $data->email,
            'phone' => $data->phone,
            'nikc' => $data->nikc,
            'whatsapp' => $data->whatsapp,
            'height' => $data->height,
            'weight' => $data->weight,
            'delivery' => $data->delivery,
            'have_site' => $data->have_site,
            'barrio_id' => $data->barrio_id,
            'city_id' => $data->city_id,
            'years' => $data->years
        ]);
     }

     public function updateTime($id, $data)
     {
        $dataToUpdate =[
            'every_day' => $data['every_day'],
            'every_single_day' => $data['every_single_day'],
            'input' => $data['input'],
            'input_day' => $data['input_day'],
            'output' => $data['output'],
            'output_day' => $data['output_day'],
        ];
        Time::where('id', $id)->update($dataToUpdate);
     }

    public function getByUser($user){
        return $user->publications;
    }

    public function index($request){
        $consult = Publication::where('week', false);

        $status = $request->get('status');
        if($status)
            $consult->where('status', (Boolean)$status);

        $age = $request->get('age');
        if($age) {
            $ages = explode('-', $age);
            $consult->whereBetween('years', $ages);
        }
        $city = $request->get('city');
        if($city)
            $consult->where('city_id', $city);

        $barrio = $request->get('barrio');
        if($barrio)
            $consult->where('barrio_id', $barrio);

        $price = $request->get('price');
        if($price) {
            $prices = explode('-', $price);
            $consult->whereBetween('price', $prices);
        }

        $services = $request->get('services');
        if($services) {
            $servicesList = explode('-', $services);
            $consult->join('publications_services', 'publications.id', '=', 'publications_services.publication_id')
                    ->select('publications.*')
                    ->whereIn('publications_services.service_id', $servicesList);
        }


        $publications = $consult->orderBy('id', 'desc')
            ->paginate(16);
        return $publications;
    }

    public function week()
    {
        $week = Publication::where('week', true)->first();
        return $week;
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
