"use server";

export async function searchMovies(formData) {
  const titleSearchKey = formData.get("titleSearchKey");
  const yearSearchKey = formData.get("yearSearchKey");

  if (!titleSearchKey || titleSearchKey == "") return { Search: [] };

  try {
    let apiUrl = `http://www.omdbapi.com/?apikey=66e4da88&s=${titleSearchKey}`;

    if (yearSearchKey) {
      apiUrl += `&y=${yearSearchKey}`;
    }

    const httpRes = await fetch(apiUrl);
    const jsonRes = await httpRes.json();

    return jsonRes;
  } catch (err) {
    return { error: `Erro na requisição ${err}` };
  }
}
