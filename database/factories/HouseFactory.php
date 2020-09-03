<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\House;
use Faker\Generator as Faker;

$factory->define(House::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => $faker->uuid,
        'status' => rand(1, 2),
        'whatsapp' => $faker->phoneNumber,
        'phone' => $faker->phoneNumber,
        'have_site' => 'no',
        'image_id' => null,
        'uuid' => $faker->uuid
    ];
});
