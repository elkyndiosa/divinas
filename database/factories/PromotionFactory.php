<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Promotion;
use Faker\Generator as Faker;

$factory->define(Promotion::class, function (Faker $faker) {
    return [
        'name' => $faker->word(3),
        'time_id' => rand(1, 6),
        'days' => rand(1, 7),
    ];
});
