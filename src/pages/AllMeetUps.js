import MeetupList from "../components/meetups/MeetupList";
import { useState } from "react";

import { useEffect } from 'react';

function AllMeetUpsPage() {

  const [isLoading, setIsLoading] = useState(true);

  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=>{ 
    
    setIsLoading(true);
    // not always executed
    fetch('https://react-meetups-7683a-default-rtdb.firebaseio.com/meetups.json').then( response =>{
    return response.json(); // acces to data : JSON -> js object

  }).then(data =>{

    const meetups = [];

    for(const key in data){
      const meetup= {
        id : key,
        ...data[key] // spread operator 
      };

      meetups.push(meetup);
    }

    setIsLoading(false);
    setLoadedMeetups(meetups);
    

    });
// external values of dependency
  },[]);

  
    if(isLoading){
      return <section>
        <p>Loading ... </p>
      </section>
    }

  return <section>
    <h1>All Meetups</h1>
    <MeetupList meetups={loadedMeetups} />
    
  </section>
}

export default AllMeetUpsPage;