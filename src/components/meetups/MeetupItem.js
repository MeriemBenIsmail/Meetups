import classes from './MeetupItem.module.css';
import Card from '../UI/Card';
function MeetupItem (props) {

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
        <button>To Favourites</button>
      </div>

    </Card>
  </li>
}

export default MeetupItem;