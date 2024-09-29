<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ClassroomController;
use App\Http\Controllers\StudentclasseController;
use App\Http\Controllers\SubjectController;
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
//classrooms
Route::get('/classrooms', [ClassroomController::class, 'index']);
Route::post('/classrooms', [ClassroomController::class, 'store']);
Route::apiResource('classrooms', ClassroomController::class);
Route::get('/classrooms/{classroom}', [ClassroomController::class, 'show']);
Route::get('/classrooms/{classroom}/edit', [ClassroomController::class, 'edit']);
Route::put('/classrooms/{classroom}/edit', [ClassroomController::class, 'update']);
Route::delete('/classrooms/{id}/delete', [ClassroomController::class, 'destroy']);
//studentclassrooms
Route::get('/studentclasses', [StudentclasseController::class, 'index']);
Route::post('/studentclasses', [StudentclasseController::class, 'store']);
Route::apiResource('studentclasses', StudentclasseController::class);
Route::get('/studentclasses/{studentclass}', [StudentclasseController::class, 'show']);
Route::get('/studentclasses/{studentclass}/edit', [StudentclasseController::class, 'edit']);
Route::put('/studentclasses/{studentclass}/edit', [StudentclasseController::class, 'update']);
Route::delete('/studentclasses/{studentclasse}', [StudentclasseController::class, 'destroy']);
//Subject
Route::get('/subjects', [SubjectController::class, 'index']);
Route::post('/subjects', [SubjectController::class, 'store']);
Route::get('/subjects/{subject}', [SubjectController::class, 'show']);
Route::get('/subjects/{subject}/edit', [SubjectController::class, 'edit']);
Route::put('/subjects/{subject}/edit', [SubjectController::class, 'update']);
Route::delete('/subjects/{subject}/delete', [SubjectController::class, 'destroy']);


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
