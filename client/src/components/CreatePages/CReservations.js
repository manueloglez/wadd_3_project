import React, { useEffect, useState } from 'react'
import { Reservation, Facility } from '../../requests'


const CReservation= (props) => {
  const [state, setState] = useState([])
  useEffect(() => {
    Facility.index().then(facilities => {
      setState(facilities)
    })
  }, [])

  const handleSubmit = event => {
    const { currentTarget } = event
    event.preventDefault()

    const formData = new FormData(currentTarget)
    const facilityId = formData.get('Facility')

    const params = {
      status: 'pending',
      start_time: formData.get('Start Date'),
      end_time: formData.get('End Date'),
    }
    Reservation.create(facilityId, params).then(res => {
      if (res?.id) {
        props.history.push('/teachers')
      } else {
        console.log(res)
      } 
    })
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
              <select name="Facility" id="Facility">
                {state.map(f => <option value={f.id}>{f.name}</option>)}
                <option></option>
              </select>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
            <label> Start Date of Reservation </label>
              <input className="form-control" type="datetime-local" name="Start Date" required/>
                    </div>
                    <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
            <label>End Date of Reservation</label>
                    <input className="form-control" type="datetime-local" name="End Date" data-value="7" required/>
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