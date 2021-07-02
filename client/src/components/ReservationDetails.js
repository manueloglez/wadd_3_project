import React from 'react'

const ReservationDetails = (props) => {
  const {teacher, status, facility, currentUser} = props
  return <div>
    <h3>{teacher.name} - {facility.start_time} - {facility.end_time} -- Approve - Deny</h3>
  </div>
}

export default ReservationDetails