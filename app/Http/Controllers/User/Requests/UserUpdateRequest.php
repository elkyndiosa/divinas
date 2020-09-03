<?php

namespace App\Http\Controllers\User\Requests;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
class UserUpdateRequest extends FormRequest
{

    public function authorize()
    {
        return Auth::check();
    }
    public function rules()
    {
        return  [
            'name' => 'required|max:255|string',
            'email' => [
                'required', 
                'string', 
                'email',
                'max:255',
                Rule::unique('users')->ignore($this->user->id, 'id')
            ], 
            // 'password' => 'required|string|min:8', 
            // 'house_id' => 'int', 
            // 'nikc' => 'max:255|string',
            // 'years' => 'int',
            // 'delivery' => 'string',
            // 'have_site' => 'string',
            // 'image_profile'=> 'string',
            // 'time_id' => 'int', 
            // 'city_id' => 'int', 
            // 'barrio_id' => 'int', 
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'Ingresa un nombre',
            'name.max' => 'Ingresa un nombre con menos de 255 caracteres',
            'name.string' => 'Ingresa un nombre valido',
            'email.required' => 'Ingresa un email',
            'email.string' => 'Ingresa un email valido',
            'email.email' => 'Ingresa un email valido',
            'email.max' => 'Ingresa un email con menos de 255 caracteres',
            'email.unique' => 'Correo electronico ya existe en nuestro datos',
            // 'password.required' => 'Ingresa una contraseña',
            // 'password.string' => 'Ingresa una contraseña valida',
            // 'password.min' => 'Ingresa una contraseña con mas caracteres',
            // 'nikc.string' => 'Ingresa un nikc valido',
            // 'nikc.max' => 'Ingresa un nikc con menos de 255 caracteres',
            // 'years.int' => 'Ingresa una edad valida',
            // 'delivery.string' => 'Ingresa una delivery valida',
            // 'have_site.string' => 'Ingresa una sitio valida',
            // 'image_profile.string' => 'Ingresa una imagen valida'
        ];
    }
}
