## Backend (Laravel)
1. Ir a la carpeta del backend:
   ```bash
   cd gestor-tareasL10
   composer install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate
   php artisan serve
