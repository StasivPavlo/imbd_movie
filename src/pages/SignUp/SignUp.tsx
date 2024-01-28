import { FC, useState } from "react";
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { Email, Password } from "@mui/icons-material";

export const SignUp: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSetUp = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Box sx={{ mt: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container
        component={Paper}
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: 'auto',
          m: 0,
          p: 2
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
          <Email sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            type="email"
            id="input-with-sx"
            label="Email"
            variant="standard"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 3 }}>
          <Password sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            type="password"
            id="input-with-sx"
            label="Password"
            variant="standard"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Box>
        <Button
          variant="outlined"
          sx={{ mb: 1 }}
          onClick={handleSetUp}
        >
          Sign Up
        </Button>
        <Typography fontSize={10} sx={{ textAlign: 'center', color: '#aaa' }}>
          If you already have accout please <Link to="/login">Login</Link>
        </Typography>
      </Container>
    </Box>
  );
}
