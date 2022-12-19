const express = require("express");
const cors = require("cors");
const server = express();
require("dotenv").config();

const { sequelize } = require("./util/database");
const { User } = require("./models/user");

server.use(express.json());
server.use(cors());

server.listen(4000, () => console.log("shredding on 4000 dude"));
