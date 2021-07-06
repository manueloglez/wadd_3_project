import React from 'react'
import { Course } from '../../requests'

const CCourse = (props) => {

  const handleSubmit = event => {
    const { currentTarget } = event
    event.preventDefault()

    const formData = new FormData(currentTarget)
    const params = {
      name: formData.get('name'),
      topic: formData.get('topic'),
    }
    Course.create(params).then(res => {
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
              <input type="text" className="form-control" placeholder=" Course Name" name="name" id="name"/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <br></br>
             <label for='topic'>Choose Topic for your Course </label>
              <select  className="form-control"  name="topic" id="topic">
                   <option value="">None</option>
                   <option value="Mathematics">Mathematics</option>
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