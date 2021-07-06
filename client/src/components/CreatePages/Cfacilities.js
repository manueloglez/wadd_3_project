import React from 'react'
import { Facility } from '../../requests'

const Cfacility = (props) => {

  const handleSubmit = event => {
    const { currentTarget } = event
    event.preventDefault()

    const formData = new FormData(currentTarget)
    const features = formData.get("Features").split(',').map(f => f.trim())

    const params = {
      name: formData.get('facility'),
      location: formData.get('address'),
      features
    }
    console.log(params)
    Facility.create(params).then(res => {
      if (res?.id) {
        props.history.push('/admin')
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
              <input type="text" className="form-control" placeholder=" Facility" name="facility" id="facility"/>
              <textarea  className="form-control" rows="3" cols="30" placeholder="Address" name="address" id="address"></textarea>
              <textarea  className="form-control" placeholder="Features" name="Features" id="Features"></textarea>
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
      
export default Cfacility