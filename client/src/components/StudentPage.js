import React, {useState, useEffect} from 'react'
import courseList from '../data/courses'
import AllCourses from './AllCourses'

const StudentPage = () => {
  const [state, setState] = useState({courses: []})
  const currentUser = {id: 1}
  useEffect(() => {
    setState(state => {
      return({courses: courseList})
    })
  }, [])
  return <main>
    <h2>Student's Dashboard</h2>
    <div className="courses-dashboard">
      <div className="courses-container" >
        <AllCourses title="My Courses" courses={state.courses.filter(c => c.status)} currentUser={currentUser}/>
      </div>
      <div className="courses-container" >
        <AllCourses title="All Courses" className="courses-container" courses={state.courses}/>
      </div>
    </div>
  </main>
}

export default StudentPage