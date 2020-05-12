
const express = require('express')
const routes = express.Router()

const SessionsControllers = require('./controllers/SessionsControllers') 
const RecipeControllers = require('./controllers/RecipeController')
const BoardReceitas = require('./controllers/BoardReceitas')

routes.get("/", (req, res) => {
  res.send({ message: "Ok" });
});

routes.get("/sessions", SessionsControllers.index);
routes.post("/sessions", SessionsControllers.store);

routes.get("/recipes", RecipeControllers.index);
routes.post("/recipes", RecipeControllers.store);

routes.get('/boardreceitas', BoardReceitas.show)

module.exports = routes;