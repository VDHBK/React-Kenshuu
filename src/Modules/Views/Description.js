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
}));

export default function Description(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div className={classes.content}>
            <h3>{props.data.heading}</h3>
            {props.data.paragraphs.map((para, index) => {
              return (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: para.replace(/(<? *script)/gi, "illegalscript"),
                  }}
                ></p>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
