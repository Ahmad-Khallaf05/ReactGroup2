<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class task extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];

    /**
     * Get the classroom that owns the task.
     */
    public function classroom()
    {
        return $this->belongsTo(Classroom::class, 'classroom_id');
    }

    /**
     * The students that belong to the task.
     */
    public function students()
    {
        return $this->belongsToMany(User::class, 'task_user', 'task_id', 'user_id');
    }

    // Uncomment and use the following if you want to specify fillable attributes
    // protected $fillable = [
    //     'title',
    //     'description',
    //     'deadline',
    //     'san7a',
    // ];
}
