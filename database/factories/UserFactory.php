<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'nikc' => $faker->firstNameFemale,
        'years' => rand(18, 30),
        'role_id' =>  rand(1, 2),
        'status' => rand(0, 1),
        'whatsapp' => $faker->phoneNumber,
        'phone' => $faker->phoneNumber,
        'delivery' => false,
        'have_site' => false,
        'image_profile' => null,
        'house_id' =>  rand(1, 6),
        'time_id' => rand(1, 6),
        'city_id' => 1,
        'barrio_id' => rand(1, 5),
        'uuid' => $faker->uuid,
        'weight' => rand(29, 80),
        'height' => rand(29, 80),
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
    ];
});
