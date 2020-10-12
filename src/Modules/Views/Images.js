import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    margin: "auto",
    maxWidth: "700px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  image: {
    width: "100%",
  },
}));

function getImgPath(rootPath, imgSrc) {
  return require("../../" + rootPath + imgSrc);
}

export default function Images(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div className={classes.content}>
            <h3>{props.data.heading}</h3>
            <div>
              {props.data.images.map((image, index) => {
                return (
                  <img
                    className={classes.image}
                    key={index}
                    src={getImgPath(props.rootImgPath, image.src)}
                    alt={image.alt}
                  />
                );
              })}
              <p>{props.data.text}</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
