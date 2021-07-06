import React, {useState} from 'react'
import CourseDetails from './CourseDetails'
import SearchBar from './SearchBar'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'


const AllCourses = ({courses, title, rerender, currentUser}) => {
  const [input, setInput] = useState('');

  const updateCourseData = (value) => {
    setInput(value)
  }

  const handleRerender = () => {
    rerender()
  }

  const handleStatus = (enrollment) => {
    const obj = {
      'approved': 'success',
      'pending': 'dark',
      'denied': 'danger'
    }
    
    return enrollment?.status ? obj[enrollment.status] : ''
  }

  return <>
    <h2>{title}</h2>
    {currentUser?.isTeacher ? <Link to='/course/new'><Button>Create Course</Button></Link> : ''}
    
    <SearchBar text="Search Courses" input={input} onChange={updateCourseData}/>
    <ListGroup className='p-3'>
    {courses.filter(c => {
      return(input !== '' ? 
      c.name.toLowerCase().includes(input.toLowerCase()) ||
      c.topic.toLowerCase().includes(input.toLowerCase())
      : true)
    }).map(course => {
      return <ListGroup.Item variant={handleStatus(course.enrollment)}>
          <CourseDetails {...course} rerender={handleRerender}/>
        </ListGroup.Item>
      
    })}
    </ListGroup>
  </>
}

export default AllCourses