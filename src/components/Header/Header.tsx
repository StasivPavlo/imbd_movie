import { FC } from 'react';
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import { SearchField } from '../SearchField/SearchField';

interface Props {
  setSearch: (value: string) => void;
}

export const Header: FC<Props> = ({ setSearch }) => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        IMDb
      </Typography>

      <SearchField setSearch={setSearch} />

      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={0} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <NotificationsIcon />
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
