const Recipe = require('../models/Recipes')

module.exports = {
  async show(req, res) {
    const {user_id} = req.headers;

    const recipes = await Recipe.find({ user: user_id })

    return res.json(recipes)
  }
}