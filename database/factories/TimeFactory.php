<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Time;
use Faker\Generator as Faker;

$factory->define(Time::class, function (Faker $faker) {
    return [
        'input' => $faker->time(),
        'output' => $faker->time(),
        'every_single_day' => rand(0, 1),
        'input_day' => $faker->dayOfWeek(),
        'output_day' => $faker->dayOfWeek(),
        'every_day' => rand(0, 1),
    ];
});
