import React from 'react'
import { Reservation } from '../requests'
import Button from 'react-bootstrap/Button';


const ReservationDetails = (props) => {
  const {id, teacher, start_time, end_time, adminView, facility, rerender} = props
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
    <p className="m-1">{facility.name}</p>
    <p className="m-1">{teacher ? teacher.first_name + ' ' + teacher.last_name : ''}</p>
    <small>From: {new Date(start_time).toLocaleString()}</small> <br/>
    <small>To: {new Date(end_time).toLocaleString()}</small><br/>
    {adminView ? <>  
    <Button variant="success" className="btn-sm mx-2" onClick={() => changeStatus(id, 'approved')}>Approve</Button>
    <Button variant="danger" className="btn-sm mx-2" onClick={() => changeStatus(id, 'denied')}>Deny</Button> </> : 
    <Button variant="secondary" onClick={() => destroyReservation(id)}>Cancel</Button>
    }
  </div>
}

export default ReservationDetails