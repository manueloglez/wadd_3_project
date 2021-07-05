import React from 'react'
import { User } from '../../requests'

const CCourse = (props) => {

  const handleSubmit = event => {
    const { currentTarget } = event
    event.preventDefault()
  }

    return <main>
      <h2>Create Course</h2>
       <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
          </div>
          <div className="body-form">
           <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input type="text" className="form-control" placeholder=" Course Name" name="name" id="name"/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <br></br>
             <label for='Topics'>-: Choose Topic for your Course :- </label>
              <select  className="form-control"  name="Topic" id="Topics">
                   <option value="">-:none:-</option>
                   <option value="MatheMatics">MatheMatics</option>
                   <option value="Science">Science</option>
                   <option value="Technology">Technology</option>
                   <option value="Art, Design & Creativity">Art, Design & Creativity</option>
                   <option value="Computer Science">Computer Science</option>
                   <option value="Buisiness">Business</option>
                   <option value="Marketing<">Marketing</option>
              </select>
            </div>

            <button type="submit" className="btn btn-secondary btn-block">Create</button>
            <div className="message">
            </div> 
            </form>
          </div>
        </div>
       </div>   
    
    </main>
  }
      
export default CCourse