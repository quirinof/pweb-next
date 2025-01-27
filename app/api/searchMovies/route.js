import fs from "fs";
import path from "path";

export async function GET(request) {
  const searchParams = new URL(request.url).searchParams;
  const titleSearchKey = searchParams.get("titleSearchKey") || "";

  const filePath = path.join(process.cwd(), "app/api/searchMovies/db.json");

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const movies = data.movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleSearchKey.toLowerCase())
  );

  return Response.json({ Search: movies });
}
