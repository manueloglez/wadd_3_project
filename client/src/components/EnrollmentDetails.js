import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Enrollment } from '../requests'

const EnrollmentDetails = (props) => {
  const {id, course, student} = props

  const changeStatus = (id, status) => {
    Enrollment.update(id, {status}).then(res =>{
      props.rerender()
    })
  }

  return <Card className="mt-3">
    <Card.Body>
      <Card.Title>{student} - {course.name}</Card.Title>
      <Button variant="success" className="btn-sm mx-2" onClick={() => changeStatus(id, 'approved')}>Approve</Button> 
      <Button variant="danger" className="btn-sm" onClick={() => changeStatus(id, 'denied')}>Deny</Button>
    </Card.Body>
  </Card>
}

export default EnrollmentDetails