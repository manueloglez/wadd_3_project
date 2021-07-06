import React, {useState} from 'react'
import FacilityDetails from './FacilityDetails'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';



const FacilitiesComponent = ({facilities, currentUser}) => {
  const [input, setInput] = useState('');

  const updateFacilityData = (value) => {
    setInput(value)
  }

  return <>
    <h2>Facilities List</h2>
    {currentUser?.isAdmin ? <Link to='/facility/new'><Button>Create Facility</Button></Link> : ''}
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