<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        Admin::create(
            [
                'name' => 'Administrator',
                'email' => 'Admin@harithi.com',
                'password' => '$2y$10$qh/PwhLLEPRxjHq7HbB0JOH2HGLsRd1165Qsa1QefZFsWDsEL78m6',
                'role' => 'Manager',
                'san7a' => 'uploads/admins/san7a/1727698421.jpeg',
            ]
        );
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call(EventSeeder::class);
    }
}
