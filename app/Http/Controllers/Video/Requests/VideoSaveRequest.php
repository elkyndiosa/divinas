<?php

namespace App\Http\Controllers\Video\Requests;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
class VideoSaveRequest extends FormRequest
{

    public function authorize()
    {
        return Auth::check();
    }
    public function rules()
    {
        return  [
            // 'file'  =>  'required|file|max:10000|mimes:mp4,mov,ogg,qt,webm'
        ];
    }
    public function messages()
    {
        return [
            // 'file.required'  => 'Ingresa un Video',
            // 'file.file' => 'Debe ingresar un archivo',
            // 'file.max' => 'Video es demasiado grande',
            // 'file.mimes' => 'Formato de video no valido',
        ];
    }
}
