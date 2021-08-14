import React from "react";
import {Link} from 'react-router-dom';
import { List, Card, Typography, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "../../store/cartSlice";
import CartItem from "../components/CartItem";

const useStyles = makeStyles({
    card: {
        width: '60%',
        minWidth: 300,
        padding: '10px 20px',
        margin: '0 auto'
    }
})

const Cart = props => {
    const styles = useStyles();

    const cart = useSelector(state => state.cart);

    if(cart.items.length < 1) {
        return (
            <Card className={styles.card} style={{textAlign: 'center'}} elevation={3}>
                <Typography component="h1" variant="h5">Wygląda na to, że Twój koszyk jest pusty.</Typography>
                <Typography component="p"><Link to="/">Dodajmy coś do niego!</Link></Typography>
            </Card>
        )
    }

    return (
        cart.items.map(item => <CartItem key={item.id} id={item.id} author={item.author} name={item.name} description={item.description} quantity={item.quantity} price={item.price} />)
    );
}

export default Cart;