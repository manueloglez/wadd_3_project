import React, {useState, useEffect} from 'react'

const FacilityDetails = (props) => {
  const {location, name, features, availabitiy} = props
  return <div>
    <h3>{name}</h3>
  </div>
}

export default FacilityDetails