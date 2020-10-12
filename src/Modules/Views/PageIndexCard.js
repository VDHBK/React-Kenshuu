import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import QueryBuilder from "@material-ui/icons/QueryBuilder";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexFlow: 1,
    margin: "30px 30px",
  },
  card: {
    padding: "10px",
    maxWidth: "300px",
  },
  media: {
    maxHeight: "150px",
  },
  header: {
    margin: "-15px 0 -10px 0",
  },
  time: {
    marginRight: "10px",
    opacity: "0.5",
    fontSize: "small",
  },
  icon: {
    marginRight: "10px",
    fontSize: "12px",
  },
  description: {
    fontWeight: "bold",
    marginLeft: "-10px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

function getImgPath(imgSrc) {
  return require("../../" + imgSrc);
}

function PageIndexCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={"/" + props.parentPath + "/" + props.data.id}>
        <Card className={classes.card}>
          <span className={classes.time}>
            <QueryBuilder className={classes.icon} />
            {props.data.time}
          </span>
          <CardHeader className={classes.header} title={props.data.title} />
          <CardMedia
            component="img"
            className={classes.media}
            image={getImgPath(props.data.image)}
            title={props.data.title}
          />
          <CardContent className={classes.content}>
            <Typography
              className={classes.description}
              variant="caption"
              color="textSecondary"
              component="p"
              children
            >
              {props.data.description}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
export default PageIndexCard;
