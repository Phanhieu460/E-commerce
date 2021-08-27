import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./product/Product";
import useStyles from "./styles";

const Products = ({ products, onAddCart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolBar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Product product={item} onAddCart={onAddCart} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
