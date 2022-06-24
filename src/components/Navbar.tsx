import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  logo: {
    marginRight: "24px",
  },
});

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <img
          src="https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/logo-top.png"
          alt="logo"
          className={classes.logo}
        />
        <Typography variant="h5">Desafio 02</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
