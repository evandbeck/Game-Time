import React from 'react'

function MeetUpCard({ description, date, time }) {
  return (
    <div>
      <p>{description}</p>
      <h4>{date}</h4>
      <h5>{time}</h5>
    </div>
  )
}

export default MeetUpCard