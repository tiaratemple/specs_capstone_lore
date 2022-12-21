const { User } = require("../models/user");
const { Advice } = require("../models/advice");

module.exports = {
  addAdvice: async (req, res) => {
    try {
      const { title, content, userId } = req.body;
      await Advice.create({ title, content, userId });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },

  getCurrentUserAdvices: async (req, res) => {
    try {
      const { userId } = req.params;
      const advices = await Advice.findAll({
        where: { userId: userId },
        include: [
          {
            model: User,
            required: true,
            attributes: [`username`],
          },
        ],
      });
      res.status(200).send(advices);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
};
