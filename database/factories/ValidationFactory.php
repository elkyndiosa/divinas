<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Validation;
use Faker\Generator as Faker;

$factory->define(Validation::class, function (Faker $faker) {
    return [
        'user_id' => rand(1, 29),
        'image_id' => rand(1, 59),
        'code' => mt_rand(10000000, 99999999)
    ];
});
