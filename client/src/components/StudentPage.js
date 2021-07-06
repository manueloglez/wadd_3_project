import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'
import {Course} from '../requests'
import AllCourses from './AllCourses'

const StudentPage = ({currentUser}) => {
  const [state, setState] = useState({courses: []})
  const [trigger, setTrigger] = useState(true)

  const rerender = () => {
    setTrigger(!trigger)
  }
  
  useEffect(() => {
    if(trigger){
      Course.index().then(courseList => {
        courseList = courseList.map(course => {
          const enrollment = course.enrollments.find(e => e.student_id === currentUser.id)
          return {
            ...course,
            enrollment
          }
        })
        setState(state => {
          return({courses: courseList})
        })
      })
    }
    return () => {setTrigger(false)}
  })

  return <main>
    <h1 className="m-3">Student's Dashboard</h1>
    <Container>
      <Row>
        <Col>
        <Card className="p-3">
          <AllCourses title="My Courses" courses={state.courses.filter(c => c.enrollment?.status)} currentUser={currentUser} rerender={rerender}/>
        </Card>
        </Col>
        <Col>
          <Card className="p-3">
            <AllCourses title="All Courses" className="courses-container" courses={state.courses} rerender={rerender}/>
          </Card>
        </Col>
      </Row>
    </Container>
        
        
  </main>
}

export default StudentPage