import React, {useState, useEffect} from 'react'
import ReservationDetails from './ReservationDetails'


const ReservationsComponent = ({reservations, title, adminView}) => {
  const currentUser = {
    id: 1,
    isAdmin: true
  }
  return <>
    <h1>{title}</h1>
    {reservations.map(reservation => {
      return <>
        <ReservationDetails currentUser={currentUser} {...reservation} adminView={adminView}/>
      </>
    })}
  </>
}

export default ReservationsComponent