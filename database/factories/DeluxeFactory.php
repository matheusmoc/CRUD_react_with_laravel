<?php

namespace Database\Factories;

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
            'car' => $this->faker->name(),
            'price' => $this->faker->randomNumber(5, false),
            'brand' => $this->faker->lexify(),
            'power' => $this->numberBetween(10000, 50000),
            'speed' => ($this->numberBetween(100, 300) + 'km/h'),
            'cons' => $this->randomNumber(1, 80),
        ];
    }
}
