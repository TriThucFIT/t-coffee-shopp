const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./src/config/dbConnection");
const insertDataToDB = require("./src/utils/insertDataToDB");

const productRouter = require("./src/routes/Product.routes");
const orderRouter = require("./src/routes/Order.routes");
const paymentRouter = require("./src/routes/Payment.routes");
const categoryRouter = require("./src/routes/Category.routes");
const variantRouter = require("./src/routes/Variant.routes");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

dotenv.config();
dbConnection();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Middleware for handling CORS
 */
const allowedOrigins = [
  "https://h5.zdn.vn",
  "zbrowser://h5.zdn.vn",
  "http://localhost:3001",
  "http://localhost:3000",
];
app.use((req, res, next) => {
  console.log(req.headers.origin);
  const origin = req.headers.origin;
  const allowedCors = allowedOrigins.some((element) =>
    origin?.startsWith(element)
  );
  res.setHeader("Access-Control-Allow-Origin", allowedOrigins);
  if (allowedCors) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }
  return next();
});
// app.use(cors());

const options = {
  customCss: ".swagger-ui .topbar { display: none }",
  explorer: true,
};
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, options)
);

app.get("/api/v1/insert-data", async (req, res) => {
  await insertDataToDB();
  res.send("Data inserted successfully");
});

app.use(`/api/${process.env.API_VERSION}/product`, productRouter);
app.use(`/api/${process.env.API_VERSION}/order`, orderRouter);
app.use(`/api/${process.env.API_VERSION}/payment`, paymentRouter);
app.use(`/api/${process.env.API_VERSION}/category`, categoryRouter);
app.use(`/api/${process.env.API_VERSION}/variant`, variantRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
