import React, {useState, useEffect} from 'react'
import facilityList from '../data/facilities'
import reservations from '../data/reservations'
import FacilitiesComponent from './FacilitiesComponent'
import ReservationsComponent from './ReservationsComponent'

const AdminPage = () => {
  const [state, setState] = useState({facilities: []})
  useEffect(() => {
    setState(state => {
      return({facilities: facilityList})
    })
  }, [])
  return <main>
    <h1>Admin's Dashboard</h1>
    <div className="admin-dashboard">
      <FacilitiesComponent facilities={state.facilities}/>
      <ReservationsComponent reservations={reservations} title="Pending Approvals" adminView={true}/>
      <ReservationsComponent reservations={reservations} title="Active Reservations" adminView={false}/>
    </div>
  </main>
}

export default AdminPage