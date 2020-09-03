<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\HasUuid;


class Image extends Model
{
    use HasUuid;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'path','user_id', 'uuid',
    ];
    
}
