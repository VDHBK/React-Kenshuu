import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
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
    margin: "auto",
  },
}));

export default function Image(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div>
        <figure>
          <p>{props.data.text}</p>
          <img className={classes.image} src={props.src} alt={props.alt} />
          <figcaption>{props.heading}</figcaption>
        </figure>
      </div>
    </section>
  );
}
