<<<<<<< HEAD
import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
import MeetUpCard from './MeetUpCard';

const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch("")
      .then((resp) => resp.json())
      .then(setMeetups);
  }, []);

  const displayMeetups = setMeetups.map(meetup => {
      return (
        <MeetUpCard key={uuidv4()} {...meetup}/>
      )
    })
=======
import React from 'react';
>>>>>>> login

function MeetUps() {
  return (
    <div>{displayMeetups}</div>
  )
}

export default MeetUps