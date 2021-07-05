import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { Facility } from '../requests'

const FacilityShowPage = (props) => {
  const [facility, setState] = useState({})
  let history = useHistory();

  useEffect(() => {
    const params = props.match.params
    Facility.show(params.id).then(facility => {
      setState(facility)
    })
  }, [])

  return <main>
    <p>{facility.name}</p>
    <button onClick={() => history.goBack()}>Back</button>
  </main>
}

export default FacilityShowPage