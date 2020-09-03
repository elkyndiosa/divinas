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
        'description', 'price', 'imgages_path', 'videos_path', 'user_id', 'house_id'
    ];
/**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'id', 'user_id'
    ];
    protected $attributes = [
        "imgages_path" => null,
        'videos_path' => null,
    ];
    public function User()
    {
        return $this->belongsTo(User::class);
    }
}
