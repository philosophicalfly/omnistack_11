import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

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
      </div>
    </Grid>
  </Grid>);
}
