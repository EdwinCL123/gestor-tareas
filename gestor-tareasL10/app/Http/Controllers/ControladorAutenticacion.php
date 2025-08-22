<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ControladorAutenticacion extends Controller
{
   public function register(Request $request)
{
    $request->validate([
        'nombre' => 'required|string|max:100',
        'correo' => 'required|email|unique:usuarios,correo',
        'clave' => 'required|min:6'
    ]);

    $usuario = Usuario::create([
        'nombre' => $request->nombre,
        'correo' => $request->correo,
        'clave' => Hash::make($request->clave),
    ]);

    return response()->json([
        'message' => 'Usuario registrado correctamente',
        'usuario' => $usuario
    ], 201);
}

    public function ingresar(Request $request)
    {
        $request->validate([
            'correo' => 'required|email',
            'clave' => 'required'
        ]);

        $user = Usuario::where('correo', $request->correo)->first();

        if (! $user || ! Hash::check($request->clave, $user->clave)) {
            return response()->json(['message' => 'Credenciales incorrectas'], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login exitoso',
            'token' => $token,
            'user' => $user
        ]);
    }
}
