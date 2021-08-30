import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";
import { Link } from "react-router-dom";
const Cart = ({ cart, onUpdateCart, onRemoveCart, onEmptyCart }) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,{" "}
      <Link to="/" className={classes.link}>
        start adding some!
      </Link>
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item, index) => {
          return (
            <Grid item xs={12} sm={4} key={index}>
              <CartItem
                item={item}
                onUpdateCart={onUpdateCart}
                onRemoveCart={onRemoveCart}
              />
            </Grid>
          );
        })}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <Button
          className={classes.emptyButton}
          size="large"
          type="button"
          variant="contained"
          color="secondary"
          onClick={onEmptyCart}
        >
          Empty Cart
        </Button>
        <Button
          className={classes.checkoutButton}
          size="large"
          type="button"
          variant="contained"
          color="primary"
        >
          Checkout
        </Button>
      </div>
    </>
  );
  if (!cart.line_items) return "Loading...";
  return (
    <Container>
      <div className={classes.toolBar}>
        <Typography className={classes.title} variant="h3">
          Shopping Cart
        </Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </div>
    </Container>
  );
};

export default Cart;
