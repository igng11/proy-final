import express from 'express';
import { ShopController } from '../controllers/shop.controller.js';

const router = express.Router();

// Rutas relacionadas con la tienda
router.get('/catalog', ShopController.viewCatalog);
router.get('/product/:productId', ShopController.viewProductDetails);
router.get('/cart', ShopController.viewShoppingCart);
router.get('/checkout', ShopController.viewPaymentInfo);
router.post('/checkout', ShopController.processPayment);
router.get('/order-confirmation', ShopController.viewOrderConfirmation);

export default router;
