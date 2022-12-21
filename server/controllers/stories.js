const { User } = require("../models/user");
const { Story } = require("../models/story");

module.exports = {
  addStory: async (req, res) => {
    try {
      const { title, content, userId } = req.body;
      await Story.create({ title, content, userId });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },

  getCurrentUserStories: async (req, res) => {
    try {
      const { userId } = req.params;
      const stories = await Story.findAll({
        where: { userId: userId },
        include: [
          {
            model: User,
            required: true,
            attributes: [`username`],
          },
        ],
      });
      res.status(200).send(stories);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
};
