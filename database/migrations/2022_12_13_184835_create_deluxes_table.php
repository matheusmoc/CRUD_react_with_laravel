<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deluxes', function (Blueprint $table) {
            $table->id();
            $table->string('car');
            $table->decimal('price');
            $table->string('brand');
            $table->string('power');
            $table->string('speed');
            $table->string('cons');
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
        Schema::dropIfExists('deluxes');
    }
};
