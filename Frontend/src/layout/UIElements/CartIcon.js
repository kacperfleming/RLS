import React from "react";
import { withStyles, Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const StyledBadge = withStyles(theme => ({
    badge: {
        right: -3,
        top: 5,
        border: `2px solid ${theme.palette.primary.main}`
    }
}))(Badge);

const CartIcon = props => {
    return (
        <Badge badgeContent={props.itemsCount} color="secondary">
            <ShoppingCart />
        </Badge>
    )
}

export default CartIcon;