<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Image;
use Faker\Generator as Faker;

$factory->define(Image::class, function (Faker $faker) {
    return [
        'user_id' => rand(1,30),
        'path' => $faker->imageUrl($width = 640, $height = 480),
        'uuid' => $faker->uuid,
    ];
});
