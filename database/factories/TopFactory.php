<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Top;
use Faker\Generator as Faker;

$factory->define(Top::class, function (Faker $faker) {
    return [
        'publication_id' =>  rand(1, 49),
        'promotion_id' =>  rand(1, 6),
    ];
});
