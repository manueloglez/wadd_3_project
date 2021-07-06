import React, {useState, useEffect} from 'react'
import ReservationDetails from './ReservationDetails'
import { Link } from 'react-router-dom'


const ReservationsComponent = ({reservations, title, adminView, rerender}) => {
  return <>
    <h1>{title}</h1>
    <Link to='/reservation/new'><button>Create Reservation</button></Link>
    {reservations.map((reservation, id) => {
      return <>
        <ReservationDetails key={id} {...reservation} rerender={rerender} adminView={adminView}/>
      </>
    })}
  </>
}

export default ReservationsComponent