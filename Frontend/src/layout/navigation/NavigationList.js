import { List, makeStyles } from '@material-ui/core';
import NavigationItem from './NavigationItem';

NAVIGATION_LIST_ITEMS = [
    {
        text: '',
        to: ''
    },
]

const useStyles = makeStyles({
    navigation: {

    },
    list: {

    }
})

const NavigationList = props => {
    const styles = useStyles();

    return (
        <nav className={styles.navigation}>
            <List className={styles.list}>
                {NAVIGATION_LIST_ITEMS.map(item => <NavigationItem text={item.text} to={item.to} />)}
            </List>
        </nav>
    )
}

export default NavigationList;