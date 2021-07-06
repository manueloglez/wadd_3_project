import React, {useState} from 'react'
import CourseDetails from './CourseDetails'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'


const AllCourses = ({courses, title, rerender}) => {
  const [input, setInput] = useState('');

  const updateCourseData = (value) => {
    setInput(value)
  }

  const handleRerender = () => {
    rerender()
  }

  return <>
    <h2>{title}</h2>
    <Link to='/course/new'><button>Create Course</button></Link>
    <SearchBar text="Search Courses" input={input} onChange={updateCourseData}/>
    {courses.filter(c => {
      return(input !== '' ? 
      c.name.toLowerCase().includes(input.toLowerCase()) ||
      c.topic.toLowerCase().includes(input.toLowerCase())
      : true)
    }).map(course => {
      return <>
        <CourseDetails {...course} rerender={handleRerender}/>
      </>
    })}
  </>
}

export default AllCourses