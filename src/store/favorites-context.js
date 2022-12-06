import { createContext, useState } from "react";

const FavsContext = createContext({
    favorites: [],
    totalFavs: 0,
    addFav: (favMeetup) => {},
    removeFav: (meetupId) => {},
    itemIsFav: (meetupId) => {}
});

export function FavsContextProvider(props) {
    const [ userFavs, setUserFavs ] = useState([]);

    function addFavHandler(favMeetup) {
        setUserFavs((prevUserFavs) => {
            return prevUserFavs.concat(favMeetup);
        });
    }

    function removeFavHandler(meetupId) {
        setUserFavs((prevUserFavs) => {
            return prevUserFavs.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavHandler(meetupId) {
        return userFavs.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavs,
        totalFavs: userFavs.length,
        addFav: addFavHandler,
        removeFav: removeFavHandler,
        itemIsFav: itemIsFavHandler
    };

    return ( <FavsContext.Provider value={context}>
        {props.children}
    </FavsContext.Provider> )
}

export default FavsContext;