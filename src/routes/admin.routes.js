import express from 'express';
import { AdminController } from '../controllers/admin.controller.js'

const router = express.Router();

// Ruta para la vista de administrador
router.get('/users', AdminController.viewUsers);

// Otras rutas necesarias para administrador

export {router as adminRoutes};
