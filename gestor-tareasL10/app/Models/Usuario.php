<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $table = 'usuarios';  

    protected $fillable = [
        'nombre',
        'correo',
        'clave',
    ];

    protected $hidden = [
        'clave',
    ];

    public function getAuthPassword()
    {
        return $this->clave;
    }
}
