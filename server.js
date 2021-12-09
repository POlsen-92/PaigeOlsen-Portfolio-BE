const express = require("express");
const allRoutes = require("./controllers");
const sequelize = require("./config/connection.js");
const { createServer } = require("http");
const cors = require("cors");

const app = express();
const httpServer = createServer(app);


const PORT = process.env.PORT || 3001;

const models = require("./models");

//LOCAL
app.use(cors());

//DEPLOYED
// app.use(cors({
//     origin:[""]
// }))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use("/", allRoutes);

sequelize.sync({ force: false }).then(function () {
  httpServer.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});