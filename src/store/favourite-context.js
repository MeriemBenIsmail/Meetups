import { createContext } from "react";
import { useState } from "react";

const FavouriteContext = createContext({
  favourites : [],
  totalFavourites : 0,
  addFavourite : (favouriteMeetup) => {},
  removeFavourite : (meetupId) => {},
  itemIsFavourite : (meetupId) => {}
});// contains a REACT component (thats why theres 'F')


// role : provide the context to all the components that need values from the context - updating the context values
export function FavouritesContextProvider(props){
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouritesHandler(favouriteMeetup){

    setUserFavourites((previousUserFavourite)=>{
      return previousUserFavourite.concat(favouriteMeetup);
    });

  }
  function removeFavouritesHandler(meetupId){

    setUserFavourites((previousUserFavourite)=>{
      return previousUserFavourite.filter(meetup => meetup['id'] !== meetupId);
    });

  }

  function itemIsFavouriteHandler(meetupId){

    return userFavourites.some(meetup => meetup['id'] === meetupId);

  }

  // manage context data-state

  const context = {
    favourites : userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite : addFavouritesHandler,
    removeFavourite : removeFavouritesHandler,
    itemIsFavourite : itemIsFavouriteHandler
  };



  return <FavouriteContext.Provider value={context}> 
    {props.children}
  </FavouriteContext.Provider>

}

export default FavouriteContext;


