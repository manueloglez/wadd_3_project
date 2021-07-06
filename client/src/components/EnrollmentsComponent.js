import React from 'react'
import EnrollmentDetails from './EnrollmentDetails'


const EnrollmentsComponent = ({enrollments, rerender}) => {
  return <>
    <h2>Pending Approvals</h2>
    {enrollments.filter(e => e.status === "pending").map((enrollment, id) => {
      return <>
        <EnrollmentDetails key={id} {...enrollment} rerender={rerender}/>
      </>
    })}
  </>
}

export default EnrollmentsComponent