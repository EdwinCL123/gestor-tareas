<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tarea;
use Illuminate\Support\Facades\Auth;

class ControladorTarea extends Controller
{
    ////////// Listar las tareas del user
    public function index()
    {
        $usuario = Auth::user();
    $tareas = Tarea::where('usuario_id', $usuario->id)->get();

        return response()->json($tareas);
    }

    //////77 Crear una nueva tarea
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|string|max:255',
            'descripcion' => 'nullable|string',
        ]);

        $tarea = Tarea::create([
            'titulo' => $request->titulo,
            'descripcion' => $request->descripcion,
            'estado' => 'pendiente',
            'usuario_id' => auth()->id(),
        ]);

        return response()->json($tarea, 201);
    }

    public function show($id)
    {
        $usuario = Auth::user();
        $tarea = Tarea::where('usuario_id', $usuario->id)->findOrFail($id);

        return response()->json($tarea);
    }

    // Actualizar  tarea
    public function update(Request $request, $id)
    {
        $usuario = Auth::user();
        $tarea = Tarea::where('usuario_id', $usuario->id)->findOrFail($id);

        $request->validate([
            'titulo' => 'sometimes|required|string|max:150',
            'descripcion' => 'nullable|string',
            'estado' => 'in:pendiente,completada', 
        ]);

        $tarea->update($request->all());

        return response()->json([
            'mensaje' => 'Tarea actualizada con éxito',
            'tarea' => $tarea
        ]);
    }

    // Eliminar  tarea
    public function destroy($id)
    {
        $usuario = Auth::user();
        $tarea = Tarea::where('usuario_id', $usuario->id)->findOrFail($id);

        $tarea->delete();

        return response()->json(['mensaje' => 'Tarea eliminada con éxito']);
    }

    ///// Cambiar estado (pendiente O completada)
    public function cambiarEstado($id)
    {
        $usuario = Auth::user();
        $tarea = Tarea::where('usuario_id', $usuario->id)->findOrFail($id);

        $tarea->estado = $tarea->estado === 'pendiente' ? 'completada' : 'pendiente'; 
        $tarea->save();

        return response()->json([
            'mensaje' => 'Estado actualizado',
            'tarea' => $tarea
        ]);
    }
}
