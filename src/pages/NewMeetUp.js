import { useHistory } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetUpPage() {

  const history = useHistory(); //manipulate the borwser history


  function addMeetupHandler(meetupData){

    // send an http request : sends a GET REQ
    fetch('https://react-meetups-7683a-default-rtdb.firebaseio.com/meetups.json',{

      method : 'POST',
      body : JSON.stringify(meetupData), // transfer data in http req
      headers: {
        'Content-Type' : 'application/json'
      }
    }
    ).then( () => {
      history.replace('/');
    });


  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>

    </section>
  
  );
}

export default NewMeetUpPage;