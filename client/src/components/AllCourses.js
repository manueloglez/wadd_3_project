import React from 'react'
import CourseDetails from './CourseDetails'

const AllCourses = ({courses}) => {
  return <>
    <h1>All Courses</h1>
    {courses.map(course => {
      return <>
        <CourseDetails {...course}/>
      </>
    })}
  </>
}

export default AllCourses