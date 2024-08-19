/**
 * @swagger
 * /products:
 *
 */

const router = require("express").Router();
const productController = require("../controllers/Product.controller");
const upload = require("../middlewares/MulterFileStorage");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", upload.single("image"), productController.createProduct);
router.put("/:id", upload.single("image"), productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/:id/categories", productController.getCategoriesByProduct);
router.get("/category/id/:id", productController.getProductsByCategoryId);
router.get("/category/name/:name", productController.getProductsByCategoryName);

router.post(
  "/:id/upload",
  upload.single("image"),
  productController.updateImage
);

module.exports = router;
