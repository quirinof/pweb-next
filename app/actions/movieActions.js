"use server";

export async function searchMovies(formData) {
  const titleSearchKey = formData.get("titleSearchKey");

  if (!titleSearchKey || titleSearchKey == "") return { Search: [] };

  try {
    const httpRes = await fetch(
      `http://www.omdbapi.com/?apikey=66e4da88&s=${titleSearchKey}`
    );

    const jsonRes = await httpRes.json();

    return jsonRes;
  } catch (err) {
    return { error: `Erro na requisição ${err}` };
  }
}
