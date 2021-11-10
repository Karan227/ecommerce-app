const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
<<<<<<< HEAD
const isAuth = require('../middleware/is-auth');
=======
>>>>>>> 6819a78994ff93bcce6045323f89a23534abcb41

const router = express.Router();

// /admin/add-product => GET
<<<<<<< HEAD
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', isAuth, adminController.postAddProduct);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post('/edit-product', isAuth, adminController.postEditProduct);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);
=======
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
// router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// router.get('/edit-product/:productId', adminController.getEditProduct);

// router.post('/edit-product', adminController.postEditProduct);

// router.post('/delete-product', adminController.postDeleteProduct);
>>>>>>> 6819a78994ff93bcce6045323f89a23534abcb41

module.exports = router;
