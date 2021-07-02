import React, {useState, useEffect} from 'react'
import facilityList from '../data/facilities'
import courseList from '../data/courses'
import FacilitiesComponent from './FacilitiesComponent'
import AllCourses from './AllCourses'

const StudentPage = () => {
  const [state, setState] = useState({facilities: [], courses: []})
  const currentUser = {id: 14}
  useEffect(() => {
    setState(state => {
      return({facilities: facilityList})
    })
  }, [])
  return <main>
    <h1>Teacher's Dashboard</h1>
    <div className="teacher-dashboard">
      <AllCourses courses={courseList.filter(c => c.teacher.id === currentUser.id)}/>
      <FacilitiesComponent facilities={state.facilities}/>
    </div>
  </main>
}

export default StudentPage