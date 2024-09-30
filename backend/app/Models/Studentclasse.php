<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
class Studentclasse extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function admin()
    {
        return $this->belongsTo(Admin::class ,'admin_id');
    }
    public function user()
    {
        return $this->hasMany(User::class ,'user_id');
    }
    
    function classroom()
    {
        return $this->belongsTo(Classroom::class, 'classroom_id');
    }
}
