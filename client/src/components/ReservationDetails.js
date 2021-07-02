import React from 'react'

const ReservationDetails = (props) => {
  const {teacher, status, facility, startTime, endTime, adminView} = props
  console.log(adminView)
  return <div>
    <h3>{teacher.full_name} - {new Date(startTime).toLocaleString()} - {new Date(endTime).toLocaleString()} -- Approve - Deny</h3>
    {adminView ? <p>Cancel</p> : ''}
  </div>
}

export default ReservationDetails