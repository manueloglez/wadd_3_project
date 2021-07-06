import React from 'react';
import Form from 'react-bootstrap/Form'

const SearchBar = ({onChange, text}) => {
  
  function handleCourseInput(event) {
    const { value } = event.currentTarget;
    onChange(value);
  }

  return <Form.Control type="text" placeholder={text} onChange={handleCourseInput}/>
  ;
}

export default SearchBar