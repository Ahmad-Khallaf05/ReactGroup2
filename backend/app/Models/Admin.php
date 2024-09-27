<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;

    protected $guarded = [];
    function classes()
    {
        return $this->hasMany(Classroom::class, 'classroom_id');
    }
    function events()
    {
        return $this->hasMany(Event::class);
    }
}
