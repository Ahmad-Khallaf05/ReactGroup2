<?php

namespace App\Http\Controllers;

use App\Models\Classroom;
use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Validator;

class ClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $classrooms = Classroom::all();
        $admins = Admin::all();
        return response()->json(['classrooms' => $classrooms, 'admins' => $admins]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // if($request->admin_id == null)
        //    return response()->json([$request->admin_id]);
        $temp =$request->admin_id;
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'level' => 'required|string',
                'admin_id' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }

        $classroom = Classroom::create([
            'name' => $request->name,
            'level' => $request->level,
            'admin_id' => $temp,
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Classroom Created Successfully',
            'classroom' => $classroom,
        ], 200);
    }


    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $classroom = Classroom::find($id);

        if (!$classroom) {
            return response()->json([
                'status' => 404,
                'message' => 'Classroom not found'
            ], 404);
        }

        return response()->json(['classroom' => $classroom]);
    }
    public function edit($id)
    {
        $classroom = Classroom::find($id);

        if (!$classroom) {
            return response()->json([
                'status' => 404,
                'message' => 'Classroom not found',
            ], 404);
        }

        return response()->json([
            'status' => 200,
            'classroom' => $classroom,
        ], 200);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $classroom = Classroom::find($id);

        if (!$classroom) {
            return response()->json(['message' => 'Classroom not found'], 404);
        }

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'level' => 'required|string',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }

        // Use $request->all() instead of $validator->all() to get the data
        $classroom->update($request->all());

        return response()->json(['message' => 'Classroom updated successfully', 'classroom' => $classroom], 200);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $classroom = Classroom::find($id);

        if (!$classroom) {
            return response()->json([
                'status' => 404,
                'message' => 'Classroom not found'
            ], 404);
        }

        $classroom->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Classroom deleted successfully'
        ], 200);
    }
}
