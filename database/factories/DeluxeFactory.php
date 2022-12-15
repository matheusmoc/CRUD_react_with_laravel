<?php

namespace Database\Factories;

use Faker\Provider\Fakecar;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Deluxe>
 */
class DeluxeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()

    {
        return [
            'image' => $this->faker->imageUrl(null, 640, 480, 'cars', true),
            'car' =>  $this->faker->name(),
            'price' => $this->faker->randomNumber(5, false),
            'brand' => $this->faker->lexify(),
            'power' => $this->faker->numberBetween(10000, 50000),
            'speed' => $this->faker->numberBetween(100, 300),
            'cons' => $this->faker->randomNumber(1, 80),
        ];
    }
}
