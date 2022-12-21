import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../../contexts/authContext';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { analytics } from "../../firebase-config";
import { logEvent } from "firebase/analytics";


const styles = {
  root: {
    marginTop: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    "& > * ": {
      marginTop: 2,
    },
  },
  textField: {
    width: "40ch",
  },
  title: {
    textAlign: 'center',
  },
  err: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 2,
    marginBottom: -2
  }
};

const LoginForm = () => {
  const context = useContext(AuthContext);
  const [values, setValues] = React.useState({
      userName: '',
      password: '',
      showPassword: false,
    });

  logEvent(analytics, 'notification_received');

  const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const login = () => {
    context.authenticate(values.userName, values.password);
  };

  const register = () => {
    let regex2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,15}$/; //5-15 Chars - 1 digit, 1 Upper, 1 Lower, 1 Special
    const validPassword = regex2.test(values.password);

    if (validPassword) {
      context.register(values.userName, values.password);
      login();
    }
  }

  let location = useLocation();

  // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
  const { from } = location.state ? { from: location.state.from.pathname } : { from: "/movies" };

  if (context.isAuthenticated === true) {
    return <Navigate to={from} />;
  }


  return (
    <>
    <br></br>
    <Box sx={styles.root}>
    <FormControl sx={{ m: 5, mt: 5, mb: 5, width: '25ch' }} variant="outlined">
    <Typography sx={styles.title} color="primary" component="h2" variant="h3">
        Login
      </Typography>
    </FormControl>
    <br/>
    <FormControl sx={{ m: 1, width: '25ch'}} variant="outlined">
      <TextField
          required
          id="outlined-required"
          label="Email"
          placeholder="Email"
          value={values.userName}
          onChange={handleChange('userName')}
        />
        </FormControl>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        required
        id="outlined-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        placeholder="Password"
        onChange={handleChange('password')}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              color="primary"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
    <FormControl sx={{ m: 1, mt: 5, width: '25ch' }} variant="outlined">
      <Button variant="contained" onClick={register}>Create Account</Button>
    </FormControl>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <Button variant="contained" onClick={login}>Login</Button>
    </FormControl><br></br>
      <br></br>

    </Box>
    </>
  );
};


export default LoginForm;