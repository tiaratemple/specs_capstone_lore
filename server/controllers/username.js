const { User } = require("../models/user");

module.exports = {
  getUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findOne({
        where: { id: userId },
      });
      res.status(200).send(user);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
};
