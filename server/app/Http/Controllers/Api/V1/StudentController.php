<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Error;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    // renvoie la liste de tous les eleves de l'ecole
    public function fetchAllStudents(): array
    {
        $students = Student::all();

        return [
            'success' => true,
            'message' => 'Liste des utilisateurs',
            'data' => $students,
            'details' => [
                'service' => 'Clyde School',
                'version' => '1.0',
                'Language' => app()->getLocale()
            ]
        ];
    }

    // renvoie juste un seul eleve
    public function fetchOneStudent(int $id) : array
    {
        $student = Student::findOrFail($id)->first();

        return [
            'success' => true,
            'message' => 'Liste des utilisateurs',
            'data' => $student,
            'details' => [
                'service' => 'Clyde School',
                'version' => '1.0',
                'Language' => app()->getLocale()
            ]
        ];
    }

    //cree un eleve
    public function createdStudent(Request $request) : array
    {
        $studentArray = $this->validateRequest($request);

        try {
            Student::create($studentArray);
        } catch (Error $e) {
            return $e;
        }

        return [
            'success' => true,
            'message' => 'Creation des eleves',
            'data' => $studentArray,
            'details' => [
                'service' => 'Clyde School',
                'version' => '1.0',
                'Language' => app()->getLocale()
            ]
        ];
    }


    private function validateRequest(Request $request) : array
    {
        $validate = $request->validate([
            'last_name' =>'required|max:255',
            'first_name' => 'required|max:255',
            "adresse" =>'required|max:255',
            "ville" => 'required|max:255',
            "pays" => 'required|max:255',
            "status" => 'required',
            "image" => 'required|max:255',
            "date_naissance" => 'nullable|date',
            "email" => 'required|max:255|email',
            "school_parent_id" => 'required',
        ]);

        return $validate;
    }
}
