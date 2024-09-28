<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $subjects = Subject::all();
        if ($subjects->count() > 0) {
            return response()->json(
                [
                    'status' => 200,
                    'subjects' => $subjects
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


        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',

            ]
        );
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        } else {
            $user = Subject::create([
                'name' => $request->name,
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
    public function show(Subject $subject)
    {
        if ($subject) {
            return response()->json(
                [
                    'status' => 200,
                    'subject' => $subject
                ],
                200
            );
        } else {
            return response()->json([
                'status' => 404,
                'massage' => 'No Records Found'
            ], 404);
        }    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Subject $subject)
    {
        if ($subject) {
            return response()->json(
                [
                    'status' => 200,
                    'task' => $subject
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
    public function update(Request $request, Subject $subject)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',

            ]
        );
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        } else {
            if ($subject) {
                $subject->update([
                    'name' => $request->name,

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
    public function destroy(Subject $subject)
    {
        if ($subject) {
            $subject->delete();
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
}
