import React, {useState} from "react";
import { Card, CardHeader, CardActionArea, CardActions, CardContent, Collapse, IconButton, Avatar, Typography, makeStyles } from "@material-ui/core";
import {MoreVert} from '@material-ui/icons';

const useStyles = makeStyles({
    root: {

    }
});

const CartItem = props => {
    const styles = useStyles();

    const [expanded, setExpanded] = useState(false);

    return (
        <Card className={styles.root} elevation={2}>
            <CardHeader
                avatar={
                    <Avatar>
                        {props.author[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
                title={props.name} />
        </Card>
    )
}

export default CartItem;