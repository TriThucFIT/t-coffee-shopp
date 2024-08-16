const categoryService = require("../services/Category.service");
const productService = require("../services/Product.service");
const variantService = require("../services/Variant.service");
const variantOptionService = require("../services/VariantOption.service");
const ProductVariantService = require("../services/ProductVariant.service");
const ProductCategoryService = require("../services/ProductCategory.service");

const categories = [
  {
    id: "coffee",
    name: "Cà phê",
    icon: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-coffee.svg",
    description: "Cà phê ngon từ những hạt cà phê chất lượng nhất",
  },
  {
    id: "matcha",
    name: "Trà xanh",
    icon: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-matcha.svg",
    description: "Trà xanh ngon từ những lá trà xanh tươi mát",
  },
  {
    id: "food",
    name: "Đồ ăn vặt",
    icon: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-food.svg",
    description: "Đồ ăn vặt ngon từ những nguyên liệu tươi ngon",
  },
  {
    id: "milktea",
    name: "Trà sữa",
    icon: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-milktea.svg",
    description: "Trà sữa ngon từ những nguyên liệu tươi ngon",
  },
  {
    id: "drinks",
    name: "Giải khát",
    icon: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-drinks.svg",
    description: "Đồ uống giải khát ngon từ những nguyên liệu tươi ngon",
  },
  {
    id: "bread",
    name: "Bánh mỳ",
    icon: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-bread.svg",
    description: "Bánh mỳ ngon từ những nguyên liệu tươi ngon",
  },
  {
    id: "juice",
    name: "Nước ép",
    icon: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-juice.svg",
    description: "Nước ép ngon từ những nguyên liệu tươi ngon",
  },
];

const products = [
  {
    id: 1,
    name: "Caramel Latte",
    price: 35000,
    image:
      "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-square-1.webp",
    description:
      "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
    categoryId: ["coffee", "drinks"],
    variantId: ["size", "topping"],
  },
  {
    id: 2,
    name: "Mocha Frappuccino",
    price: 45000,
    image:
      "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-square-2.webp",
    description:
      "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
    categoryId: ["coffee"],
    variantId: ["size", "topping"],
  },
  {
    id: 3,
    name: "Grilled Pork Banh Mi",
    price: 30000,
    image:
      "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-square-3.webp",
    description:
      "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
    categoryId: ["food", "bread"],
    variantId: ["size"],
  },
  {
    id: 4,
    name: "Pizza",
    price: 28000,
    image:
      "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-square-4.webp",
    description:
      "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
    categoryId: ["food"],
    variantId: ["size"],
  },
  {
    id: 5,
    name: "Vanilla Latte",
    price: 35000,
    image:
      "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-square-5.webp",
    description:
      "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
    categoryId: ["coffee", "matcha"],
    variantId: ["size", "topping"],
  },
  {
    id: 6,
    name: "Caramel Macchiato",
    price: 38000,
    image:
      "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-square-6.webp",
    description:
      "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
    categoryId: ["coffee", "milktea"],
    variantId: ["size", "topping"],
  },
  {
    id: 7,
    name: "Espresso",
    price: 32000,
    image:
      "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-square-7.webp",
    description:
      "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
    categoryId: ["coffee"],
    variantId: ["size", "topping"],
  },
  {
    id: 8,
    name: "Green Tea Latte",
    price: 25000,
    image:
      "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-square-8.webp",
    description:
      "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
    categoryId: ["matcha"],
    variantId: ["size", "topping"],
  },
  {
    id: 9,
    name: "Bộ 3 Blue Corner Coffee siêu HOT",
    image:
      "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-rect-1.webp",
    price: 25000,
    sale: {
      type: "percent",
      percent: 0.2,
    },
    description:
      "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
    categoryId: ["coffee", "milktea", "drinks"],
    variantId: ["size", "topping"],
  },
  {
    id: 10,
    name: "Combo Hi Tea Aroma",
    image:
      "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-rect-2.webp",
    price: 57000,
    sale: {
      type: "fixed",
      amount: 7000,
    },
    description:
      "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
    categoryId: ["coffee", "drinks"],
    variantId: ["size", "topping"],
  },
  {
    id: 11,
    name: "Milk Tea Combo",
    price: 55000,
    image:
      "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-rect-3.webp",
    description:
      "There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes",
    categoryId: ["milktea"],
    variantId: ["size", "topping"],
    sale: {
      type: "percent",
      percent: 0.5,
    },
  },
];

const variants = [
  {
    id: "size",
    label: "Kích cỡ",
    type: "single",
    default: "m",
    options: [
      {
        id: "s",
        label: "Nhỏ",
        priceChange: {
          type: "percent",
          percent: -0.2,
        },
      },
      {
        id: "m",
        label: "Vừa",
      },
      {
        id: "l",
        label: "To",
        priceChange: {
          type: "percent",
          percent: 0.2,
        },
      },
    ],
  },
  {
    id: "topping",
    label: "Topping",
    type: "multiple",
    default: ["t1", "t4"],
    options: [
      {
        id: "t1",
        label: "Trân châu",
        priceChange: {
          type: "fixed",
          amount: 5000,
        },
      },
      {
        id: "t2",
        label: "Bánh flan",
        priceChange: {
          type: "fixed",
          amount: 10000,
        },
      },
      {
        id: "t3",
        label: "Trang trí",
        priceChange: {
          type: "percent",
          percent: 0.15,
        },
      },
      {
        id: "t4",
        label: "Không lấy đá",
        priceChange: {
          type: "fixed",
          amount: -5000,
        },
      },
    ],
  },
];

const insertDataToDB = async () => {
  try {
    for (const item of categories) {
      console.log("add caterogy : ", item.id);

      await categoryService.createCategory({
        id: item.id,
        name: item.name,
        icon: item.icon,
        description: item.description,
      });
    }

    for (const item of variants) {
      console.log("add variant : ", item.id);

      await variantService.createVariant({
        id: item.id,
        name: item.label,
        type: item.type,
      });
    }

    for (const item of products) {
      console.log("add product : ", item.name);
      await productService.createProduct({
        name: item.name,
        price: item.price,
        image: item.image,
        description: item.description,
      });

      for (const categoryId of item.categoryId) {
        const category = await categoryService.getCategoryById(categoryId);
        const product = await productService.getProductByName(item.name);
        if (!category) {
          console.error(`Category ${categoryId} not found`);
          return;
        } else if (!product) {
          console.error(`Product ${item.name} not found`);
          return;
        }
        console.log("add product category : ", product.id, category.id);

        await ProductCategoryService.createProductCategory({
          product_id: product.id,
          category_id: category.id,
        });
      }

      item.variantId.forEach(async (variantId) => {
        const variant = await variantService.getVariantById(variantId);
        const product = await productService.getProductByName(item.name);
        if (!variant) {
          console.error(`Variant ${variantId} not found`);
          return;
        }
        console.log("add product variant : ", product.id, variant.id);

        await ProductVariantService.createProductVariant({
          product_id: product.id,
          variant_id: variant.id,
        });
      });
    }

    for (const item of variants) {
      const variant = await variantService.getVariantById(item.id);
      if (!variant) {
        console.error(`Variant ${item.id} not found`);
        return;
      }
      for (const option of item.options) {
        console.log("add variant option : ", option.label);

        await variantOptionService.createVariantOption({
          name: option.label,
          variant_id: variant.id,
          additional_price:
            option.priceChange?.amount || option.priceChange?.percent || 0,
        });
      }
    }

    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data: ", error);
  }
};

module.exports = insertDataToDB;
