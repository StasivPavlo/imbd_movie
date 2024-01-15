import { Box, Container, Tab, Tabs } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { MovieGrid } from "../../components/MovieGrid/MovieGrid";
import { useAppSelector } from "../../app/hooks";
import { MovieShort } from "../../app/types/Movie";

interface TabPanelProps {
  moviesId: string[];
  index: number;
  value: number;
}

const getMoviesById = async (moviesId: string[]) => moviesId.map(async (id): Promise<MovieShort> => {
  const data = await fetch(`https://www.omdbapi.com/?apikey=186be766&i=${id}`);

  return data.json();
});

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

  const moviesId = useAppSelector(state => ({ likedMovies: state.likedMovies, watchedMovies: state.watchedMovies, wishlistMovies: state.wishlistMovies }))

  const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
  }

  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="Favorite Movie" />
          <Tab label="Watched Movie" />
          <Tab label="Want to watch" />
        </Tabs>
      </Box>
      <CustomTabPanel moviesId={moviesId.likedMovies} value={tab} index={0} />
      <CustomTabPanel moviesId={moviesId.watchedMovies} value={tab} index={1} />
      <CustomTabPanel moviesId={moviesId.wishlistMovies} value={tab} index={2} />
    </Container>
  );
};
