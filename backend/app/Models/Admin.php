<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
class Admin extends Authenticatable
{
    use HasFactory , Notifiable , HasApiTokens;

    use SoftDeletes;
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'san7a'
    ];
    protected $table = 'admins';
    function classes()
    {

        return $this->hasMany(Classroom::class, 'classroom_id');
    }
    function events()
    {
        return $this->hasMany(Event::class);
    }
}
