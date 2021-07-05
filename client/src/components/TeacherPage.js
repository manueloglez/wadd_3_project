import React, {useState, useEffect} from 'react'
import facilityList from '../data/facilities'
import {Enrollment, Course} from '../requests'
import reservations from '../data/reservations'
import FacilitiesComponent from './FacilitiesComponent'
import EnrollmentsComponent from './EnrollmentsComponent'
import ReservationsComponent from './ReservationsComponent'
import AllCourses from './AllCourses'

const TeacherPage = ({currentUser}) => {
  const [state, setState] = useState({facilities: [], courses: [], enrollments: []})
  const [trigger, setTrigger] = useState(true)

  const rerender = () => {
    setTrigger(!trigger)
  }

  useEffect(() => {
    if(trigger){
    Course.index().then(courseList => {
      setState(state => {
        return({
          ...state,
          facilities: facilityList,
          courses: courseList
        })
      })
    })
    Enrollment.index().then(enrollments => {
      console.log(enrollments)
      setState(state => {
        return {
          ...state,
          enrollments
        }})
    })
    }
    return () => {setTrigger(false)}
  })

  return <main>
    <h1>Teacher's Dashboard</h1>
    <div className="teacher-dashboard">
      <AllCourses courses={state.courses.filter(c => c.teacher.id === currentUser.id)}/>
      <FacilitiesComponent facilities={state.facilities}/>
      <EnrollmentsComponent enrollments={state.enrollments} rerender={rerender}/> 
      <ReservationsComponent reservations={reservations} title="My Reservations"/>
    </div>
  </main>
}

export default TeacherPage