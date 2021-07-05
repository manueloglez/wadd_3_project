import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const FacilityDetails = (props) => {
  const {location, name, features, availabitiy, id} = props
  return <div>
    <Link to={`/facility/${id}`}>
      <h1>{name}</h1>
    </Link>
  </div>
}

export default FacilityDetails