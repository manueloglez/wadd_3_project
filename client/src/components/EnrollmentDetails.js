import React, {useState, useEffect} from 'react'

const EnrollmentDetails = (props) => {
  const {id, course, student, status} = props
  return <div>
    <h3>{student} - {course.name} -- Approve - Deny</h3>
  </div>
}

export default EnrollmentDetails