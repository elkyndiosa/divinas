<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\ServiceUser;
use Faker\Generator as Faker;

$factory->define(ServiceUser::class, function (Faker $faker) {
    return [
        'user_id' => rand(1,29),
        'service_id' => rand(1,14),
    ];
});
