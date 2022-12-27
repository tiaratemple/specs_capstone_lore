require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { sequelize } = require("./util/database");
const { User } = require("./models/user");
const { Recipe } = require("./models/recipe");
const { Story } = require("./models/story");
const { Advice } = require("./models/advice");
const { SERVER_PORT } = process.env;

const app = express();
app.use(express.json());
app.use(cors());

const { register, login } = require("./controllers/auth");
const { isAuthenticated } = require("./middleware/isAuthenticated");
const { addAdvice, getUserAdvices } = require("./controllers/advices");
const { addStory, getUserStories } = require("./controllers/stories");
const { addRecipe, getUserRecipes } = require("./controllers/recipes");

User.hasMany(Recipe);
User.hasMany(Story);
User.hasMany(Advice);
Recipe.belongsTo(User);
Story.belongsTo(User);
Advice.belongsTo(User);

app.get("/recipes/:userId", getUserRecipes);
app.post("/register", register);
app.post("/login", login);
app.post("/recipes/addRecipe", addRecipe);

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     app.listen(SERVER_PORT, () =>
//       console.log(`Backend is running on  ${SERVER_PORT}`)
//     );
//   })
//   .catch((err) => console.log(err));

app.listen(SERVER_PORT, () => console.log(`backend running on ${SERVER_PORT}`));
