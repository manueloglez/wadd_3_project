import React from 'react'
import Button from 'react-bootstrap/Button';
import { Course, Enrollment } from '../requests'

const CourseDetails = (props) => {
  const enrollToCourse = (id) => {
    Course.enroll(id).then(res => {
      props.rerender()
    })
  }

  const unenroll = (id) => {
    Enrollment.delete(id).then(res => {
      props.rerender()
    })
  }

  return <>
    <h3>{props.name}</h3>
    {props.enrollment?.status ? 
      <Button variant="danger" className="btn-sm" onClick={() => unenroll(props.enrollment.id)}>Unenroll</Button> : 
      <Button variant="primary" className="btn-sm" onClick={() => enrollToCourse(props.id)}>Enroll</Button>}
  </>
}

export default CourseDetails