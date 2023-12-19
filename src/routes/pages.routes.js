import { Router } from "express";
import { PagesController } from "../controllers/pages.controller.js";
import { UsersController } from "../controllers/users.controller.js";

const router = Router();

// Ruta para obtener todos los usuarios
router.get('/getusers', UsersController.getAllUsers);

// Ruta para eliminar usuarios inactivos
router.delete('/deleteusers', UsersController.deleteInactiveUsers);

router.get("/home", PagesController.renderHome);

router.get("/shop", PagesController.renderShop);

router.get("/essential", PagesController.renderEssential);

router.get("/about", PagesController.renderAbout);

router.get("/contact", PagesController.renderContact);

router.get("/forgot-password", PagesController.renderForgotPassword);

router.get("/reset-password", PagesController.renderResetPassword);

export {router as pagesRouter}