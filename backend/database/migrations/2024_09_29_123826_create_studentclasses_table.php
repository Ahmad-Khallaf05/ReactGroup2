<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Admin;
use App\Models\Classroom;
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('studentclasses', function (Blueprint $table) {
            $table->id();
            // $table->string('EnrollmentID');
            $table->foreignIdFor(Admin::class)->constrained();
            $table->foreignIdFor(Classroom::class)->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('studentclasses');
    }
};
