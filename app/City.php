<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Barrio;
class City extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];
    public function barrios()
    {
        return $this->hasMany(Barrio::class);
    }
}
