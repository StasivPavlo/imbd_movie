import { Movie, MovieShort } from "./types/Movie";

interface MovieSearch {
  Response: boolean;
  Search: MovieShort[];
  totalResult: string;
}

export const searchMovieByTitle = async (title: string): Promise<MovieSearch> => {
  const data = await fetch(`https://www.omdbapi.com/?apikey=186be766&s=${title}`);

  return data.json();
};

export const getMovieById = async (id: string): Promise<Movie> => {
  const data = await fetch(`https://www.omdbapi.com/?apikey=186be766&i=${id}&plot=full`);

  return data.json();
}
