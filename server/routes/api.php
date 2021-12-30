<?php

use App\Http\Controllers\Api\V1\StudentController;
use App\Http\Controllers\Api\V1\SchoolParentController;
use Illuminate\Support\Facades\Route;

//students routes
Route::get('/getstudents', [StudentController::class, 'fetchAllStudents']);
Route::get('/getstudent/{id}', [StudentController::class, 'fetchOneStudent']);
Route::post('/poststudents', [StudentController::class, 'createdStudent']);


// parents routes
Route::get('/getSchoolParents', [SchoolParentController::class, 'index']);
