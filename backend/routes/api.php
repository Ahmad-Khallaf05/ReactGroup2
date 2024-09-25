<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/user' , [UserController::class,'index']);
Route::post('/user' , [UserController::class,'store']);
Route::get('/user/{id}' , [UserController::class,'show']);
Route::get('/user/{id}/edit' , [UserController::class,'edit']);
Route::put('/user/{id}/edit' , [UserController::class,'update']);
Route::delete('/user/{id}/delete' , [UserController::class,'destroy']);


Route::post('login',[AuthController::class,'login']);
Route::post('register',[AuthController::class,'register']);

Route::middleware(['auth:sanctum'])->group(function(){
    Route::get('loginUser',[AuthController::class,'loginUser']);
    Route::post('logout',[AuthController::class,'logout']);
});
