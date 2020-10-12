import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import AppBar from '@material-ui/core/AppBar';
import "./Header.css";
import { withStyles } from "@material-ui/core/styles";
import Logo from "../Img/Menu/logo.png"

const styles = {
  root: {
    flexGrow: 1,
    margin: "auto"
  },
  appbar: {
    overflow: 'hidden',
    borderTop: "2px solid #FBEAEA",
    borderBottom: "2px solid #FBEAEA",
    backgroundColor: "#FCFBFB",
    maxWidth: "100%",
    height: "45px",
    lineHeight: "45px",
  },
  navbar : {
    margin: "0 auto",
  },
  navbarLink: {
    paddingRight: "30px",
    flexShrink: 0,
    fontSize: "20px",
    
  },
  image: {
    margin: "20px auto",
    maxWidth: "500px",
    maxHeight: "100px",
  },
};


function Header(props) {
  const { classes } = props;

  return (
    <React.Fragment className={classes.root}>
        <Grid container justify="center" item xs={12}>
          <img className={classes.image} src={Logo} />
        </Grid>
          <AppBar 
            position="sticky"
            color = "transparent"
            className={classes.appbar}
          >
            <nav id="pageHeader" className={classes.navbar}>
              <ul>
                <li className={classes.navbarLink}>
                  <Link to="/" id = "home">Home</Link>
                </li>
                <li className={classes.navbarLink}>
                  <Link to="/food" id = "food">Foods</Link>
                </li>
                <li className={classes.navbarLink}>
                  <Link to="/place" id = "place">Places</Link>
                </li>
              </ul>
            </nav>
          </AppBar>
    </React.Fragment>
  );
}
export default withStyles(styles)(Header);