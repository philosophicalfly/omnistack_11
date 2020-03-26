import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  AppBar,
  Button,
  Card,
  CardContent,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  Container,
  Modal,
  TextField
} from '@material-ui/core';
import logo from './img/logo/my_logo_light.png';
import newCase from './img/general/newCase.svg';
import useStyles from './style/CasesStyles'

import api from './services/Api'

const cards = [1, 2, 3, 4];

export default function Cases() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  const [ngoName, setNgoName] = useState(localStorage.getItem('ngoName'));
  const [ngoId, setNgoId] = useState(localStorage.getItem('ngoId'));
  const [incidents, setIncidents] = useState([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    updateIncidents();
  }, []);

  function updateIncidents() {
    api.get('profile', {
      headers: {
        Authorization: ngoId
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }

  function deleteIncident(id) {
    try {
      api.delete(`incident/${id}`, {
        headers: {
          Authorization: ngoId
        }
      }).then(response => {
        setIncidents(incidents.filter(incident => incident.id !== id));
        alert('Incident deleted!');

      })
    } catch (e) {
      alert("Error, try again later...");
    }
  }

  function logout() {
    localStorage.clear();
    history.push('/');
  }

  function handleNewCase(event) {
    event.preventDefault();
    const newCase = {
      title,
      description,
      value
    }
    try {
      console.log(newCase);
      addNewCase(newCase);
    } catch (e) {
      alert("Error, try again later...");
    } finally {
      handleClose()
    }
  }

  function addNewCase(data) {
    try {
      api.post('incident', data, {
        headers: {
          Authorization: ngoId
        }
      }).then(response => {
        console.log(response.data);
        updateIncidents();
      })
    } catch (e) {
      alert("Error, try again later...");
    }
  }

  return (<React.Fragment>
    <CssBaseline/>
    <div className={classes.root}>
      <AppBar position="relative" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <img className={classes.logo} src={logo} alt="Logo"></img>
          <div>
            <Button className={classes.primaryButton} variant="contained" onClick={handleOpen}>
              New Case
            </Button>
            <Button className={classes.transparentButton}>
              <ExitToAppIcon className={classes.icon} onClick={() => logout()}/>
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.title}>
          <Container maxWidth="md">
            <Typography component="h3" variant="h4" align="left" color="textPrimary">
              {ngoName}&apos;s Cases
            </Typography>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container="container" spacing={4}>
            {
              incidents.map((incident) => (<Grid item="item" key={incident.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Grid container="container">
                      <Grid item="item" xs={11} sm={11} md={11}>
                        <Typography gutterBottom="gutterBottom" variant="h5" component="h5">
                          {incident.title}
                        </Typography>
                      </Grid>
                      <Grid item="item" xs={1} sm={1} md={1}>
                        <Link onClick={() => deleteIncident(incident.id)}><DeleteIcon/></Link>
                      </Grid>
                    </Grid>
                    <Typography>
                      {incident.description}
                    </Typography>
                    <Typography gutterBottom="gutterBottom" variant="h6" component="h3">
                      Needed < /Typography>
                      <Typography>
                        $ {incident.value}.00
                      </Typography >
                    </CardContent>
                  </Card>
                </Grid>))
            }
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom="gutterBottom">
          HelPet
        </Typography>
        <Typography align="center" color="white" component="p">
          This project was made for the Omnistack Week 11!
        </Typography>
        <Typography align="center" color="white" component="p">
          Using
          <a href="https://material-ui.com/">Material UI</a>
        </Typography>
      </footer>
    </div>

    <Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={open} onClose={handleClose}>
      <div className={classes.modal}>
        <Grid container="container" spacing={2}>
          <Grid item="item" xs={12} sm={6}>
            <h2 id="simple-modal-title" align="center">Register new case:</h2>
            <img className={classes.newCaseImage} src={newCase} alt="New case" align="center"></img>
          </Grid>
          <Grid item="item" xs={12} sm={6}>
            <form className={classes.form} noValidate="noValidate" onSubmit={handleNewCase}>
              <Grid container="container" spacing={2}>
                <Grid item="item" xs={12}>
                  <TextField variant="outlined" required="required" fullWidth="fullWidth" name="title" label="Title" type="text" id="title" value={title} onChange={event => setTitle(event.target.value)}/>
                </Grid>
                <Grid item="item" xs={12}>
                  <TextField variant="outlined" required="required" fullWidth="fullWidth" name="description" label="Description" type="text" id="description" multiline='true' rows="8" value={description} onChange={event => setDescription(event.target.value)}/>
                </Grid>
                <Grid item="item" xs={12}>
                  <TextField variant="outlined" required="required" fullWidth="fullWidth" name="value" label="Amount Needed" type="number" id="value" value={value} onChange={event => setValue(event.target.value)}/>
                </Grid>
              </Grid>
              <Button className={classes.submitButton} variant="contained" type="submit" fullWidth="fullWidth">
                Register Case
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </Modal>
    < /React.Fragment>);
}
