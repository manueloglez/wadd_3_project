import React, {useState, useEffect} from 'react'
import ReservationDetails from './ReservationDetails'


const ReservationsComponent = ({reservations, title, adminView, rerender}) => {
  return <>
    <h1>{title}</h1>
    {reservations.map((reservation, id) => {
      return <>
        <ReservationDetails key={id} {...reservation} rerender={rerender} adminView={adminView}/>
      </>
    })}
  </>
}

export default ReservationsComponent