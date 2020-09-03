<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DataUser extends Model
{
       /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'house_id',
        'views',
        'favorites',
        'click_whatsapp',
    ];
    protected $attributes = [
        'user_id' => null,
        'house_id' => null,
        'views' => 0,
        'favorites' => 0,
        'click_whatsapp' => 0,
    ];
}

