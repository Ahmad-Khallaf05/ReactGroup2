<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    use HasFactory;

    protected $guarded = [];

    function teacher()
    {
        return $this->belongsTo(Admin::class, 'admin_id');
    }
    function tasks()
    {
        return $this->hasMany(Task::class);
    }
    function Studentclasse()
    {
        return $this->hasMany(Studentclasse::class ,'Studentclasse_id');
    }
    // protected $fillable = ['name', 'level'];
}
