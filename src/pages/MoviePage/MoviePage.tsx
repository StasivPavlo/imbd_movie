import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../app/api";
import { Movie } from "../../app/types/Movie";
import { Box, IconButton, Container, Paper, Rating, Table, TableBody, TableCell, TableContainer, TableRow, Typography, styled, tableCellClasses } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

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

  useEffect(() => {
    if (movieId) {
      getMovieById(movieId).then(setMovie);
    }
  }, [movieId]);

  return (
    <Container component={Paper}>
      <Box display="flex" sx={{ p: 2, mt: 5 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <img src={movie?.Poster} alt={movie?.Title} style={{ marginBottom: '10px', width: '300px', height: '425px' }} />
          <Rating value={Number(movie?.imdbRating) / 2} readOnly />
        </Box>
        <Box sx={{ ml: 2 }} width={'100%'}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h3" component="h1">{movie?.Title}</Typography>
            <Box>
              <IconButton color="primary"><VisibilityOffIcon /></IconButton>
              <IconButton color="primary"><VisibilityIcon /></IconButton>
              <IconButton color="primary"><FavoriteBorderIcon /></IconButton>
            </Box>
          </Box>
          <TableContainer>
            <Table>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Type:</StyledTableCell>
                  <StyledTableCell>{movie?.Type.toUpperCase()}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>Year:</StyledTableCell>
                  <StyledTableCell>{movie?.Year}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>Age Raiting:</StyledTableCell>
                  <StyledTableCell>{movie?.Rated}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>Country:</StyledTableCell>
                  <StyledTableCell>{movie?.Country}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>Genre:</StyledTableCell>
                  <StyledTableCell>{movie?.Genre}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>Director:</StyledTableCell>
                  <StyledTableCell>{movie?.Director}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>Actros:</StyledTableCell>
                  <StyledTableCell>{movie?.Actors}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>Raiting IMDb:</StyledTableCell>
                  <StyledTableCell>{movie?.imdbRating}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
}
