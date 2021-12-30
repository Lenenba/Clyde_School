<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'phone',
        'adresse',
        'ville',
        'pays',
        'status',
        'date_naissance',
        'email',
        'image',
        'school_parent_id'
    ];
}
