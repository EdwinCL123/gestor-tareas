<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ControladorAutenticacion;
use App\Http\Controllers\ControladorTarea;

Route::get('/ping', fn() => response()->json(['pong' => true]));

// Autenticación
Route::post('/register', [ControladorAutenticacion::class, 'register']);
Route::post('/login', [ControladorAutenticacion::class, 'ingresar']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/tasks', [ControladorTarea::class, 'index']);
    Route::post('/tasks', [ControladorTarea::class, 'store']);
    Route::get('/tasks/{id}', [ControladorTarea::class, 'show']);
    Route::put('/tasks/{id}', [ControladorTarea::class, 'update']);
    Route::delete('/tasks/{id}', [ControladorTarea::class, 'destroy']);
});

