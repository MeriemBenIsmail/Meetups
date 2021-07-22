import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

import { useContext } from 'react';

import FavouriteContext from '../../store/favourite-context';



function MainNavigation () {

  const favouriteContext = useContext(FavouriteContext);


  return <header className={classes.header}>
    <div className={classes.logo}>React Meetups</div>

    <nav>

      <ul>
        <li>
          <Link to='/' >All Meetups</Link>
        </li>

        <li>
          <Link to='/new-meetup' >Add new Meetup</Link>
        </li>

        <li>
          <Link to='/favourites' >My Favourites</Link>
          <span className={classes.badge}>{favouriteContext.totalFavourites}</span>
        </li>
      </ul>

    </nav>

  </header>
}

export default MainNavigation;