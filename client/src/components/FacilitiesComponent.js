import React, {useState, useEffect} from 'react'
import FacilityDetails from './FacilityDetails'
import SearchBar from './SearchBar'


const FacilitiesComponent = ({facilities}) => {
  const [input, setInput] = useState('');

  const updateFacilityData = (value) => {
    setInput(value)
  }

  return <>
    <h2>Facilities List</h2>
    <SearchBar input={input} onChange={updateFacilityData}/>
    {facilities.filter(facility => {
      return(input !== '' ? 
      facility.name.toLowerCase().includes(input.toLowerCase()) ||
      facility.location.toLowerCase().includes(input.toLowerCase())
      : true)
    }).map(facility => {
      return <>
        <FacilityDetails {...facility}/>
      </>
    })}
  </>
}

export default FacilitiesComponent