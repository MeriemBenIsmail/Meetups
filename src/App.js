import { Route , Switch } from 'react-router-dom';
import AllMeetUpsPage from './pages/AllMeetUps';

import NewMeetUpPage from './pages/NewMeetUp';

import FavouritesPage from './pages/Favourite';

import Layout from './components/layout/Layout';


function App() {
  // domain : localhost:3000
  
  return <Layout>
   
    <Switch>

      <Route path='/' exact >
        <AllMeetUpsPage />
      </Route>

      <Route path='/new-meetup'>
        <NewMeetUpPage />
      </Route>

      <Route path='/favourites'>
        <FavouritesPage />
      </Route>

    </Switch>

    </Layout>
}

export default App;
