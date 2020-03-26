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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };
    console.log(data);
    try {
      const response = await api.post('ngo', data);
      alert(`Done! Your ID: ${response.data.id}`);
      history.push('/');
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
          Register
        </Typography>
        <form className={classes.form} noValidate="noValidate" onSubmit={handleRegister}>
          <Grid container="container" spacing={2}>
            <Grid item="item" xs={12}>
              <TextField autoComplete="ngoName" name="name" variant="outlined" required="required" fullWidth="fullWidth" id="name" label="NGO Name" autoFocus={true} value={name} onChange={event => setName(event.target.value)}/>
            </Grid>
            <Grid item="item" xs={12}>
              <TextField variant="outlined" required="required" fullWidth="fullWidth" id="email" label="Email" name="email" autoComplete="email" value={email} onChange={event => setEmail(event.target.value)}/>
            </Grid>
            <Grid item="item" xs={12}>
              <TextField variant="outlined" required="required" fullWidth="fullWidth" name="whatsapp" label="Whatsapp" type="text" id="whatsapp" value={whatsapp} onChange={event => setWhatsapp(event.target.value)}/>
            </Grid>
            <Grid item="item" xs={10} sm={10}>
              <TextField variant="outlined" required="required" fullWidth="fullWidth" name="city" label="City" type="text" id="city" value={city} onChange={event => setCity(event.target.value)}/>
            </Grid>
            <Grid item="item" xs={2} sm={2}>
              <TextField variant="outlined" required="required" fullWidth="fullWidth" name="uf" label="UF" type="text" id="uf" value={uf} onChange={event => setUf(event.target.value)}/>
            </Grid>
          </Grid>
          <Button className={classes.primaryButton} variant="contained" type="submit" fullWidth={true}>
            Register!
          </Button>
          <Grid container="container" justify="flex-end">
            <Grid item="item">
              <Link to="/" variant="body1" className="primaryText">
                Already have an account? Sign in here!
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Grid>
  </Grid>);
}
