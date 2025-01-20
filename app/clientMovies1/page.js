"use client";

import { useState } from "react";
import "./styles.css";

export default function Home() {
  const [resultMovies, setResultMovies] = useState([]);
  const [titleSearchKey, setTitleSearchKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleAction(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      const httpRes = await fetch(
        `http://www.omdbapi.com/?apikey=66e4da88&s=${titleSearchKey}`
      );
      const jsonRes = await httpRes.json();

      setResultMovies(jsonRes.Search || []);
    } catch (error) {
      console.error("Erro", error);
      alert("Houve um erro. Tente novamente.");
    } finally {
      setIsLoading(false); // Reabilita o botão.
    }
  }

  return (
    <div className="container">
      <MovieForm
        handleAction={handleAction}
        titleSearchKey={titleSearchKey}
        setTitleSearchKey={setTitleSearchKey}
        isLoading={isLoading}
      />

      <MovieTable movies={resultMovies} />
    </div>
  );
}

export function MovieForm({
  handleAction,
  titleSearchKey,
  setTitleSearchKey,
  isLoading,
}) {
  return (
    <form onSubmit={handleAction} className="form-container">
      <h2 className="form-title">Pesquisa de Filmes</h2>

      <label
        htmlFor="idTitleSearchKey"
        className="block text-sm font-medium text-gray-700"
      >
        Título
      </label>

      <input
        id="idTitleSearchKey"
        name="titleSearchKey"
        value={titleSearchKey}
        onChange={(e) => setTitleSearchKey(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleAction(e); // Submete o formulário ao pressionar <Enter>.
          }
        }}
        className="input-field"
      />

      <button
        type="submit"
        disabled={isLoading}
        className={`submit-btn ${isLoading ? "disabled" : ""}`}
      >
        {isLoading ? "Pesquisando..." : "Pesquisar"}
      </button>
    </form>
  );
}

export function MovieTable({ movies }) {
  return (
    <div className="table-container">
      <h2 className="text-xl font-semibold mb-4">Resultados da Pesquisa</h2>
      <div>
        {movies.map((m) => (
          <div key={m.imdbID} className="table-item">
            <div>
              <p>{m.Title}</p>
              <span>{m.Year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
