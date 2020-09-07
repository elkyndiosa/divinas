<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('nikc')->nullable();
            $table->integer('years')->nullable();
            $table->string('email')->unique();
            $table->foreignId('role_id')->constrained();
            $table->integer('status')->default(0);
            $table->integer('weight')->default(0);
            $table->float('height')->default(0);
            $table->string('whatsapp')->unique()->nullable();
            $table->string('phone')->nullable();
            $table->boolean('delivery')->default(false);
            $table->boolean('have_site')->default(false);
            $table->longText('description')->nullable();
            $table->string('image_profile')->nullable();
            $table->foreignId('house_id')->nullable()->constrained();
            $table->foreignId('time_id')->nullable()->constrained();
            $table->foreignId('city_id')->nullable()->constrained();
            $table->foreignId('barrio_id')->nullable()->constrained();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->uuid('uuid');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
