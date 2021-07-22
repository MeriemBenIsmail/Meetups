import { useContext } from 'react'; 

import classes from './MeetupItem.module.css';
import Card from '../UI/Card';
import FavouriteContext from '../../store/favourite-context';
function MeetupItem (props) {

  // tap into the context
  const favouriteContext = useContext(FavouriteContext); 

  const itemIsFavourite = favouriteContext.itemIsFavourite(props['id']);

  function toggleFavouriteStatusHandler(){
    
    if(itemIsFavourite){
      favouriteContext.removeFavourite(props['id']);

    } else {
      favouriteContext.addFavourite({
        id: props['id'],
        title: props['title'],
        address:props['address'],
        image:props['image'],
        description:props['description']
      });
    }
  }

  return <li className={classes.item}>
    <Card>

      <div className={classes.image}>
        <img src={props.image} alt=""></img>
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <adress>{props.address}</adress>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavouriteStatusHandler} > {itemIsFavourite ? 'Remove From Favourites' : 'To Favourites'}</button>
      </div>

    </Card>
  </li>
}

export default MeetupItem;