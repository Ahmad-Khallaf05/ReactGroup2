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
        // Validate the incoming request
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'date' => 'required|date',
            'category' => 'required|string',
            'san7a' => 'nullable|file|mimes:jpg,jpeg,png,pdf', // Adjust file types as needed
            'admin_id' => 'required|exists:admins,id',
        ]);

        // Handle file upload for 'san7a' if it exists
        $fileNameSan7a = null;
        if ($request->hasFile('san7a')) {
            $file = $request->file('san7a');
            $extension = $file->getClientOriginalExtension();
            $fileNameSan7a = time() . '.' . $extension;
            $file->move(public_path('uploads/event/san7a'), $fileNameSan7a);
        }

        // Create the event with the validated data
        $event = Event::create([
            'title' => $request->title,
            'description' => $request->description,
            'date' => $request->date,
            'category' => $request->category,
            'san7a' => $fileNameSan7a ? 'uploads/event/san7a/' . $fileNameSan7a : "test", // Store the file path or null
            'admin_id' => $request->admin_id,
        ]);

        // Return success response with the created event
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
