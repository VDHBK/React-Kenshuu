import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Footer.css";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    color: "#000",
    paddingTop: "5rem",
    paddingBottom: "1rem",
    textAlign: "center",
    "& ul": {
      textAlign: "center",
      alignItems: "center",
      flexDirection: "column",
      marginBottom: "1.5rem",
      display: "inline-block",
      flexWrap: "wrap",
      "& li": {
        marginRight: "2rem",
        display: "inline-block",
      },
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <nav className="bar">
      <div className="bar-wrap">
      <ul className="links">
            <li><a href="/">Home</a></li>
            <li><a href="/">License</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Advertise</a></li>
            <li><a href="/">About</a></li>
      </ul>
      <div class="social">
      <a href="https://www.facebook.com/worldworks.vietnam/?__tn__=%2Cd%2CP-R&eid=ARCBKtlW3skgSqCgc4fVPPBZXZzIbnoZ4nhZ3duyNy83qWJKjEJYhOli4uei3rEkwA3ODSy_drWpGBJa" class="fb">
                <span data-icon="f" className="icon"></span>
                <span className="info">
                    <span className="follow">Become a fan Facebook</span>
                    <span className="num">9,999</span>
                </span>
            </a>

            <a href="#" className="tw">
                <span data-icon="T" className="icon"></span>
                <span class="info">
                    <span className="follow">Follow us Twitter</span>
                    <span className="num">9,999</span>
                </span>
            </a>

            <a href="#" className="rss">
                <span data-icon="R" class="icon"></span>
                <span className="info">
                    <span className="follow">Subscribe RSS</span>
                    <span className="num">9,999</span>
                </span>
            </a>
        </div>
        <div className="clear"></div>
        <div className="copyright">ベトナム旅  &copy; 2020  All Rights Reserved</div>  </div>
      </nav>
    </footer>
  );
}
