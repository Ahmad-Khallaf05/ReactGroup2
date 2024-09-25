<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    public function index()
    {
        $user = User::all();
        if ($user->count() > 0) {
            return response()->json(
                [
                    'status' => 200,
                    'user' => $user
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


    public function create()
    {
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'name' => 'required|string',
                'email' => 'required|email',
                'password' => 'required|string',
            ]
        );
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        } else {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,

            ]);
            if ($user) {
                return response()->json([
                    'status' => 200,
                    'massage' => 'User Created Successfully'
                ], 200);
            } else {
                return response()->json([
                    'status' => 500,
                    'massage' => 'something error '
                ], 500);
            }
        }
    }


    public function show(string $id)
    {
        $user=User::find($id);
        if ($user) {
            return response()->json([
                'status' => 200,
                    'user' => $user
                ],200
            );
        }else
        {
            return response()->json([
                'status' => 404,
                'massage' => 'No Records Found'
            ],404);
        }
    }


    public function edit(string $id)
    {
        $user=User::find($id);
        if ($user) {
            return response()->json([
                'status' => 200,
                'user' => $user
            ],200
            );
        }else
        {
            return response()->json([
                'status' => 404,
                'massage' => 'No Records Found'
            ],404);
        }
    }


    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(),
            [
                'name' => 'required|string',
                'email' => 'required|email',
            ]
        );
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        } else {
            $user =User::find($id);
            if ($user) {
                $user->update([
                    'name' => $request->name,
                    'email' => $request->email,

                ]);

                return response()->json([
                    'status' => 200,
                    'massage' => 'User Updated Successfully'
                ], 200);
            } else {
                return response()->json([
                    'status' => 500,
                    'massage' => 'No Records Found'
                ], 500);
            }
        }
    }

    public function destroy(string $id)
    {
        $user =User::find($id);
        if ($user) {
           $user->delete();
            return response()->json([
                'status' => 200,
                'massage' => 'User Deleted Successfully'
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'massage' => 'No Records Found'
            ], 404);
        }
    }


}
