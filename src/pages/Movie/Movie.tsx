import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../app/api";
import { Movie } from "../../app/types/Movie";
import { Box, IconButton, Container, Paper, Rating, Table, TableBody, TableCell, TableContainer, TableRow, Typography, styled, tableCellClasses } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import * as likedMoviesActions from '../../app/store/likedMoviesSlice';
import * as watchedMoviesActions from '../../app/store/watchedMoviesSlice';
import * as wishlistMoviesActions from '../../app/store/wishlistMoviesSlice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const MoviePage: FC = () => {
  const movieId = useParams().movieId;
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isWatched, setIsWatched] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const likedMovies = useAppSelector(state => state.likedMovies);
  const watchedMovies = useAppSelector(state => state.watchedMovies);
  const wishlistMovies = useAppSelector(state => state.wishlistMovies);

  const dispatch = useDispatch();

  useEffect(() => {
    if (movieId) {
      getMovieById(movieId).then(setMovie);
    }
  }, [movieId]);

  useEffect(() => {
    if (movie) {
      setIsWatched(watchedMovies.includes(movie.imdbID))
    }
  }, [movie, watchedMovies]);

  useEffect(() => {
    if (movie) {
      setIsLiked(likedMovies.includes(movie.imdbID))
    }
  }, [movie, likedMovies]);

  useEffect(() => {
    if (movie) {
      setIsInWishlist(wishlistMovies.includes(movie.imdbID));
    }
  }, [wishlistMovies, movie]);

  const onFavoriteButtonClick = useCallback((id: string) => {
    if (isLiked) {
      dispatch(likedMoviesActions.removeMovie(id));
    } else {
      dispatch(likedMoviesActions.addMovie(id));
    }
  }, [dispatch, isLiked]);

  const onWatchedButtonClick = useCallback((id: string) => {
    if (isWatched) {
      dispatch(watchedMoviesActions.removeMovie(id));
    } else {
      dispatch(watchedMoviesActions.addMovie(id));
    }
  }, [dispatch, isWatched]);

  const onWishlistButtonClick = useCallback((id: string) => {
    if (isInWishlist) {
      dispatch(wishlistMoviesActions.removeMovie(id));
    } else {
      dispatch(wishlistMoviesActions.addMovie(id));
    }
  }, [dispatch, isInWishlist]);

  if (!movie) {
    return null;
  }

  return (
    <Container component={Paper}>
      <Box display="flex" sx={{ p: 2, mt: 5 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <img src={movie.Poster} alt={movie.Title} style={{ marginBottom: '10px', width: '300px', height: '425px' }} />
          <Rating value={Number(movie.imdbRating) / 2} readOnly />
        </Box>
        <Box sx={{ ml: 2 }} width={'100%'}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h3" component="h1">{movie.Title}</Typography>
            <Box>
              <IconButton onClick={() => onWishlistButtonClick(movie.imdbID)} color="primary">
                {isInWishlist ? <VisibilityOffIcon /> : <VisibilityOffOutlinedIcon />}
              </IconButton>
              <IconButton onClick={() => onWatchedButtonClick(movie.imdbID)} color="primary">
                {isWatched ? <VisibilityIcon /> : <VisibilityOutlinedIcon />}
              </IconButton>
              <IconButton onClick={() => onFavoriteButtonClick(movie.imdbID)} color="primary">
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </Box>
          </Box>
          <TableContainer>
            <Table>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Type:</StyledTableCell>
                  <StyledTableCell>{movie.Type.toUpperCase()}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>Year:</StyledTableCell>
                  <StyledTableCell>{movie.Year}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>Age Raiting:</StyledTableCell>
                  <StyledTableCell>{movie.Rated}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>Country:</StyledTableCell>
                  <StyledTableCell>{movie.Country}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>Genre:</StyledTableCell>
                  <StyledTableCell>{movie.Genre}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>Director:</StyledTableCell>
                  <StyledTableCell>{movie.Director}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>Actros:</StyledTableCell>
                  <StyledTableCell>{movie.Actors}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>Raiting IMDb:</StyledTableCell>
                  <StyledTableCell>{movie.imdbRating}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
}
