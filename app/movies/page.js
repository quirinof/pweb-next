export default async function Home({ searchParams }) {
  const { titleSearchKey = "bagdad", type = "", year = "" } = searchParams;

  const queryParams = new URLSearchParams({
    apikey: "66e4da88",
    s: titleSearchKey,
    type,
    y: year,
  });

  const res = await fetch(`http://www.omdbapi.com/?${queryParams}`);
  const data = await res.json();

  if (!data.Search) {
    return <div>Erro.</div>;
  }

  return (
    <div>
      <h1>ccflix</h1>
      <div>
        {data.Search.map((m) => (
          <div key={m.imdbID}>
            {m.Title} ({m.Year}) - Tipo: {m.Type}
            <img
              src={m.Poster !== "N/A" ? m.Poster : "/placeholder.png"}
              alt={`Poster de ${m.Title}`}
              width="80"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
