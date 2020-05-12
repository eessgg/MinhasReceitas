import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

import './style.css'
import api from "../../services/api";

export default function Receitas() {
  const [ recipes, setRecipes ] = useState([])

  useEffect(() => {
      async function loadSpots() {
      const user_id = localStorage.getItem('user')
      const response = await api.get("/boardreceitas", {
        headers: { user_id },
      });
      setRecipes(response.data)
    }
    loadSpots()
  }, [])
  
  return (
    <>
      <Link to="new">
        <button className="btn">Salvar nova receita</button>
      </Link>
      <ul className="recipes-list">
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <header>
              <h3>{recipe.name}</h3>
            </header>
            <div>
              <strong>Ingredients:</strong>
              {recipe.ingredients}
            </div>
            <p>
              <strong>Instructions: </strong>
              {recipe.instructions}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
