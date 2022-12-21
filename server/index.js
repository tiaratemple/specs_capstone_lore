require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { sequelize } = require("./util/database");
const { User } = require("./models/user");
const { Recipe } = require("./models/recipe");
const { Story } = require("./models/story");
const { Advice } = require("./models/advice");
const { PORT } = process.env;

const { addAdvice, getCurrentUserAdvices } = require("./controllers/advices");
const { addStory, getCurrentUserStories } = require("./controllers/stories");
const { addRecipe, getCurrentUserRecipes } = require("./controllers/recipes");

const app = express();
app.use(express.json());
app.use(cors());

const { register, login } = require("./controllers/auth");
const { isAuthenticated } = require("./middleware/isAuthenticated");

//need to figure out how to add all 3 recipe, story, advice to use.hasMany()
User.hasMany(Recipe);
User.hasMany(Story);
User.hasMany(Advice);
Recipe.belongsTo(User);
Story.belongsTo(User);
Advice.belongsTo(User);

app.post("/register", register);
app.post("/login", login);

sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`sync successful and shredding on port ${PORT}`)
    );
  })
  .catch((err) => console.log(err));
