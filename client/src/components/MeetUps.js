import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import MeetUpCard from './MeetUpCard';

function MeetUps() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch("/meetups")
      .then((resp) => resp.json())
      .then(setMeetups);
  }, []);

  const displayMeetups = meetups.map(meetup => {
      return (
        <MeetUpCard key={uuidv4()} {...meetup}/>
      )
    })

  return (
    <div>{displayMeetups}</div>
  )
}

export default MeetUps