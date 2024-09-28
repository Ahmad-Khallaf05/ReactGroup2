<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminRequest;
use App\Models\Admin;
use Illuminate\Http\Request;

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
        ],200);
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

            // if ($request->hasFile('admin_img')) {
            //     $admin_img = $request->file('admin_img');
            //     $filename = time() . '.' . $admin_img->getClientOriginalExtension();
            //     $path = ' '; // Directory where you want to store the image
            //     $admin_img->move($path, $filename);
    
            // // $path = $request->file('sport_image')->store('landing/img');
            // }

            Admin::create([
                'name' => $request->name,
                'email' => $request->email,
                'role' => $request->role,
                'san7a' => $request->san7a // Have to change when add image
            ]);
             return response()->json([
                'message' => "User successfully created."
            ],200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Something went really wrong!"
            ],500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(String $id)
    {
        $admins = Admin::find($id);
        if(!$admins){
          return response()->json([
             'message'=>'This admin not found'
          ],404);
        }
        return response()->json([
           'admins' => $admins
        ],200);
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
    public function update(AdminRequest $request, String $id)
    {
        try {
            // Find User
            $admins = Admin::find($id);
            if(!$admins){
              return response()->json([
                'message'=>'User Not Found.'
              ],404);
            }
       
            $admins->name = $request->name;
            $admins->email = $request->email;
            $admins->role = $request->role;
            $admins->san7a = $request->admin_img;
       
            $admins->save();
       
            return response()->json([
                'message' => "Information successfully updated."
            ],200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $admins = Admin::find($id);
        if(!$admins){
          return response()->json([
             'message'=>'This Admin Not Found.'
          ],404);
        }
         
        // Delete User
        $admins->delete();
       
        // Return Json Response
        return response()->json([
            'message' => "Admin successfully deleted."
        ],200);
    
    }
}
