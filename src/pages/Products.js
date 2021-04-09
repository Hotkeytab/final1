import React from "react";
import "./App.css";
import Card from "./Card";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Avatar from '@material-ui/core/Avatar';


import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

function Products() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
      <Grid item xs={12} sm={6} md={4} >
      <Avatar>M</Avatar>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Avatar>N</Avatar>

        <Card1 />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Avatar>S</Avatar>

        <Card2 />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
      <Avatar>G</Avatar>

        <Card3 />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Avatar>M</Avatar>

        <Card4 />
      </Grid>
    </Grid>)
}

export default Products;






