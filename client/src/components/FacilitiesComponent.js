import React, {useState, useEffect} from 'react'
import FacilityDetails from './FacilityDetails'
import SearchBar from './SearchBar'


const FacilitiesComponent = ({facilities}) => {
  const [input, setInput] = useState('');

  const updateFacilityData = (value) => {
    setInput(value)
  }

  return <>
    <h1>Facilities List</h1>
    <SearchBar input={input} onChange={updateFacilityData}/>
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