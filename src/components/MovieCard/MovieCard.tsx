import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { MovieShort } from '../../app/types/Movie';

interface Props {
  movie: MovieShort
}

export const MovieCard = React.memo<Props>(({ movie }) => {
  return (
    <Card sx={{ width: 320 }}>
      <Link to={`/movie/${movie.imdbID}`}>
        <CardMedia
          component="img"
          height="400"
          image={movie.Poster}
          alt={movie.Title}
        />
      </Link>
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
  )
});

