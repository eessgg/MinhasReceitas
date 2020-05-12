import React, { useState } from "react";

import api from "../../services/api";

export default function New({ history }) {
  const [ name, setName ] = useState('');
  const [ ingredients, setIngredients ] = useState("");
  const [ instructions, setInstructions ] = useState("");

  async function handleSubmit(event) {
    event.preventDefault()
    const data = {
      name,
      ingredients,
      instructions,
    };
    const user_id = localStorage.getItem('user')

    // data.append("name", name);
    // data.append("ingredients", ingredients)
    // data.append("instructions", instructions)

    await api.post("/recipes", data, {
      headers: { user_id },
    });

    history.push("/boardreceitas");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Nome da receita..."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="name">Ingredients:</label>
        <input
          type="text"
          placeholder="Ex: 1/2 lemon..."
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
        />
        <label htmlFor="name">Instructions:</label>
        <input
          type="text"
          placeholder="bake the cake..."
          value={instructions}
          onChange={(event) => setInstructions(event.target.value)}
        />

        <button type="submit" className="btn">
          {" "}
          Salvar Receita
        </button>
      </form>
    </div>
  );
}
