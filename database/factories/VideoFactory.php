<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Video;
use Faker\Generator as Faker;

$factory->define(Video::class, function (Faker $faker) {
    return [
        'user_id' => rand(1,30),
        'path' => $faker->imageUrl($width = 640, $height = 480),
        'image_id' => rand(1,60),
    ];
});
