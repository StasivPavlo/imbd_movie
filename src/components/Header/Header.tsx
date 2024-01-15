import { FC } from 'react';
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';

import { SearchField } from '../SearchField/SearchField';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

export const Header: FC = () => {
  const likedMovies = useAppSelector(state => state.likedMovies);
  const watchedMovies = useAppSelector(state => state.watchedMovies);
  const wishlistMovies = useAppSelector(state => state.wishlistMovies);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            IMDb
          </Typography>
        </Link>

        <SearchField />

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={wishlistMovies.length} color="error">
              {wishlistMovies.length > 0 ? <VisibilityOffIcon /> : <VisibilityOffOutlinedIcon />}
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={watchedMovies.length} color="error">
              {watchedMovies.length > 0 ? <VisibilityIcon /> : <VisibilityOutlinedIcon />}
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
          >
            <Badge badgeContent={likedMovies.length} color="error">
              {likedMovies.length > 0 ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Badge>
          </IconButton>
          <Link to="/profile" style={{ color: 'inherit' }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Link>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
