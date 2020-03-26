import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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
  TextField,
} from '@material-ui/core';
import logo from './img/logo/my_logo_light.png';
import newCase from './img/general/newCase.svg';
import useStyles from './style/CasesStyles'

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
              <ExitToAppIcon className={classes.icon}/>
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.title}>
          <Container maxWidth="md">
            <Typography component="h3" variant="h4" align="left" color="textPrimary">
              Cases
            </Typography>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container="container" spacing={4}>
            {
              cards.map((card) => (<Grid item="item" key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom="gutterBottom" variant="h5" component="h5">
                      Case Title
                    </Typography>
                    <Typography>
                      What happened lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Typography>
                    <Typography gutterBottom="gutterBottom" variant="h6" component="h3">
                      Needed
                    </Typography>
                    <Typography>
                      $ 500.00
                    </Typography>
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
            <form className={classes.form} noValidate="noValidate">
              <Grid container="container" spacing={2}>
                <Grid item="item" xs={12}>
                  <TextField variant="outlined" required="required" fullWidth="fullWidth" name="title" label="Title" type="text" id="title"/>
                </Grid>
                <Grid item="item" xs={12}>
                  <TextField variant="outlined" required="required" fullWidth="fullWidth" name="description" label="Description" type="text" id="description" multiline='true' rows="8"/>
                </Grid>
                <Grid item="item" xs={12}>
                  <TextField variant="outlined" required="required" fullWidth="fullWidth" name="amount" label="Amount" type="number" id="amount"/>
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
