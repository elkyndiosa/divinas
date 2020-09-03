<?php

namespace App\Http\Controllers\User;

use App\ServiceUser;
use App\Time;
use App\User;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Publication;
class UserRepository
{
    private $user;
    /**
     * __construct create user and repository 
     *
     * @param  mixed $user
     * @param  mixed $userRepo
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }    
    
    public function update($data, $user){
        $time_id = null;
        $services_user_id = null;
        if($data->dataAdd['input'] != null && $data->dataAdd['output'] != null){
            $time_id = $this->saveTime($data);
        }
        $this->saveServices($data);
        $dataToUpdate = [
            'name' => $data->name,
            'email' => $data->email,
            'house_id' => $data->house_id,
            'nikc' => $data->nikc,
            'years' => $data->years,
            'delivery' => $data->delivery,
            'whatsapp' => $this->getNumber($data->whatsapp),
            'phone' =>  $this->getNumber($data->phone),
            'have_site' => $data->have_site,
            'image_profile'=> $data->image_profile,
            'time_id' => $time_id,
            'city_id' => $data->city_id,
            'barrio_id' =>$data->barrio_id,
            'description' =>$data->description,
            'weight' => $data->weight,
            'height' => $data->height,
        ];
        $user->update($dataToUpdate);
        $this->createPublication($data);
        return response()->json([
            'message' => 'Your data has been successfully modified',
            'status' => 201
        ], 201);
    }
    public function createPublication($data){
        Publication::create([
            'description' => $data->description,
            'price' => $data->price,
            'imgages_path' => '[]',
            'videos_path' => '[]',
            'user_id'=> Auth::user()->id,
        ]);
    }



    public function saveTime($data){
       $dataSearch =[
            'id' => $data->time_id,
        ];
        $dataToUpdate =[
            'every_day' => $data->dataAdd['every_day'],
            'every_single_day' => $data->dataAdd['every_single_day'],
            'input' => $data->dataAdd['input'],
            'input_day' => $data->dataAdd['input_day'],
            'output' => $data->dataAdd['output'],
            'output_day' => $data->dataAdd['output_day'],
        ];
        $flight = Time::updateOrCreate($dataSearch, $dataToUpdate);
        return $flight->id;
    }
    public function saveServices($data){
        ServiceUser::where('user_id', Auth::user()->id)->delete();
        foreach ($data->services as $services) {
             $dataToUpdate =[
                 'user_id' => Auth::user()->id,
                 'service_id' => $services['id'],
             ];
             ServiceUser::create($dataToUpdate);
        }
     }
    public function saveImageProfile($nameImage){
        $user = User::Where('id', '=', Auth::user()->id)->first();
        $user->update(['image_profile' => $nameImage]);
        return response()->json([
            'message' => 'Your data has been successfully modified',
            'status' => 201
        ], 201);
    }
    public function getNumber($string){
        return preg_replace('/[^0-9]/', '', $string);
    }

    
}
