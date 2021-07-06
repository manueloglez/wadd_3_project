import React, {useState} from 'react'
import FacilityDetails from './FacilityDetails'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'


const FacilitiesComponent = ({facilities, currentUser}) => {
  const [input, setInput] = useState('');

  const updateFacilityData = (value) => {
    setInput(value)
  }

  return <>
    <h1>Facilities List
      {currentUser?.isAdmin ? <Link to='/facility/new'><button>Create Facility</button></Link> : ''}
    </h1>
    <SearchBar text="Search Facilities" input={input} onChange={updateFacilityData}/>
    {facilities.filter(facility => {
      return(input !== '' ? 
      facility.name.toLowerCase().includes(input.toLowerCase()) ||
      facility.location.toLowerCase().includes(input.toLowerCase())
      : true)
    }).map((facility, id) => {
      return <>
        <FacilityDetails key={id} {...facility}/>
      </>
    })}
  </>
}

export default FacilitiesComponent