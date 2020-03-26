import {
  makeStyles
} from '@material-ui/core/styles';
import logo from '../img/logo/my_logo_dark.png';

import landing1 from '../img/landing/landing1.svg';
import landing2 from '../img/landing/landing2.svg';
import landing3 from '../img/landing/landing3.svg';
const landingObj = [landing1, landing2, landing3];

let getLanding = () => {
  const landToReturn = Math.floor(Math.random() * 3);
  console.log(landToReturn);
  return landingObj[landToReturn];
}

const defColor = {
  primary: '#4e342e',
  secondary: '#5d4037',
  dark: '#3e2723',
  light: '#8d6e63',
  superLight: '#efebe9'
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: "url(" + getLanding() + ")",
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ?
      theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  logo: {
    width: '60%',
    paddingBottom: theme.spacing(1)
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: defColor.primary,
    color: defColor.superLight,
    margin: theme.spacing(3, 0, 2)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  }
}));

export default useStyles
