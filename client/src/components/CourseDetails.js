import React from 'react'

const CourseDetails = (props) => {
  return <div className="course-details-container">
    <h4>{props.name}</h4>
    <p>{props.status}</p>
    {props.status ? <button>Unenroll</button> : ''}
  </div>

}

export default CourseDetails