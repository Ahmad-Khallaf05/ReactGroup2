<?php

namespace App\Http\Controllers;

use App\Models\Task; // Make sure the model name is correct
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tasks = Task::all();

        if ($tasks->count() > 0) {
            return response()->json([
                'status' => 200,
                'tasks' => $tasks
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Records Found'
            ], 404);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'deadline' => 'required|date',
                'san7a' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048', 
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        }

        // Handle file upload if it exists
        if ($request->hasFile('san7a')) {
            $san7a = $request->file('san7a');
            $san7aName = time() . '.' . $san7a->getClientOriginalExtension();
            $san7a->move(public_path('uploads/tasks'), $san7aName);
        }

        $task = Task::create([
            'title' => $request->title,
            'description' => $request->description,
            'deadline' => $request->deadline,
            'san7a' => $san7aName ?? null, 
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Task Created Successfully',
            'task' => $task,
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        return response()->json([
            'status' => 200,
            'task' => $task
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'deadline' => 'required|date',
                'san7a' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048', 
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        }

        // Handle file upload if it exists
        if ($request->hasFile('san7a')) {
            $san7a = $request->file('san7a');
            $san7aName = time() . '.' . $san7a->getClientOriginalExtension();
            $san7a->move(public_path('uploads/tasks'), $san7aName);
            $task->san7a = $san7aName; // Update san7a only if a new file is uploaded
        }

        $task->update([
            'title' => $request->title,
            'description' => $request->description,
            'deadline' => $request->deadline,
            'san7a' => $task->san7a, // Ensure the san7a is updated if new file is uploaded
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Task Updated Successfully',
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Task Deleted Successfully'
        ], 200);
    }
}
