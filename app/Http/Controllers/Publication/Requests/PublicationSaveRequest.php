<?php

namespace App\Http\Controllers\Publication\Requests;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
class PublicationSaveRequest extends FormRequest
{

    public function authorize()
    {
        return Auth::check();
    }
    public function rules()
    {
        return  [
            'description'  =>  'required|string',
            'price'  =>  'required|integer',
        ];
    }
    public function messages()
    {
        return [
            'description.required'  => 'Ingresa una Descripcion',
            'description.string' => 'Descripcion no valida',
            'price.required' => 'Ingresa un precio',
            'price.integer' => 'Formato de precio no valido',
        ];
    }
}
