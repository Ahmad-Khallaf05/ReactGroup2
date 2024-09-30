<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;
use App\Models\Studentclasse;
use App\Models\Classroom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentclasseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $classrooms = Classroom::all();
        $studentclasses = Studentclasse::all();
        $users = User::all();

        return response()->json([
            'classrooms' => $classrooms,
            'users' => $users,
            'studentclasses' => $studentclasses
        ]);
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
        $validator = Validator::make(
            $request->all(),
            [
                'user_id' => 'required',
                'classroom_id' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }

        $studentclass = Studentclasse::create([
            'classroom_id' => $request->classroom_id,
            'user_id' => $request->user_id,
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Classroom Created Successfully',
            'studentclass' => $studentclass,
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Studentclasse $studentclasse)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Studentclasse $studentclasse)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Studentclasse $studentclasse)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Studentclasse $studentclasse)
    {
        try {
            $studentclasse->delete();

            return response()->json([
                'status' => 200,
                'message' => 'Student class deleted successfully.',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'An error occurred while deleting the student class.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
