<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Publication;
use Faker\Generator as Faker;
use App\User;

$factory->define(Publication::class, function (Faker $faker) {
    $images = [];
    for ($i=0; $i < 4; $i++) {
        array_push($images, 'image-'.rand(1, 5).'.jpg');
    }

    return [
        'user_id' => rand(1,29),
        'house_id' => rand(1, 6),
        'name' => $faker->name,
        'nikc' => $faker->firstNameFemale,
        'years' => rand(18, 30),
        'status' => rand(0, 1),
        'whatsapp' => $faker->phoneNumber,
        'phone' => $faker->phoneNumber,
        'delivery' => false,
        'have_site' => false,
        'time_id' => rand(1, 6),
        'city_id' => 1,
        'barrio_id' => rand(1, 5),
        'uuid' => $faker->uuid,
        'weight' => rand(29, 80),
        'height' => rand(29, 80),
        'email' => $faker->unique()->safeEmail,
        'description' => $faker->text(150),
        'price' => rand(50, 120),
        'imgages_path' => json_encode($images),
        'videos_path' => json_encode($images),
    ];
});
