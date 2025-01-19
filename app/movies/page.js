export default async function Home({ searchParams }) {
  const { titleSearchKey = "bagdad" } = await searchParams;

  const res = await fetch(
    `http://www.omdbapi.com/?apikey=66e4da88&s=${titleSearchKey}`
  );

  const data = await res.json();

  return (
    <div>
      <div>
        {data.Search.map((m) => (
          <div key={m.imdbID}>
            {m.Title} --- {m.Year}
          </div>
        ))}
      </div>
    </div>
  );
}
