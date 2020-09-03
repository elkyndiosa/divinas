<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Message;
use Faker\Generator as Faker;

$factory->define(Message::class, function (Faker $faker) {
    return [
        'name' => $faker->firstName(),
        'email' => $faker->email,
        'phone' => $faker->phoneNumber,
        'whatsapp' => $faker->phoneNumber,
        'user_id' => rand(1, 29),
    ];
});
