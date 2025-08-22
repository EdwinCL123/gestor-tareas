**Backend (API REST)** → Laravel 10 (`gestor-tareasL10`)  
1. Ir a la carpeta del backend:
   ```bash
   cd gestor-tareasL10
   composer install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate
   php artisan serve

**Frontend (Interfaz Web)** → React + Vite + Tailwind (`gestor-tareas-react`)  
1.Ir a la carpeta del frontend:
   ```bash
   cd gestor-tareas-react
   npm install
   npm run dev
