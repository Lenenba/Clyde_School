<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SchoolParentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'phone' => $this->faker->phoneNumber(),
            'adresse' => $this->faker->address(),
            'ville' => $this->faker->city(),
            'pays' => $this->faker->country(),
            'adresse' => $this->faker->address(),
            'status' => $this->faker->randomElement([true, false]),
            'date_naissance' => $this->faker->dateTimeBetween('-60 years', '-30 years'),
            'email' => $this->faker->unique()->safeEmail(),
        ];
    }
}
