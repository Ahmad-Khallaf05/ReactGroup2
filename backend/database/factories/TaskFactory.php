<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'title' => fake()->name(),
            'description' => "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur vitae quas consequuntur voluptatem quo iure possimus dignissimos nostrum. Dolorum dolor nisi id earum deleniti quasi accusamus distinctio! Consequuntur, beatae!",
            'progress' => 25,
            'deadline' => '1/10/2024'
        ];
    }
}
