import React, { useState } from "react";

import api from "../../services/api";


export default function Login({history}) {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/sessions", { email });

    const { _id } = response.data;
    localStorage.setItem("user", _id);

    history.push("/boardreceitas");
  }
  return (
    <>
      <p>
        Encontre muitas <strong>receitas</strong> com seus ingredientes
        favoritos.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Seu email..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
}

