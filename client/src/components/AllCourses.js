import React, {useState, useEffect} from 'react'
import CourseDetails from './CourseDetails'
import SearchBar from './SearchBar'


const AllCourses = ({courses, title}) => {
  const [input, setInput] = useState('');

  const updateCourseData = (value) => {
    setInput(value)
  }

  return <>
    <h2>{title}</h2>
    <SearchBar input={input} updateCourseData={updateCourseData}/>
    {courses.filter(c => {
      return(input !== '' ? 
      c.name.toLowerCase().includes(input.toLowerCase()) ||
      c.topic.toLowerCase().includes(input.toLowerCase())
      : true)
    }).map(course => {
      return <>
        <CourseDetails {...course}/>
      </>
    })}
  </>
}

export default AllCourses