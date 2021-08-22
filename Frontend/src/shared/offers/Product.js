import React from 'react';
import {List, Typography} from '@material-ui/core';

const Product = props => {
    return (
        <List>
            <Typography>Nazwa produktu: {props.name}</Typography>
            <Typography>Opis produktu: {props.description}</Typography>
            <Typography>Cena jednostkowa produktu: {props.price}</Typography>
            <Typography>Ilość: {props.quantity}</Typography>
        </List>
    )
}

export default Product;