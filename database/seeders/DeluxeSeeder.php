<?php

namespace Database\Seeders;

use App\Models\Deluxe;
use Illuminate\Database\Seeder;

class DeluxeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Deluxe::factory(100)->create();
    }
}
