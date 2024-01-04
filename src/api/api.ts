import { Movie } from "../types/Movie";

interface MovieFromAPI {
  Response: boolean;
  Search: Movie[];
  totalResult: string;
}

export const getMovieByTitle = async (search: string): Promise<MovieFromAPI> => {
  const data = await fetch(`https://www.omdbapi.com/?apikey=186be766&s=${search}`);

  return data.json();
};
