<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // return false;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if(request()->isMethod('post')) {
        return [
            'name' => 'required|string',
            'email' => 'required|string',
            'password' => 'required|string',
            'role' => 'required|string',
            'san7a' => 'nullable|image|mimes:jpeg,png,jpg,gif'
        ];
    } else {
            return [
                'name' => 'required|string',
                'email' => 'required|string',
                'password' => 'required|string',
                'role' => 'required|string',
                'san7a' => 'nullable|image|mimes:jpeg,png,jpg,gif'
            ];
        }
    }
    public function messages()
    {
        if(request()->isMethod('post')) {
            return [
                'name.required' => 'Name is required!',
                'email.required' => 'Email is required!',
                'password.required' => 'Email is required!',
                'role.required' => 'Role field is required!',
                'san7a' => 'nullable|image|mimes:jpeg,png,jpg,gif'

            ];
        } else {
            return [
                'name.required' => 'Name is required!',
                'email.required' => 'email is required!',
                'role.required' => 'Role field is required!'
            ];   
        }
    }

}
