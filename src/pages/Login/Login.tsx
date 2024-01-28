import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import * as userActions from '../../app/store/userSlice';
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { Email, Password } from "@mui/icons-material";

export const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSetUp = async () => {
    try {
      const auth = getAuth();
      const user = (await signInWithEmailAndPassword(auth, email, password)).user;

      dispatch(userActions.logined({
        email: user.email || '',
        uid: user.uid
      }));

      navigate('/');
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
          Login
        </Button>
        <Typography fontSize={10} sx={{ textAlign: 'center', color: '#aaa' }}>
          If you don't have accout please <Link to="/sign-up">Sign Up</Link>
        </Typography>
      </Container>
    </Box>
  );
}
