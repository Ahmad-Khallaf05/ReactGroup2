<?php

namespace App\Http\Controllers;

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
        //
        $tasks = task::all();
        if ($tasks->count() > 0) {
            return response()->json(
                [
                    'status' => 200,
                    'tasks' => $tasks
                ],
                200
            );
        } else {
            return response()->json(
                [
                    'status' => 404,
                    'massage' => 'No Records Found'
                ],
                404
            );
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required|string',
                'description' => 'required|string',
                'progress' => 'required',
                'deadline' => 'required|string',
            ]
        );
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        } else {
            $user = task::create([
                'title' => $request->title,
                'description' => $request->description,
                'progress' => $request->progress,
                'deadline' => $request->deadline,

            ]);
            if ($user) {
                return response()->json([
                    'status' => 200,
                    'massage' => 'Task Created Successfully'
                ], 200);
            } else {
                return response()->json([
                    'status' => 500,
                    'massage' => 'something error '
                ], 500);
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(task $task)
    {
        //
        if ($task) {
            return response()->json(
                [
                    'status' => 200,
                    'task' => $task
                ],
                200
            );
        } else {
            return response()->json([
                'status' => 404,
                'massage' => 'No Records Found'
            ], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(task $task)
    {
        //
        if ($task) {
            return response()->json(
                [
                    'status' => 200,
                    'task' => $task
                ],
                200
            );
        } else {
            return response()->json([
                'status' => 404,
                'massage' => 'No Records Found'
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, task $task)
    {
        //
        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required|string',
                'progress' => 'required',
                'description' => 'required|string',
                'deadline' => 'required|string',
            ]
        );
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        } else {
            if ($task) {
                $task->update([
                    'title' => $request->title,
                    'progress' => $request->progress,
                    'description' => $request->description,
                    'deadline' => $request->deadline,
                ]);
                return response()->json([
                    'status' => 200,
                    'massage' => 'task Updated Successfully'
                ], 200);
            } else {
                return response()->json([
                    'status' => 500,
                    'massage' => 'No Records Found'
                ], 500);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(task $task)
    {
        //
        if ($task) {
            $task->delete();
            return response()->json([
                'status' => 200,
                'massage' => 'Task Deleted Successfully'
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'massage' => 'No Records Found'
            ], 404);
        }
    }

    public function getUserTasks($userId)
    {
        $tasks = Task::join('studenttasks', 'tasks.id', '=', 'studenttasks.task_id')
                     ->where('studenttasks.user_id', $userId)
                     ->select('tasks.id', 'tasks.title', 'tasks.description', 'tasks.san7a', 'studenttasks.timeoOfDelivery')
                     ->get();
        return response()->json($tasks);
    }

}
