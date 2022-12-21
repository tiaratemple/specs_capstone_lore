require("dotenv").config();
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { User } = require("../models/user");
const bcrypt = require("bcryptjs");

const createToken = (username, id) => {
  return jwt.sign(
    {
      username,
      id,
    },
    SECRET,
    {
      expiresIn: "2 days",
    }
  );
};

module.exports = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      let foundUser = await User.findOne({ where: { username } });
      if (foundUser) {
        res.status(400).send("User already exists");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await User.create({
          username: username,
          hashedPass: hash,
        });
        const token = createToken(
          newUser.dataValues.username,
          newUser.datavalues.id
        );
        console.log(newUser);
        const exp = Date.now() + 1000 * 60 * 60 * 48;

        res.status(200).send({
          username: newUser.dataValues.username,
          userId: newUser.dataValues.id,
          token: token,
          exp,
        });
      }
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      let foundUser = await User.findOne({ where: { username } });
      if (foundUser) {
        const isAuthenticated = bcrypt.compareSync(
          password,
          foundUser.hashedPass
        );
        if (isAuthenticated) {
          const token = createToken(
            foundUser.dataValues.username,
            foundUser.dataValues.id
          );
          const exp = Date.now() + 1000 * 60 * 60 * 48;

          res.status(200).send({
            username: foundUser.dataValues.username,
            userId: foundUser.dataValues.id,
            token: token,
            exp: exp,
          });
        } else {
          res.status(400).send("Cannot log in");
        }
      } else {
        res.status(400).send("Cannot log in");
      }
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
};
