<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchoolParentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return voidphp a
     */
    public function up()
    {
        Schema::create('school_parents', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('phone');
            $table->string('adresse');
            $table->string('ville');
            $table->string('pays');
            $table->boolean('status');
            $table->date('date_naissance');
            $table->string('email')->unique();
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
        Schema::dropIfExists('school_parents');
    }
}
