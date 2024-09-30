<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class task extends Model
{
    use HasFactory;

//    protected $guarded = [];
    function class(
    ) {
        return $this->belongsTo(Classroom::class, 'classroom_id');
    }

    /**
     * The students that belong to the task.
     */
    public function students()
    {
        return $this->belongsToMany(User::class, 'task_user', 'task_id', 'user_id');
    }

     protected $fillable = [
         'title',
         'description',
         'deadline',
         'san7a',
     ];

}
