import React, {useState, useEffect} from 'react'
import {Reservation, Facility} from '../requests'
import facilityList from '../data/facilities'
import reservations from '../data/reservations'
import FacilitiesComponent from './FacilitiesComponent'
import ReservationsComponent from './ReservationsComponent'

const AdminPage = ({currentUser}) => {
  const [state, setState] = useState({facilities: [], reservations: []})
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
      Reservation.index().then( reservations => {
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
    <h1>Admin's Dashboard</h1>
    <div className="admin-dashboard">
      <FacilitiesComponent facilities={state.facilities}/>
      <ReservationsComponent 
        reservations={state.reservations.filter(r => r.status ==='pending')} 
        title="Pending Approvals" 
        rerender={rerender}
        adminView={true}
      />
      <ReservationsComponent 
        reservations={state.reservations} 
        title="Active Reservations" 
        rerender={rerender}
        adminView={false}
      />
    </div>
  </main>
}

export default AdminPage