<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Time extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'input','output','every_single_day','input_day','output_day','every_day'
    ];

    public function getEverySingleDayAttribute($val) {
        if($val)
            return true;
        return false;
    }

    public function getEveryDayAttribute($val) {
        if($val)
            return true;
        return false;
    }
}
