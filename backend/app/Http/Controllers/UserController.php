<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use function PHPUnit\Framework\isEmpty;
use Illuminate\Support\Facades\Auth;
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
                'name' => 'required|string|min:3',
                'gender' => 'required',
                'email' => 'required|email',
                'dob' => 'required|date',
                'parentName' => 'required|string',
                'parentPhone' => 'required|string',
//                'san7a' => 'nullable|image|mimes:jpeg,png,jpg,webp',
//                'officialId' => 'nullable|image|mimes:jpeg,png,jpg,webp',
                'password' => 'required|string',
            ]
        );

        if ($request->san7a) {
            $file=$request->san7a;
            $extension=$request->san7a->getClientOriginalExtension();
            $fileNameSan7a=time().'.'.$extension;
            $path='uploads/students/san7a';
            $file->move($path, $fileNameSan7a);
        }
        if ($request->officialId) {
            $file=$request->officialId;
            $extension=$file->getClientOriginalExtension();
            $fileNameId=time().'.'.$extension;
            $path='uploads/students/officialId';
            $file->move($path, $fileNameId);
        }
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        } else {
            $user = User::create([
                'name' => $request->name,
                'gender' => $request->gender,
                'email' => $request->email,
                'dob' => $request->dob,
                'parentName' => $request->parentName,
                'parentPhone' => $request->parentPhone,
                'san7a' => 'uploads/students/san7a/'.$fileNameSan7a,
                'officialId' => 'uploads/students/officialId/'.$fileNameId,
                'password'=>Hash::make($request->input('password')),]);
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
//   if (isEmpty($request)) {
//       return response()->json([
//           'status' => 403,
//           "data"=>$request->name
//       ],403);
//   }
        // Validation rules
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:3',
            'gender' => 'required|string|max:7',
            'email' => 'required|email',
            'dob' => 'required|date',
            'parentName' => 'required|string',
            'parentPhone' => 'required|string',
//            'san7a' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
//            'officialId' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        // Return validation errors if any
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }

        // Find the user
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'status' => 404,
                'message' => 'No Records Found'
            ], 404);
        }

        // Handle file uploads
        $fileNameSan7a = $this->uploadFile($request->file('san7a'), 'san7a');
        $fileNameOfficialId = $this->uploadFile($request->file('officialId'), 'officialId');
//        if ($request->san7a) {
//            $file=$request->san7a;
//            $extension=$request->san7a->getClientOriginalExtension();
//            $fileNameSan7a=time().'.'.$extension;
//            $path='uploads/students/san7a';
//            $file->move($path, $fileNameSan7a);
//        }
//        if ($request->officialId) {
//            $file=$request->officialId;
//            $extension=$file->getClientOriginalExtension();
//            $fileNameOfficialId=time().'.'.$extension;
//            $path='uploads/students/officialId';
//            $file->move($path, $fileNameOfficialId);
//        }

        // Update user details
        $user->update([
            'name' => $request->name,
            'gender' => $request->gender,
            'email' => $request->email,
            'dob' => $request->dob,
            'parentName' => $request->parentName,
            'parentPhone' => $request->parentPhone,
            // 'san7a' => $fileNameSan7a ? 'uploads/students/san7a/' . $fileNameSan7a : $user->san7a,
            // 'officialId' => $fileNameOfficialId ? 'uploads/students/officialId/' . $fileNameOfficialId : $user->officialId,
        ]);
        $user = Auth::user();
        // $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'status' => 200,
            'user' => $user,
            // 'token' => $token,
            'message' => 'User Updated Successfully'
        ], 200);
    }

// Helper function for file uploads
    private function uploadFile($file, $type)
    {
        if ($file) {
            $fileName = time() . '.' . $file->getClientOriginalExtension();
            $path = 'uploads/students/' . $type;
            $file->move($path, $fileName);
            return $fileName;
        }
        return null;
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


    public function chart()
    {
        return response()->json([
            'status' => 200,
            'student' => User::all()->count(),
            'admin' => Admin::all()->count(),
            'teacher' => Admin::where('role', 'Teacher')->count()->get(),
            'supervisor' => Admin::where('role', 'Supervisor')->count()->get(),
            'manager' => Admin::where('role', 'Manager')->count()->get(),
            'event' => Event::all()->count(),
        ],200);
    }
}
