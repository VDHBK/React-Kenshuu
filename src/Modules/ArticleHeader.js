import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    marginTop: "30px",
  },
  content: {
    margin: "auto",
    maxWidth: "700px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  h2: {
    marginBottom: "0px",
    textAlign: "center",
  },
  address: {
    padding: "10px",
    paddingLeft: 0,
    color: "gray",
    "& time": {
      marginLeft: 0,
    },
  },
  subtitle: {
    color: "#003f93",
  },
  image: {
    width: "100%",
  },
}));

function getImgPath(rootPath, imgSrc) {
  return require("../" + rootPath + imgSrc);
}
export default function ArticleHeader(props) {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div className={classes.content}>
            <span className={classes.subtitle}>{props.data.subtitle}</span>
            <h2 className={classes.h2}>{props.data.title}</h2>
            <address className={classes.address}>
                {props.data.text}
            </address>
            <img
              className={classes.image}
              src={getImgPath(props.rootImgPath, props.data.image.src)}
              alt={props.data.image.alt}
            ></img>
          </div>
        </Grid>
      </Grid>
    </header>
  );
}
