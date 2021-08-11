import React from 'react';
import { Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    footer: {
        textAlign: 'center',
        color: theme.palette.info.main,
        padding: `${theme.spacing(2)}px 0`,
        backgroundColor: theme.palette.common.black
    }
}))

const Footer = props => {
    const styles = useStyles();

    return <Box className={styles.footer}>All rigths reserved KIRG {new Date().getFullYear()}</Box>
} 

export default Footer;