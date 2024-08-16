const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./src/config/dbConnection");
const insertDataToDB = require("./src/utils/insertDataToDB");

const productRouter = require("./src/routes/Product.routes");

dotenv.config();
dbConnection();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/v1/insert-data", async (req, res) => {
  await insertDataToDB();
  res.send("Data inserted successfully");
});
// app.get("/get-all", async (req, res) => {
//   const products = await Product.find();
//   console.log(products);
//   res.json(products);
// });
app.use(`/api/${process.env.API_VERSION}/product`, productRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
