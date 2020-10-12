import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PageIndexCard from "../Modules/Views/PageIndexCard";

const useStyles = makeStyles({
  root: {
    flexFlow: 1,
  },
});

function AllFoods(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.root} spacing={1}>
        <Grid container justify="center" item xs={12}>
          {props.data.map((food, index) => (
            <PageIndexCard key={index} parentPath={"food"} data={food} />
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AllFoods;
