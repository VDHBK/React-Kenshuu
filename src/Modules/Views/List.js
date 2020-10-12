import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
      boxSizing:"border-box"
  },
  content:{
    margin: "auto",
    maxWidth: "700px",
    paddingLeft: "20px",
    paddingRight: "20px"
  },
  heading:{
    fontSize:"20px",
    marginTop:0,
    padding:0,    
    marginBottom:0
  },
  list:{
    marginTop:"0px",
    marginBottom:"0px"
  },
  listItem:{
    paddingTop:"10px"
  },
  comment:{
    fontStyle:"italic"
  }
  }));

export default function List(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div className={classes.content}>
            <h3 classes={classes.heading}>{props.data.heading}</h3>
            <ul className={classes.list}>
              {props.data.items.map((item, index)=>{
                return <li key={index} className={classes.listItem}>{item}</li>
              })}
            </ul>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}