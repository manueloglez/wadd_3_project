import React from 'react'
import CourseDetails from './CourseDetails'

const MyCourses = ({courses, currentUser}) => {
  return <>
    <h1>My Courses</h1>
    {courses.filter(c => c.status)
    .map(course => {
      return <>
        <CourseDetails {...course}/>
      </>
    })}
  </>
}

export default MyCourses