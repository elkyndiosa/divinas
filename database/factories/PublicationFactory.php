<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Publication;
use Faker\Generator as Faker;

$factory->define(Publication::class, function (Faker $faker) {
    $images = [
        $faker->imageUrl($width = 640, $height = 480),
        $faker->imageUrl($width = 640, $height = 480),
        $faker->imageUrl($width = 640, $height = 480),
        $faker->imageUrl($width = 640, $height = 480)
    ];
    return [
        'user_id' => rand(1, 29),
        'house_id' => rand(1, 6),
        'description' => $faker->text(150),
        'price' => rand(50, 120),
        'imgages_path' => json_encode($images),
        'videos_path' => json_encode($images), 
    ];
});
