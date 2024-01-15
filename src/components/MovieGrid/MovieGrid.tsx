import { FC } from "react";
import { Grid } from '@mui/material';
import { MovieShort } from "../../app/types/Movie";
import { MovieCard } from "../MovieCard/MovieCard";

interface Props {
  movies: null | MovieShort[];
}

export const MovieGrid: FC<Props> = ({ movies }) => {
  return (
    <Grid container justifyContent="center" spacing={2} marginTop={0} marginBottom={2}>
        {movies && (
          movies?.map(movie => (
            <Grid key={movie.imdbID} item>
              <MovieCard movie={movie} />
            </Grid>
          ))
        )}
      </Grid>
  );
}
