<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Image;
use Faker\Generator as Faker;

$factory->define(Image::class, function (Faker $faker) {
    return [
        'user_id' => rand(1,30),
        'path' => 'image-'.rand(1, 5).'.jpg',
        'uuid' => $faker->uuid,
    ];
});
