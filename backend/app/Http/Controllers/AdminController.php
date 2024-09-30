<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminRequest;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $admins = Admin::all();

        return response()->json([
            'result' => $admins
        ], 200);
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
    public function store(AdminRequest $request)
    {
        try {
            if ($request->san7a) {
                $file = $request->san7a;
                $extension = $request->san7a->getClientOriginalExtension();
                $fileNameSan7a = time() . '.' . $extension;
                $path = 'uploads/admins/san7a';
                $file->move($path, $fileNameSan7a);
            }

            Admin::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->input('password')),
                'role' => $request->role,
                // 'san7a' => $request->admin_img // Have to Ckeck when add image
                'san7a' => 'uploads/admins/san7a/' . $fileNameSan7a,
            ]);
            return response()->json([
                'message' => "User successfully created."
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $admins = Admin::find($id);
        if (!$admins) {
            return response()->json([
                'message' => 'This admin not found'
            ], 404);
        }
        return response()->json([
            'admins' => $admins
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AdminRequest $request, string $id)
    {
        try {
            $admins = Admin::find($id);
            if (!$admins) {
                return response()->json([
                    'message' => 'User Not Found.'
                ], 404);
            }

            // Handle image upload and replace old image
            $fileNameSan7a = $this->uploadFile($request->file('san7a'), 'san7a');

            // $admins->update($request->only(['name', 'email', 'role', 'san7a']));

            $admins->name = $request->name;
            $admins->email = $request->email;
            $admins->password = $request->password;
            $admins->role = $request->role;
            // $admins->san7a = $request->admin_img;
            $admins->san7a = $request->san7a;
            // 'san7a' => $fileNameSan7a ? 'uploads/students/san7a/' . $fileNameSan7a : $user->san7a,

            $admins->save();

            return response()->json([
                'message' => "Information successfully updated."
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!",
                "exception" => $e
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $admins = Admin::find($id);
        if (!$admins) {
            return response()->json([
                'message' => 'This Admin Not Found.'
            ], 404);
        }

        // Delete User
        $admins->delete();

        // Return Json Response
        return response()->json([
            'message' => "Admin successfully deleted."
        ], 200);

    }
}
