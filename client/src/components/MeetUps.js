import React, { useEffect, useState } from 'react';
import MeetUpCard from './MeetUpCard';

function MeetUps() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch("/meetups")
      .then((resp) => resp.json())
      .then(meetupsArray => setMeetups(meetupsArray));
  }, []);

  const displayMeetups = meetups.map(meetup => {
      return (
        <MeetUpCard key={meetup.id} {...meetup}/>
      )
    })

  return (
    <div>{displayMeetups}</div>
  )
}

export default MeetUps