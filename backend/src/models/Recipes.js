const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: String,
  instructions: String,
  ingredients: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
}); 

module.exports = mongoose.model('Recipes', RecipeSchema)
