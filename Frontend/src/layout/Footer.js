import React from 'react';
import { Box, makeStyles } from "@material-ui/core"
import { Copyright } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
    footer: {
        textAlign: 'center',
        color: theme.palette.info.main,
        padding: `${theme.spacing(2)}px 0`,
        backgroundColor: theme.palette.common.black,
        fontSize: 16
    }
}))

const Footer = props => {
    const styles = useStyles();

    return <Box className={styles.footer}>Wszystkie prawa zastrzeżone <Copyright style={{height: 12, width: 12, verticalAlign: 'baseline'}} /> KIRG {new Date().getFullYear()}</Box>
} 

export default Footer;