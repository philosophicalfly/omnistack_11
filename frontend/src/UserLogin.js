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
          Sign In
        </Typography>
        <form className={classes.form} noValidate="noValidate">
          <TextField variant="outlined" margin="normal" required="required" fullWidth="fullWidth" id="id" label="User ID" name="id" autoFocus="autoFocus"/>
          <Button className={classes.primaryButton} variant="contained" type="submit" fullWidth="fullWidth">
            Sign In
          </Button>
        </form>
        <Grid container="container" justify="flex-end">
          <Grid item="item">
            <Link href="#" variant="body1" className="primaryText">
              No acount? Register here!
            </Link>
          </Grid>
        </Grid>
      </div>
    </Grid>
  </Grid>);
}
