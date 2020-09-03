<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\DataUser;
use Faker\Generator as Faker;

$factory->define(DataUser::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween(1, 29),
        'house_id' => $faker->numberBetween(1, 6),
        'views' => rand(1,1500),
        'favorites' => rand(1,1500),
        'click_whatsapp' => rand(1,1500)
    ];
});
