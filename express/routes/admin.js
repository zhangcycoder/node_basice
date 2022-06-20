const express = require('express')
const router = express.Router();

const { getAddProducts,
    getAdminEditProduct,
    setPostProducts, setAdminDelProduct,
    getProductList, setAdminEditProduct } = require('../controllers/admin')


router.use('/add_product', getAddProducts);
router.use('/edit_product', getAdminEditProduct);
router.use('/productList', getProductList);
router.post('/api/add_product', setPostProducts)
router.post('/api/edit_product', setAdminEditProduct)
router.post('/api/del_product', setAdminDelProduct)



module.exports = router
