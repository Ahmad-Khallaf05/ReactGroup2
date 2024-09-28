<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::all();
        return response()->json(['events' => $events]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'san7a' => 'required|string',
            'date' => 'required|date',
            'category' => 'required|string',
            'admin_id' => 'required|exists:admins,id',
        ]);

        $event = Event::create($validatedData);
        return response()->json(['message' => 'Event created successfully', 'event' => $event], 201);
    }

    public function show($id)
    {
        $event = Event::find($id);
        if ($event) {
            return response()->json(['event' => $event]);
        } else {
            return response()->json(['message' => 'Event not found'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $event = Event::find($id);

        if (!$event) {
            return response()->json(['message' => 'Event not found'], 404);
        }

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'san7a' => 'required|string',
            'date' => 'required|date',
            'category' => 'required|string',
        ]);

        $event->update($validatedData);
        return response()->json(['message' => 'Event updated successfully', 'event' => $event]);
    }

    public function destroy($id)
    {
        $event = Event::find($id);

        if ($event) {
            $event->delete();
            return response()->json(['message' => 'Event deleted successfully']);
        } else {
            return response()->json(['message' => 'Event not found'], 404);
        }
    }
}
