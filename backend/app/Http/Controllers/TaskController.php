<?php

namespace App\Http\Controllers;

use App\Models\studenttask;
use App\Models\task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tasks = task::all();

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
    public function addStudent(Request $request,$id) 
    {

        $task = task::findOrFail($id);
        
        studenttask::create([
            'user_id' => $request->user_id,
            'task_id' =>$id
        ]);
        return response()->json([
            'user' => $request->user_id,
            'id' => $id
        ]);
        
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
                'san7a' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        }

        // Handle file upload if it exists
        if ($request->san7a) {
            $file=$request->san7a;
            $extension=$request->san7a->getClientOriginalExtension();
            $fileNameSan7a=time().'.'.$extension;
            $path='uploads/tasks/san7a';
            $file->move($path, $fileNameSan7a);
        }

        $task = task::create([
            'title' => $request->title,
            'description' => $request->description,
            'deadline' => $request->deadline,
            'san7a' => 'uploads/tasks/san7a/'. $fileNameSan7a ?? null,
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
    public function show(task $task)
    {
        if ($task) {
            return response()->json([
                'status' => 200,
                'task' => $task
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Records Found'
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, task $task)
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
                'errors' => $validator->messages()
            ], 422);
        }

        if ($request->hasFile('san7a')) {
            $san7a = $request->file('san7a');
            $san7aName = time() . '.' . $san7a->getClientOriginalExtension();
            $san7a->move(public_path('uploads/tasks'), $san7aName);
            $task->san7a = $san7aName;
        }

        $task->update([
            'title' => $request->title,
            'description' => $request->description,
            // 'deadline' => $request->deadline,
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Task Updated Successfully'
        ], 200);


        if ($request->hasFile('san7a')) {
            $san7a = $request->file('san7a');
            $san7aName = time() . '.' . $san7a->getClientOriginalExtension();
            $san7a->move(public_path('uploads/tasks'), $san7aName);
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Image not uploaded successfully'
            ], 400);
        }
        

        if ($request->hasFile('san7a')) {
            $san7a = $request->file('san7a');
            $san7aName = time() . '.' . $san7a->getClientOriginalExtension();
            $san7a->move(public_path('uploads/tasks'), $san7aName);
            $task->san7a = $san7aName;
        }
        
        $task->update([
            'title' => $request->title,
            'description' => $request->description,
            // 'deadline' => $request->deadline,
        ]);
        

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
                'message' => 'Please correct the errors and try again.'
            ], 422);
        }
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(task $task)
    {
        if ($task) {
            $task->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Task Deleted Successfully'
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Records Found'
            ], 404);
        }
    }

    public function getUserTasks($userId)
    {
        $tasks = Task::join('studenttasks', 'tasks.id', '=', 'studenttasks.task_id')
                     ->where('studenttasks.user_id', $userId)
                     ->select('tasks.id', 'tasks.title', 'tasks.description', 'tasks.san7a')
                     ->get();
        return response()->json($tasks);
    }

    

}
