<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\ScortWeek;
use Faker\Generator as Faker;

$factory->define(ScortWeek::class, function (Faker $faker) {
    return [
        'user_id'=> rand(1, 29),
        'description'=> $faker->text(30),
    ];
});
