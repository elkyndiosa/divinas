<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Video;
use Faker\Generator as Faker;

$factory->define(Video::class, function (Faker $faker) {
    return [
        'user_id' => rand(1,30),
        'path' => 'image-'.rand(1, 5).'.jpg',
        'image_id' => rand(1,60),
    ];
});
