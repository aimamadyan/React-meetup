import { useContext } from "react";

import FavsContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
    const favsCtx = useContext(FavsContext);

    let content;

    if (favsCtx.totalFavs === 0) {
        content = <p>No Favorite yet. Start adding in All Meetups</p>
    } else {
        content = <MeetupList meetups={favsCtx.favorites}/>
    }

    return (<section>
        <h1>My Favorites</h1>
        {content}
    </section>);
}

export default FavoritesPage;