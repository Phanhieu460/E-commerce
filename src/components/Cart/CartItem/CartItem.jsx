import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const CartItem = ({ item, onRemoveCart, onUpdateCart }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        image={item.media.source}
        className={classes.media}
        alt={item.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCart(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography variant="h5">{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCart(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => onRemoveCart(item.id)}
        >
          REMOVE
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
