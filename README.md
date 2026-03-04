# Audiophile E-commerce · Fullstack

<p align="center">
  <img src="./preview.jpg" alt="Audiophile preview" width="100%" />
</p>

<p align="center">
  E-commerce moderno construido con React + Vite en el frontend y Express + MongoDB en el backend.
</p>

<p align="center">
  <img alt="Frontend" src="https://img.shields.io/badge/Frontend-React%2019-61DAFB?logo=react&logoColor=black" />
  <img alt="Build tool" src="https://img.shields.io/badge/Build-Vite-646CFF?logo=vite&logoColor=white" />
  <img alt="Backend" src="https://img.shields.io/badge/Backend-Express%205-000000?logo=express&logoColor=white" />
  <img alt="Database" src="https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white" />
</p>

---

## Descripción

Implementación fullstack del challenge **Audiophile E-commerce** de Frontend Mentor.

El proyecto incluye:

- Catálogo de productos por categoría y detalle
- Carrito persistido por usuario anónimo mediante cookie firmada
- Checkout con validaciones y creación de órdenes
- Hash de datos sensibles de pago (e-money) antes de guardar
- Integración frontend/backend vía rutas `/api/*`

---

## Demo

- https://audiophile-ecommerce-six-rho.vercel.app

> El frontend usa un rewrite para redirigir `/api/*` al backend en producción.

---

## Features

- Diseño responsive (mobile, tablet, desktop)
- Estados hover y componentes reutilizables
- Gestión completa del carrito (agregar, actualizar, remover, limpiar)
- Cálculo de totales de checkout en cliente
- Creación y consulta de órdenes
- Cookie `user` firmada para identificar carrito sin autenticación tradicional

---

## Stack técnico

### Frontend (`/client`)

- React 19
- React Router
- React Hook Form
- Tailwind CSS v4
- Vite
- React Toastify

### Backend (`/backend`)

- Node.js + Express 5
- MongoDB + Mongoose
- Cookie Parser
- CORS
- Dotenv
- Bcrypt

---

## Arquitectura del proyecto

```bash
audiophile-ecommerce-web/
├─ client/                 # Aplicación React + Vite
│  ├─ src/
│  │  ├─ api/              # Consumo de endpoints
│  │  ├─ components/       # UI reusable
│  │  ├─ contexts/         # Estado global (form/product)
│  │  └─ pages/            # Vistas principales
│  └─ public/assets/       # Imágenes del challenge
├─ backend/                # API REST
│  ├─ config/              # DB
│  ├─ controllers/         # Lógica de negocio
│  ├─ middlewares/         # Cookies firmadas
│  ├─ models/              # Schemas Mongoose
│  └─ routes/              # Rutas /api
└─ README.md
```

---

## Instalación local

### 1) Clonar el repositorio

```bash
git clone <URL_DEL_REPO>
cd audiophile-ecommerce-web
```

### 2) Instalar dependencias

```bash
# Backend
cd backend
npm install

# Frontend
cd ../client
npm install
```

### 3) Configurar entorno del backend

Crear `backend/.env` (ver sección de variables de entorno).

### 4) Ejecutar en desarrollo

En dos terminales separadas:

```bash
# Terminal 1 - backend
cd backend
npm start
```

```bash
# Terminal 2 - frontend
cd client
npm run dev
```

Frontend por defecto: `http://localhost:5173`  
Backend por defecto: `http://localhost:5000`

---

## Variables de entorno

Archivo: `backend/.env`

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>/<dbName>
COOKIE_SECRET=tu_clave_secreta_larga
```

### Notas

- `MONGO_URI` debe apuntar a una base con colección de productos cargada.
- `COOKIE_SECRET` se usa para firmar la cookie `user`.
- Si vas a trabajar en local con HTTP, puede ser necesario ajustar opciones de cookie (`secure`/`sameSite`) para pruebas locales del carrito.

---

## Flujo funcional

1. El middleware genera una cookie firmada `user` para identificar al visitante.
2. El carrito se vincula a ese `user` en MongoDB.
3. Durante checkout, se envían datos personales, envío y pago.
4. Si el método es `e-money`, número y PIN se hashean con `bcrypt`.
5. Se guarda la orden y se devuelve la respuesta al frontend.

---

## Autor

Proyecto desarrollado por **Jeronimo Cardu** como solución fullstack del challenge Audiophile.
