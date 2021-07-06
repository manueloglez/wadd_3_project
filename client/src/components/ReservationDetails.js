import React from 'react'

const ReservationDetails = (props) => {
  const {teacher, startTime, endTime, adminView} = props
  return <div>
    <h4>{teacher.full_name} - {new Date(startTime).toLocaleString()} - {new Date(endTime).toLocaleString()} -- Approve - Deny</h4>
    {adminView ? <p>Cancel</p> : ''}
  </div>
}

export default ReservationDetails