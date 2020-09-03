<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Payment;
use Faker\Generator as Faker;

$factory->define(Payment::class, function (Faker $faker) {
    return [
        'code' => $faker->uuid,
        'status' => $faker->randomElement($array = array ('aprobado','negado','en espera')),
        'value' => rand(7000, 40000),
        'publication_id' => rand(1, 50),
    ];
});
