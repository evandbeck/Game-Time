import React from 'react'

function MeetUpCard({ description, date, time }) {
  return (
    <div>
      {description}
      {date}
      {time}
    </div>
  )
}

export default MeetUpCard