const { User } = require("../models/user");
const { Recipe } = require("../models/recipe");

module.exports = {
  addRecipe: async (req, res) => {
    try {
      const {
        recipeName,
        passedOnFrom,
        prep,
        ingredients,
        instructions,
        userId,
      } = req.body;
      await Recipe.create({
        recipeName,
        passedOnFrom,
        prep,
        ingredients,
        instructions,
        userId,
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },

  getUserRecipes: async (req, res) => {
    try {
      const { userId } = req.params;
      const recipes = await Recipe.findAll({
        where: { userId: userId },
        include: [
          {
            model: User,
            required: true,
            attributes: [`username`],
          },
        ],
      });
      res.status(200).send(recipes);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
};
