<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $guarded = [];
    function class(
    ) {
        return $this->belongsTo(Classroom::class, 'classroom_id');
    }
    function sturdents()
    {
        return $this->belongsToMany(User::class, 'user_id');
    }
}
