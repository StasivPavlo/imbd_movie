import { FC } from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { MovieShort } from "../../app/types/Movie";

interface Props {
  movies: null | MovieShort[];
}

export const MovieGrid: FC<Props> = ({ movies }) => {
  return (
    <Grid container justifyContent="center" spacing={2} marginTop={0} marginBottom={2}>
        {movies && (
          movies?.map(movie => (
            <Grid key={movie.imdbID} item>
              <Card sx={{ width: 320 }}>
                <CardActionArea href={`/movie/${movie.imdbID}`}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={movie.Poster}
                    alt={movie.Title}
                  />
                </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {movie.Title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                      <li>Type: {movie.Type}</li>
                      <li>Year: {movie.Year}</li>
                    </ul>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={`/movie/${movie.imdbID}`}>
                    Open
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
  );
}
