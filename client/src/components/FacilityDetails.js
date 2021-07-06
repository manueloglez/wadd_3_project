import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



const FacilityDetails = (props) => {
  const {location, name, features} = props
  return <Card className="mt-3">
    <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>{location}</Card.Text>
    <ListGroup>
      {features.map(f => <ListGroup.Item>{f}</ListGroup.Item>)}
    </ListGroup>
    </Card.Body>
  </Card>
}

export default FacilityDetails