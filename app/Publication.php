<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\HasUuid;
use App\User;
use Illuminate\Support\Facades\Auth;

class Publication extends Model
{
    use HasUuid;
/**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'description',
        'price',
        'imgages_path',
        'email',
        'videos_path',
        'user_id',
        'house_id',
        'years',
        'name',
        'nikc',
        'whatsapp',
        'height',
        'weight',
        'phone',
        'delivery',
        'have_site',
        'time_id',
        'city_id',
        'barrio_id',
        'uuid',

    ];
/**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'id', 'user_id'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function services()
    {
        return $this->belongsToMany(Service::class, 'publications_services');
    }

    public function times()
    {
        return $this->belongsTo(Time::class);
    }

    public function getDeliveryAttribute($val) {
        if($val)
            return true;
        return false;
    }

    public function getHaveSiteAttribute($val) {
        if($val)
            return true;
        return false;
    }

    public function getStatusAttribute($val) {
        if($val)
            return true;
        return false;
    }
}
