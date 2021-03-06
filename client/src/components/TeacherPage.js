import React, {useState, useEffect} from 'react'
import {Enrollment, Course, Reservation, Facility} from '../requests'
import FacilitiesComponent from './FacilitiesComponent'
import EnrollmentsComponent from './EnrollmentsComponent'
import ReservationsComponent from './ReservationsComponent'
import AllCourses from './AllCourses'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'

const TeacherPage = ({currentUser}) => {
  const [state, setState] = useState({facilities: [], courses: [], enrollments: [], reservations: []})
  const [trigger, setTrigger] = useState(true)

  const rerender = () => {
    setTrigger(!trigger)
  }

  useEffect(() => {
    if(trigger){
      Facility.index().then(facilities => {
        setState(state => {
          return {
            ...state,
            facilities
          }})
      })
      Course.indexByUser(currentUser.id).then(courseList => {
        setState(state => {
          return({
            ...state,
            courses: courseList
          })
        })
      })
      Enrollment.index().then(enrollments => {
        setState(state => {
          return {
            ...state,
            enrollments
          }})
      })
      Reservation.indexByUser(currentUser.id).then( reservations => {
        console.log(reservations)
        setState(state => {
          return({
            ...state,
            reservations
          })})
        })
    }
    return () => {setTrigger(false)}
  })

  return <main>
    <h1 className="m-3">Teacher's Dashboard</h1>
    <Container>
      <Row>
        <Col>
        <Card className="p-3">
          <AllCourses courses={state.courses} currentUser={currentUser} title={'My classes'}/>
        </Card>
        </Col>
        <Col>
          <Card className="p-3">
          <FacilitiesComponent facilities={state.facilities} currentUser={currentUser}/>
          </Card>
        </Col>
        <Col>
          <Card className="p-3">
          <EnrollmentsComponent enrollments={state.enrollments.filter(e => e.teacher_id === currentUser.id)} rerender={rerender}/> 
          </Card>
        </Col>
        <Col>
          <Card className="p-3">
          <ReservationsComponent reservations={state.reservations} title="My Reservations" rerender={rerender}/>
          </Card>
        </Col>
      </Row>
    </Container>
  </main>
}

export default TeacherPage