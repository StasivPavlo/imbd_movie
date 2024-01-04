import { useEffect, useState } from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import { getMovieByTitle } from './api/api';
import { Movie } from './types/Movie';

import { Header } from './components/Header/Header';

const App = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState<null | Movie[]>(null);

  useEffect(() => {
    if (search !== '') {
      getMovieByTitle(search).then(data => {
        setMovies(data.Search);
      });
    }
  }, [search]);

  return (
    <div className="App">
      <Header setSearch={setSearch} />

      <Grid container justifyContent="center" spacing={2} marginBlock={0}>
        {movies && (
          movies?.map(movie => (
            <Grid key={movie.imdbID} item>
              <Card sx={{ width: 320 }}>
                <CardActionArea>
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
                  <Button size="small" color="primary">
                    Open
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}

export default App;
