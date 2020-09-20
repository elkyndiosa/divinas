<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Traits\HasUuid;
use App\Image;
use App\Publication;
use App\Time;
use App\Service;
class User extends Authenticatable
{
    use Notifiable, HasUuid;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'role_id', 'house_id',
        'nikc','years','status','whatsapp','phone','delivery',
        'have_site','image_profile','time_id','city_id','barrio_id','uuid','description', 'weight',
        'height'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    protected $attributes = [
        "house_id" => null,
        'time_id' => null,
        'city_id' => null,
        'barrio_id' => null,
    ];
    public function Images()
    {
        return $this->hasMany(Image::class);
    }
    public function publications()
    {
        return $this->hasMany(Publication::class);
    }
    public function Times()
    {
        return $this->belongsTo(Time::class);
    }
    public function services()
    {
        return $this->belongsToMany(Service::class, 'service_users');
    }
    public function DataUser()
    {
        return $this->hasOne(DataUser::class);
    }

    public function videos()
    {
        return $this->hasMany(Video::class);
    }

}
