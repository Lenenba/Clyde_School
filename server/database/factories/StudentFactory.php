<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\SchoolParent;

class StudentFactory extends Factory
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
            'date_naissance' => $this->faker->dateTimeBetween('-20 years', 'now'),
            'image' => $this->faker->image('public/images', 640, 480, null, false),
            'email' => $this->faker->unique()->safeEmail(),
            'school_parent_id' => SchoolParent::factory(),
        ];
    }
}
