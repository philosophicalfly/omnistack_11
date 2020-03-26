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
} from '@material-ui/core';
import logo from './img/logo/my_logo_light.png';
import useStyles from './style/CasesStyles'

const cards = [1, 2, 3, 4];

export default function Cases() {
  const classes = useStyles();
  return (<React.Fragment>
    <CssBaseline/>

    <AppBar position="relative" className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <img className={classes.logo} src={logo} alt="Logo"></img>
        <div>
          <Button className={classes.primaryButton} variant="contained">
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
        <Container maxWidth="sm">
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
    < /React.Fragment>);
}
