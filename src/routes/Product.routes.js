/**
 * @swagger
 * /products:
 * 
 */

const router = require("express").Router();
const productController = require("../controllers/Product.controller");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/:id/categories", productController.getCategoriesByProduct);
router.get("/category/id/:id", productController.getProductsByCategoryId);
router.get("/category/name/:name", productController.getProductsByCategoryName);


module.exports = router;
