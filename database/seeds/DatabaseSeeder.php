<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Role::class)->create(['name'=>'Admin']);
        factory(App\Role::class)->create(['name'=>'Scort']);
        factory(App\Role::class)->create(['name'=>'Visitor']);
        factory(App\House::class, 6)->create();
        factory(App\Time::class, 6)->create();
        // factory(App\City::class, 6)->create();
        factory(App\City::class)->create(['name'=>'Medellin']);
        factory(App\Barrio::class)->create(['name'=>'Laureles', 'city_id'=>1]);
        factory(App\Barrio::class)->create(['name'=>'Centro de Medellin', 'city_id'=>1]);
        factory(App\Barrio::class)->create(['name'=>'El Poblado', 'city_id'=>1]);
        factory(App\Barrio::class)->create(['name'=>'Belen', 'city_id'=>1]);
        factory(App\Barrio::class)->create(['name'=>'Estadio', 'city_id'=>1]);

        // factory(App\Barrio::class, 6)->create();
        factory(App\User::class, 30)->create();
        factory(App\Image::class, 60)->create();
        factory(App\Video::class, 50)->create();
        factory(App\Service::class, 15)->create();
        factory(App\ServiceUser::class, 100)->create();
        factory(App\ScortWeek::class, 1)->create();
        factory(App\Publication::class, 50)->create();
        factory(App\DataUser::class, 50)->create();
        factory(App\Promotion::class, 6)->create();
        factory(App\Top::class, 10)->create();
        factory(App\Message::class, 40)->create();
        factory(App\Validation::class, 15)->create();
        factory(App\Payment::class, 60)->create();
    }
}
