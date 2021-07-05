import React from 'react'
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

  return <div className="course-details-container">
    <h4>{props.name}</h4>
    <p>{props.enrollment ? props.enrollment.status : ''}</p>
    {props.enrollment?.status ? 
      <button onClick={() => unenroll(props.enrollment.id)}>Unenroll</button> : 
      <button onClick={() => enrollToCourse(props.id)}>Enroll</button>}
  </div>

}

export default CourseDetails