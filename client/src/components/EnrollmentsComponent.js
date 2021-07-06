import React from 'react'
import EnrollmentDetails from './EnrollmentDetails'


const EnrollmentsComponent = ({enrollments, rerender}) => {
  return <>
    <h2>Pending Approvals</h2>
    {enrollments.filter(e => e.status === "pending").map(enrollment => {
      return <>
        <EnrollmentDetails {...enrollment} rerender={rerender}/>
      </>
    })}
  </>
}

export default EnrollmentsComponent