import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PageIndexCard from "./Views/PageIndexCard";
const useStyles = makeStyles({
  root: {
    flexFlow: 1,
  },
});

function AllPlaces(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.root} spacing={1}>
        <Grid container justify="center" item xs={12}>
          {props.data.map((place, index) => (
            <PageIndexCard key={index} parentPath={"place"} data={place} />
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AllPlaces;
