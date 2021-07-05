import React from 'react'
import { User } from '../../requests'

const CReservation= (props) => {

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
              <input type="text" className="form-control" placeholder=" Facility " name="Facility" id="Facility"/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <br></br>
            <label> Start Date of Reservation
                    <input className="form-control" type="date" name="Start Date" value="Today"/> </label>
                    <label for="starttime">Start time:-</label>
                    <input type="time" id="starttime" name="starttime"
       min="09:00" max="18:00" required></input>
                    
                    </div>
                    <br></br>
                    <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
            <label>End Date of Reservation
                    <input className="form-control" type="date" name="End Date" data-value="7" value="After one week"/></label>
                    <label for="endtime">End time:-</label>
                    <input type="time" id="endtime" name="endtime"
       min="09:00" max="18:00" required></input>
                    <br></br>
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
      
export default CReservation