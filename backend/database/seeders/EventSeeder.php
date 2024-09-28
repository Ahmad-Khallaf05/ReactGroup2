<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Event;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Sample data to seed
        $events = [
            [
                'title' => 'Tech Conference 2024',
                'description' => 'An annual tech conference focusing on the latest in technology and innovation.',
                'san7a' => 'Technology',
                'date' => '2024-04-15',
                'category' => 'Conference',
                'admin_id' => 1, 
            ],
            [
                'title' => 'Art Exhibition',
                'description' => 'Showcasing local artists and their works.',
                'san7a' => 'Art',
                'date' => '2024-05-20',
                'category' => 'Exhibition',
                'admin_id' => 1, 
            ],
            [
                'title' => 'Music Festival',
                'description' => 'A vibrant festival featuring various music genres.',
                'san7a' => 'Music',
                'date' => '2024-06-10',
                'category' => 'Festival',
                'admin_id' => 1, 
            ],
            // Add more sample events as needed
        ];

        // Inserting the sample data into the events table
        foreach ($events as $event) {
            Event::create($event);
        }
    }
}
