import { FC, useEffect, useState } from "react";
import { MovieGrid } from "../../components/MovieGrid/MovieGrid";
import { MovieShort } from "../../app/types/Movie";
import { searchMovieByTitle } from "../../app/api";
import { useAppSelector } from "../../app/hooks";

export const HomePage: FC = () => {
  const [movies, setMovies] = useState<null | MovieShort[]>(null);
  const search = useAppSelector(state => state.search.value);

  useEffect(() => {
    if (search !== '') {
      searchMovieByTitle(search).then(data => {
        setMovies(data.Search);
      });
    }
  }, [search]);

  return (
    <MovieGrid movies={movies} />
  )
}
