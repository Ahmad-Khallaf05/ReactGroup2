<?php

namespace App\Http\Controllers;

use App\Models\User;

use Closure;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        return User::create([
            'name'=>$request->input('name'),
            'email'=>$request->input('email'),
            'password'=>Hash::make($request->input('password')),
        ]);


    }
    public function login( Request $request)
    {
        if ( !Auth::attempt($request->only('email','password') ))
        {
            return response()->json([
                'message' => 'invalid credentials'
            ],Response::HTTP_UNAUTHORIZED);
        }
        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;
        $cookie = cookie('jwt', $token, 60 * 24);
        return response()->json([
            'message' => $token,
        ])->withCookie($cookie);
    }

   function loginUser(Request $request)
   {
       return Auth::user();
   }

public function logout()
{
    $cookie =Cookie::forget('jwt');
    return response()->json([
        'message' => 'success',
    ])->withCookie($cookie);
}



}
