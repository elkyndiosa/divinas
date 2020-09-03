<?php

namespace App\Http\Controllers\Image\Requests;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
class ImageSaveRequest extends FormRequest
{

    public function authorize()
    {
        return Auth::check();
    }
    public function rules()
    {
        return  [
            'file'  =>  'required|file|image|mimes:jpeg,png,gif,jpg|max:2048'
        ];
    }
    public function messages()
    {
        return [
            'file.required'  => 'Ingresa una Imagen',
            'file.file' => 'Debe ingresar un archivo',
            'file.image' => 'El archivo debe ser una imagen',
            'file.mimes' => 'Formato de imagen no valido',
            'file.max' => 'Imagen es demasiado grande',
        ];
    }
}
