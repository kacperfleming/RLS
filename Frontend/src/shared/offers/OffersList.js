import React from 'react';
import {List, makeStyles} from '@material-ui/core';

import Offer from './Offer';

const useStyles = makeStyles(theme => ({
    list: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 400px))",
        columnGap: theme.spacing(1),
        rowGap: theme.spacing(2),
        margin: "0 auto",
        width: '100%',
        justifyContent: 'center'
      },
}));

const OffersList = props => {
    const styles = useStyles();

    return (
        <List className={styles.list}>
            {props.offers.map(offer => <Offer key={offer.id} {...offer} openMenu={props.openMenu} />)}
        </List>
    )
}

export default OffersList;