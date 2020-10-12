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

export default function Article(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div className={classes.content}>
            <h3>{props.data.heading}</h3>
            {props.data.paragraphs.map((para, index) => {
              return (
                <article key={index}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: para.text.replace(
                        /(<? *script)/gi,
                        "illegalscript"
                      ),
                    }}
                  ></p>
                  <img
                    className={classes.image}
                    src={getImgPath(props.rootImgPath, para.image.src)}
                    alt={para.image.alt}
                  />
                </article>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
