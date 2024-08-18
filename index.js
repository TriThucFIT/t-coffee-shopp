const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./src/config/dbConnection");
const insertDataToDB = require("./src/utils/insertDataToDB");

const productRouter = require("./src/routes/Product.routes");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

dotenv.config();
dbConnection();

const app = express();
app.use(cors());
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

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
