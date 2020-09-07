<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Barrio extends Model
{
    public function city()
    {
        return $this->belongsTo(City::class);
    }
}
