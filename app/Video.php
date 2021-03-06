<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $fillable = [
        'path',
        'image_path',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
