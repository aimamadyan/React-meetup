import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from './MainNavigation.module.css'
import FavsContext from "../../store/favorites-context";

function MainNavigation() {
    const favsCtx = useContext(FavsContext);

    return ( <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add New Meetup</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorites
                    <span className={classes.badge}>{favsCtx.totalFavs}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header> );
}

export  default MainNavigation;