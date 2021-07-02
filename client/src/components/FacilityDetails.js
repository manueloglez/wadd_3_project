import React, {useState, useEffect} from 'react'

const FacilityDetails = (props) => {
  const {location, name, features, availabitiy} = props
  return <div>
    <h1>{name}</h1>
  </div>
}

export default FacilityDetails