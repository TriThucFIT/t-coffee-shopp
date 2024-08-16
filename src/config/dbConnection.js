const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const dbConnection = async () => {
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: "mysql",
      logging: false,
    }
  );

  try {
    console.log(
      `Connecting to database ${process.env.DB_NAME}`
    );

    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = dbConnection;
