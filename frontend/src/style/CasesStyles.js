import {
  makeStyles
} from '@material-ui/core/styles';

const defColor = {
  primary: '#4e342e',
  secondary: '#5d4037',
  dark: '#3e2723',
  light: '#8d6e63',
  superLight: '#efebe9'
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
    width: '60%',
    minWidth: '60%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5),
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  icon: {
    color: defColor.superLight
  },
  header: {
    backgroundColor: defColor.primary,
    color: 'white',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {
    width: '180px',
    paddingBottom: theme.spacing(1)
  },
  newCaseImage: {
    width: '80%',
    padding: theme.spacing(3)
  },
  title: {
    backgroundColor: defColor.superLight,
    padding: theme.spacing(4, 0, 4, 0)
  },
  primaryButton: {
    backgroundColor: defColor.superLight,
    margin: theme.spacing(1)
  },
  submitButton: {
    backgroundColor: defColor.primary,
    color: defColor.superLight,
    margin: theme.spacing(3, 0, 2)
  },
  cardGrid: {
    padding: theme.spacing(4, 4, 4, 4)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2, 2, 0, 2)
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: defColor.primary,
    color: 'white',
    padding: theme.spacing(2),
    marginTop: 'auto'
  },
  whiteLink: {
    color: 'white'
  },
}));

export default useStyles
