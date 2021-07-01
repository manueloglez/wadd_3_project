import React from 'react'

const CourseDetails = (props) => {
  return <div className="course-details-container">
    <h3>{props.name}</h3>
    <p>{props.status}</p>
    {props.status ? <button>Unenroll</button> : ''}
  </div>

}

export default CourseDetails