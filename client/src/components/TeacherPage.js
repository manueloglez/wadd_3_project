import React, {useState, useEffect} from 'react'
import facilityList from '../data/facilities'
import courseList from '../data/courses'
import enrollmentList from '../data/enrollments'
import reservations from '../data/reservations'
import FacilitiesComponent from './FacilitiesComponent'
import EnrollmentsComponent from './EnrollmentsComponent'
import ReservationsComponent from './ReservationsComponent'
import AllCourses from './AllCourses'

const TeacherPage = () => {
  const [state, setState] = useState({facilities: [], courses: []})
  const currentUser = {id: 14}
  useEffect(() => {
    setState(state => {
      return({
        facilities: facilityList,
        courses: courseList
      })
    })
  }, [])
  return <main>
    <h1>Teacher's Dashboard</h1>
    <div className="teacher-dashboard">
      <AllCourses courses={courseList.filter(c => c.teacher.id === currentUser.id)}/>
      <FacilitiesComponent facilities={state.facilities}/>
      <EnrollmentsComponent enrollments={enrollmentList} />
      <ReservationsComponent reservations={reservations} title="My Reservations"/>
    </div>
  </main>
}

export default TeacherPage