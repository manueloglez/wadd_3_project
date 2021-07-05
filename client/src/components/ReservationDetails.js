import React from 'react'
import { Reservation } from '../requests'

const ReservationDetails = (props) => {
  const {id, teacher, start_time, end_time, adminView, facility, status, rerender} = props
  const changeStatus = (id, status) => {
    Reservation.update(id, {status}).then(res =>{
      rerender()
    })
  }
  const destroyReservation = (id) => {
    Reservation.delete(id).then(res =>{
      rerender()
    })
  }
  return <div>
    <h3>{teacher ? teacher.first_name + ' ' + teacher.last_name : ''} - {facility.name} - {new Date(start_time).toLocaleString()} - {new Date(end_time).toLocaleString()}
    - {status}
    </h3> 
    {adminView ? <>  
    <button onClick={() => changeStatus(id, 'approved')}>Approve</button>
    <button onClick={() => changeStatus(id, 'denied')}>Deny</button> </> : 
    <button onClick={() => destroyReservation(id)}>Cancel</button>
    }
  </div>
}

export default ReservationDetails