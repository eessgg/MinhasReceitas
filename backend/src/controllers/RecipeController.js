const Recipe = require("../models/Recipes");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const recipes = await Recipe.find();

    return res.json(recipes);
  },
  async store(req, res) {
    //  const { filename } = req.file;
    const { name, ingredients, instructions } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: "user do not exists" });
    }

    const recipe = await Recipe.create({
      user: user_id,
      name,
      ingredients,
      instructions,
    });

    return res.json(recipe);
  },
};
