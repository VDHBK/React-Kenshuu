import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:"5px",
    },
    content:{
      margin: "auto",
      maxWidth: "700px",
      paddingLeft: "20px",
      paddingRight: "20px"
    },
    heading:{
      fontSize:"20px",
      paddingTop:"0px",
      paddingBottom:"0px"
    },
    li:{
      paddingTop:"10px"
    },
    comment:{
      fontStyle:"italic"
    }
}));

export default function OrderList(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div className={classes.content}>
            <h3 classes={classes.heading}>{props.data.heading}</h3>
            <ol>
              {props.data.items.map((item, index)=>{
                return <li key={index} className={classes.li}>{item}</li>
              })}
            </ol>
            <p className={classes.comment}>{props.data.comment}</p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}