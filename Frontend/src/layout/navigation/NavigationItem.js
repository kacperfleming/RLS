import { makeStyles } from '@material-ui/core';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles({
    item: {

    },
    activeItem: {

    }
})

const NavigationItem = props => {
    const styles = useStyles();

    return (
        <NavLink to={props.to} className={styles.item} activeClassName={styles.activeItem}>
            {props.text}
        </NavLink>
    )
}

export default NavigationItem;