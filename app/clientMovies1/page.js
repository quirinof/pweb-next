"use client";

import Form from "next/form";
import { useState } from "react";

export default function Home() {
  const [resultMovies, setResultMovies] = useState([]);

  async function handleAction(formData) {
    const titleSearchKey = formData.get("titleSearchKey");

    const httpRes = await fetch(
      `http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`
    );

    const jsonRes = await httpRes.json();

    setResultMovies(jsonRes.Search || []);
  }

  return (
    <div>
      <MovieForm handleAction={handleAction} />

      <MovieTable movies={resultMovies} />
    </div>
  );
}

export function MovieForm({ handleAction }) {
  return (
    <form action={handleAction}>
      <label htmlFor="idTitleSearchKey">Título</label>

      <input id="idTitleSearchKey" name="titleSearchKey" />

      <button type="submit">Pesquisar</button>
    </form>
  );
}

export function MovieTable({ movies }) {
  return (
    <div>
      <div>
        {movies.map((m) => (
          <div key={m.imdbID}>
            {m.Title} --- {m.Year}
          </div>
        ))}
      </div>
    </div>
  );
}
