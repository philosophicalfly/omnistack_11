import React from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
  Link
} from '@material-ui/core';

import logo from './img/logo/my_logo_dark.png';
import useStyles from './style/LoginStyles'

export default function SignInSide() {
  const classes = useStyles();

  return (<Grid container="container" component="main" className={classes.root}>
    <CssBaseline/>
    <Grid item="item" xs={false} sm={4} md={7} className={classes.image}/>
    <Grid item="item" xs={12} sm={8} md={5} component={Paper} elevation={6} square="square">
      <div className={classes.paper}>
        <img className={classes.logo} src={logo} alt="Logo"></img>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate="noValidate">
          <Grid container="container" spacing={2}>
            <Grid item="item" xs={12}>
              <TextField autoComplete="ngoName" name="name" variant="outlined" required="required" fullWidth="fullWidth" id="name" label="NGO Name" autoFocus="autoFocus"/>
            </Grid>
            <Grid item="item" xs={12}>
              <TextField variant="outlined" required="required" fullWidth="fullWidth" id="email" label="Email" name="email" autoComplete="email"/>
            </Grid>
            <Grid item="item" xs={12}>
              <TextField variant="outlined" required="required" fullWidth="fullWidth" name="whatsapp" label="Whatsapp" type="text" id="whatsapp"/>
            </Grid>
            <Grid item="item" xs={10} sm={10}>
              <TextField variant="outlined" required="required" fullWidth="fullWidth" name="city" label="City" type="text" id="city"/>
            </Grid>
            <Grid item="item" xs={2} sm={2}>
              <TextField variant="outlined" required="required" fullWidth="fullWidth" name="uf" label="UF" type="text" id="uf"/>
            </Grid>
          </Grid>
          <Button className={classes.primaryButton} variant="contained" type="submit" fullWidth="fullWidth">
            Sign In
          </Button>
          <Grid container="container" justify="flex-end">
            <Grid item="item">
              <Link href="#" variant="body1" className="primaryText">
                Already have an account? Sign in here!
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Grid>
  </Grid>);
}
