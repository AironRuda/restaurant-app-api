import express from 'express';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middlewares/errorHandler';
import cors from 'cors';
import orderRoutes from './routes/orderRoutes';

const app = express();

// Configuración de CORS
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://restaurant-app-livid-rho.vercel.app',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
