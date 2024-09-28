<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EventController;

Route::get('/event', [EventController::class, 'index']);
Route::post('/event', [EventController::class, 'store']);
Route::get('/event/{id}', [EventController::class, 'show']);
Route::put('/event/{id}', [EventController::class, 'update']); // Changed to match RESTful conventions
Route::delete('/event/{id}', [EventController::class, 'destroy']);


Route::prefix('contacts')->group(function () {
    Route::get('/', [ContactController::class, 'index']); // No middleware needed; uses api middleware by default
    Route::post('/', [ContactController::class, 'store']);
    Route::delete('/{id}', [ContactController::class, 'destroy']);
});



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//Tasks
Route::get('/tasks', [TaskController::class, 'index']);
Route::post('/tasks', [TaskController::class, 'store']);
Route::get('/tasks/{task}', [TaskController::class, 'show']);
Route::get('/tasks/{task}/edit', [TaskController::class, 'edit']);
Route::put('/tasks/{task}/edit', [TaskController::class, 'update']);
Route::delete('/tasks/{task}/delete', [TaskController::class, 'destroy']);


//Users
Route::get('/user', [UserController::class, 'index']);
Route::post('/user', [UserController::class, 'store']);
Route::get('/user/{id}', [UserController::class, 'show']);
Route::get('/user/{id}/edit', [UserController::class, 'edit']);
Route::put('/user/{id}/edit', [UserController::class, 'update']);
Route::delete('/user/{id}/delete', [UserController::class, 'destroy']);


Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('loginUser', [AuthController::class, 'loginUser']);
    Route::post('logout', [AuthController::class, 'logout']);
});

//Admin Routes
Route::get('admins', [AdminController::class, 'index']);
Route::get('admin/{id}', [AdminController::class, 'show']); 
Route::post('add_admin', [AdminController::class, 'store']); 
Route::put('admin_update/{id}', [AdminController::class, 'update']);
Route::delete('admin_delete/{id}', [AdminController::class, 'destroy']);
//RGD