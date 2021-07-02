import React from 'react'
import { Enrollment } from '../requests'

const EnrollmentDetails = (props) => {
  const {id, course, student} = props

  const changeStatus = (id, status) => {
    Enrollment.update(id, {status}).then(res =>{
      props.rerender()
    })
  }

  return <div>
    <h3>{student} - {course.name} - 
    <button onClick={() => changeStatus(id, 'approved')}>Approve</button> - 
    <button onClick={() => changeStatus(id, 'denied')}>Deny</button> - 
    </h3>
  </div>
}

export default EnrollmentDetails