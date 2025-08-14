# 🍽️ API de Gestión de Restaurantes

Una API de alto rendimiento y escalable para sistemas de gestión de restaurantes, construida con tecnologías modernas para manejar menús, procesamiento de pedidos y autenticación de usuarios.

## 🚀 Características Principales

- **Gestión de Menú**: Operaciones CRUD completas para los elementos del menú
- **Procesamiento de Pedidos**: Manejo de pedidos en tiempo real con personalización de artículos
- **Autenticación de Usuarios**: Seguridad basada en password
- **API RESTful**: Diseño intuitivo y consistente
- **Tipado Estático**: Desarrollado con TypeScript para una mejor experiencia de desarrollo
- **Arquitectura Escalable**: Preparada para manejar alto tráfico

## 🛠️ Tecnologías Utilizadas

- **Entorno de Ejecución**: Node.js
- **Framework**: Express.js
- **Base de Datos**: PostgreSQL con Prisma ORM
- **Validación**: Verificación de tipos con TypeScript
- **Calidad de Código**: ESLint + Prettier
- **Despliegue**: Compatible con Vercel

## 🚀 Comenzando

### Requisitos Previos

- Node.js 16 o superior
- npm o yarn
- PostgreSQL
- CLI de Vercel (para despliegue)

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/restaurant-app-api.git
   cd restaurant-app-api
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno:

   ```env
   PORT=8010
   DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/restaurant-app-db"
   ```

4. Ejecuta las migraciones de la base de datos:

   ```bash
   npx prisma migrate dev
   ```

5. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 📚 Endpoints de la API

### Autenticación

- `POST /api/auth/registro` - Registrar un nuevo usuario
- `POST /api/auth/login` - Iniciar sesión

### Elementos del Menú

- `GET /api/products` - Obtener todos los elementos del menú
- `POST /api/products` - Crear un nuevo elemento del menú

### Pedidos

- `GET /api/orders` - Obtener todos los pedidos
- `POST /api/orders` - Crear un nuevo pedido
