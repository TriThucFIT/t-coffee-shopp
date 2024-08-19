const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./src/config/dbConnection");
const insertDataToDB = require("./src/utils/insertDataToDB");

const productRouter = require("./src/routes/Product.routes");
const orderRouter = require("./src/routes/Order.routes");
const paymentRouter = require("./src/routes/Payment.routes");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

dotenv.config();
dbConnection();

const app = express();
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());

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

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
