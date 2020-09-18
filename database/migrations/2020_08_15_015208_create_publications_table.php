<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePublicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('publications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained();
            $table->foreignId('house_id')->nullable()->constrained();
            $table->string('nikc')->nullable();
            $table->string('name');
            $table->integer('years')->nullable();
            $table->integer('weight')->default(0);
            $table->integer('status')->default(0);
            $table->float('height')->default(0);
            $table->string('phone')->nullable();
            $table->boolean('delivery')->default(false);
            $table->boolean('have_site')->default(false);
            $table->string('whatsapp')->nullable();
            $table->foreignId('time_id')->nullable()->constrained();
            $table->foreignId('city_id')->nullable()->constrained();
            $table->foreignId('barrio_id')->nullable()->constrained();
            $table->longText('description');
            $table->string('email');
            $table->string('price');
            $table->boolean('week')->default(false);
            $table->uuid('uuid');
            $table->json('imgages_path')->nullable();
            $table->json('videos_path')->nullable();
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
        Schema::dropIfExists('publications');
    }
}
