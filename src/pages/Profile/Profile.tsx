import { FC, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { MovieShort } from "../../app/types/Movie";
import { useAppSelector, useAuth } from "../../app/hooks";
import { getMoviesById } from "../../app/api";
import * as userActions from '../../app/store/userSlice';

import { Box, Container, Tab, Tabs } from "@mui/material";
import { MovieGrid } from "../../components/MovieGrid/MovieGrid";

interface TabPanelProps {
  moviesId: string[];
  index: number;
  value: number;
}

const CustomTabPanel: FC<TabPanelProps> = ({ moviesId, index, value }) => {
  const [movies, setMovies] = useState<MovieShort[] | null>(null);

  useEffect(() => {
    if (index === value) {
      getMoviesById(moviesId).then(data => {
        Promise.all(data).then(datas => setMovies(datas))
      })
    }
  }, [index, moviesId, value])

  if (index === value) {
    return (
      <MovieGrid movies={movies} />
    )
  }

  return null;
}

export const Profile: FC = () => {
  const [tab, setTab] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useAuth();

  const moviesId = useAppSelector(state => ({
    liked: state.likedMovies,
    watched: state.watchedMovies,
    wishlist: state.wishlistMovies
  }));

  const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
  };

  const handlerLogOut = () => {
    dispatch(userActions.logouted());
    navigate('/');
  };

  if (!userId.uid) {
    return <Navigate to="/login" />
  }

  return (
    <Container>
      <button onClick={handlerLogOut}>Log out</button>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="Favorite Movie" />
          <Tab label="Watched Movie" />
          <Tab label="Want to watch" />
        </Tabs>
      </Box>
      <CustomTabPanel moviesId={moviesId.liked} value={tab} index={0} />
      <CustomTabPanel moviesId={moviesId.watched} value={tab} index={1} />
      <CustomTabPanel moviesId={moviesId.wishlist} value={tab} index={2} />
    </Container>
  );
};
