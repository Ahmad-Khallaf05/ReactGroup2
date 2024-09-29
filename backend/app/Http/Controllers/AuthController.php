<?php

namespace App\Http\Controllers;

use App\Models\User;

use Closure;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'name' => 'required|string|min:3',
                'gender' => 'required',
                'email' => 'required|email',
                'dob' => 'required|date',
                'parentName' => 'required|string',
                'parentPhone' => 'required|string',
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
                'gender' => $request->gender,
                'email' => $request->email,
                'dob' => $request->dob,
                'parentName' => $request->parentName,
                'parentPhone' => $request->parentPhone,
                'password'=>Hash::make($request->input('password')),
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
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;
        $cookie = cookie('jwt', $token, 60 * 24);

        return response()->json([
            'message' => 'Login successful',
            'user' => $user,
            'token' => $token, // Include token for debugging
        ])->withCookie($cookie);
    }

    public function loginUser(Request $request)
    {
        if (Auth::check()) {
            return response()->json(Auth::user());
        }

        return response()->json(['error' => 'Unauthorized', 'message' => 'You are not logged in.'], 401);
    }


    public function logout()
{
    $cookie =Cookie::forget('jwt');
    return response()->json([
        'message' => 'success',
    ])->withCookie($cookie);
}



}
