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
}
