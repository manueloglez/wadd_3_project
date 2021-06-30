import React from 'react';

const SearchBar = ({updateCourseData}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  
  function handleCourseInput(event) {
    const { value } = event.currentTarget;
    updateCourseData(value);
  }

  return (
    <input 
     style={BarStyling}
     placeholder={"Search Course"}
     onChange={handleCourseInput}
    />
  );
}

export default SearchBar