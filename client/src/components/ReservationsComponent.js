import React from 'react'
import ReservationDetails from './ReservationDetails'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'


import { Link } from 'react-router-dom'


const ReservationsComponent = ({reservations, title, adminView, rerender}) => {
  const handleStatus = (reservation) => {
    const obj = {
      'approved': 'success',
      'pending': 'dark',
      'denied': 'danger'
    }
    
    return reservation?.status ? obj[reservation.status] : ''
  }

  return <>
    <h2 className="my-2">{title}</h2>
    <Link to='/reservation/new'><Button>Create Reservation</Button></Link>
    <ListGroup className='p-3'>

      {reservations.map((reservation, id) => {
        return <ListGroup.Item variant={handleStatus(reservation)}>
          <ReservationDetails key={id} {...reservation} rerender={rerender} adminView={adminView}/>
          </ListGroup.Item>
      })}
    </ListGroup>
  </>
}

export default ReservationsComponent