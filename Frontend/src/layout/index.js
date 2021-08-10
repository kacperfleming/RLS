import {Box, Paper, makeStyles} from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';


const useStyles = makeStyles({
    root: {

    },
    header: {

    },
    main: {

    },
    footer: {

    }
})

const Layout = (props) => {
    const styles = useStyles();

    return (
        <Box component="div" className={styles.root}>
            <Header className={styles.header} />
            <Paper component="main" square elevation={0} className={styles.main}>
                {props.children}
            </Paper>
            <Footer className={styles.footer} />
        </Box>
    )
}

export default Layout;