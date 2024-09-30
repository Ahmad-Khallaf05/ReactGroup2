<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;

class ChartController extends Controller
{
    public function index()
    {
            return response()->json([
                'status' => 200,
                'student' => User::all()->count(),
                'admin' => Admin::all()->count(),
                'teacher' => Admin::where('role', 'Teacher')->get()->count(),
                'supervisor' => Admin::where('role', 'Supervisor')->get()->count(),
                'manager' => Admin::where('role', 'Manager')->get()->count(),
                'event' => Event::all()->count(),
            ],200);
    }
}
