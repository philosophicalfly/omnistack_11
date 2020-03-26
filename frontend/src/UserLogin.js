import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import {
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography
} from '@material-ui/core';

import logo from './img/logo/my_logo_dark.png';
import useStyles from './style/LoginStyles'

import api from './services/Api'

export default function SignInSide() {
  const classes = useStyles();

  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();
    const data = {
      id
    };
    try {
      const response = await api.post('session', data);
      if (response && response.data && response.data.name) {
        localStorage.setItem('ngoId', id);
        localStorage.setItem('ngoName', response.data.name);
        history.push('/dashboard');
      }
    } catch (e) {
      alert("Error, try again later...");
    }
  }

  return (<Grid container="container" component="main" className={classes.root}>
    <CssBaseline/>
    <Grid item="item" xs={false} sm={4} md={7} className={classes.image}/>
    <Grid item="item" xs={12} sm={8} md={5} component={Paper} elevation={6} square="square">
      <div className={classes.paper}>
        <img className={classes.logo} src={logo} alt="Logo"></img>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} noValidate="noValidate" onSubmit={handleLogin}>
          <TextField variant="outlined" margin="normal" required="required" fullWidth="fullWidth" id="id" label="User ID" name="id" autoFocus="autoFocus" value={id} onChange={event => setId(event.target.value)}/>
          <Button className={classes.primaryButton} variant="contained" type="submit" fullWidth="fullWidth">
            Sign In
          </Button>
        </form>
        <Grid container="container" justify="flex-end">
          <Grid item="item">
            <Link to="/register" variant="body1" className="primaryText">
              No acount? Register here!
            </Link>
          </Grid>
        </Grid>
      </div>
    </Grid>
  </Grid>);
}
