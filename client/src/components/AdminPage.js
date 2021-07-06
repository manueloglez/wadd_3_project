import React, {useState, useEffect} from 'react'
import {Reservation, Facility} from '../requests'
import FacilitiesComponent from './FacilitiesComponent'
import ReservationsComponent from './ReservationsComponent'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'

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
    <h1 className="m-3">Admin's Dashboard</h1>
    <Container>
      <Row>
        <Col>
        <Card className="p-3">
      <FacilitiesComponent facilities={state.facilities} currentUser={currentUser}/>
      </Card>
        </Col>
        <Col>
          <Card className="p-3">
      <ReservationsComponent 
        reservations={state.reservations.filter(r => r.status ==='pending')} 
        title="Pending Approvals" 
        rerender={rerender}
        adminView={true}
      />
      </Card>
        </Col>
        <Col>
          <Card className="p-3">
      <ReservationsComponent 
        reservations={state.reservations.filter(r => r.status === 'approved' && (new Date(r.end_time) > new Date()))} 
        title="Active Reservations" 
        rerender={rerender}
        adminView={false}
      />
      </Card>
        </Col>
      </Row>
    </Container>
  </main>
}

export default AdminPage