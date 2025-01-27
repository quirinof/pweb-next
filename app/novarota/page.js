"use client";

import { useState } from "react";

export default function Home() {
  const [resultMovies, setResultMovies] = useState([]);
  const [titleSearchKey, setTitleSearchKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleAction(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      const httpRes = await fetch(
        `/api/searchMovies?titleSearchKey=${titleSearchKey}`
      );
      const jsonRes = await httpRes.json();

      setResultMovies(jsonRes.Search || []);
    } catch (error) {
      console.error("Erro", error);
      alert("Houve um erro. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
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
    <form onSubmit={handleAction}>
      <h2>Pesquisa de Filmes</h2>

      <label htmlFor="idTitleSearchKey">Título</label>

      <input
        id="idTitleSearchKey"
        name="titleSearchKey"
        value={titleSearchKey}
        onChange={(e) => setTitleSearchKey(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleAction(e);
          }
        }}
      />

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Pesquisando..." : "Pesquisar"}
      </button>
    </form>
  );
}

export function MovieTable({ movies }) {
  return (
    <div>
      <div>
        {movies.map((m) => (
          <div key={m.id}>
            <div>
              <p>
                {m.title} -- {m.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
