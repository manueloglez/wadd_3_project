import React, {useState, useEffect} from 'react'
import EnrollmentDetails from './EnrollmentDetails'


const EnrollmentsComponent = ({enrollments}) => {
  return <>
    <h1>Pending Approvals</h1>
    {enrollments.filter(e => e.status === "pending").map(enrollment => {
      return <>
        <EnrollmentDetails {...enrollment}/>
      </>
    })}
  </>
}

export default EnrollmentsComponent