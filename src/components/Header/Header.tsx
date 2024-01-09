import { FC } from 'react';
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MoreIcon from '@mui/icons-material/MoreVert';

import { SearchField } from '../SearchField/SearchField';
import { Link } from 'react-router-dom';

export const Header: FC = () => (
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
          <Badge badgeContent={0} color="error">
            <VisibilityOffIcon />
          </Badge>
        </IconButton>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={0} color="error">
            <VisibilityIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
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
