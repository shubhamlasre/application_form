import React, { useState } from 'react'
import './ApplicationForm.css'

export const ApplicationForm = () => {

  const[values, setValues] = useState
  ({
      firstname: '',
      lastname: '',
      email: '',
      gender: '',
      contact: '',
      subject: '',
      resume: '',
      url: '',
      about: ''
  })

  const handleChanges = (e) => 
  {
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) =>
  {
    e.preventDefault()
    console.log(values)
  }

  const ResetFunction = () =>
  {
    setValues({firstname: '', lastname: '', email: '', contact: '', url: '', about: ''})
  }

  return (
    <div className = 'container'>
        <h1>Application Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name*</label>
            <input type = "text" placeholder="Enter First Name" name="firstname"
            onChange={(e) => handleChanges(e)} required value={values.firstname}/>

            <label htmlFor="lastname">Last Name*</label>
            <input type = "text" placeholder="Enter Last Name" name="lastname"
            onChange={(e) => handleChanges(e)} required value={values.lastname}/>

            <label htmlFor="email">Email*</label>
            <input type = "email" placeholder="Enter Email" name="email"
            onChange={(e) => handleChanges(e)} required value={values.email}/>

            <label htmlFor="contact">Contact</label>
            <input type = "text" placeholder="Enter Phone #" name="contact"
            onChange={(e) => handleChanges(e)} required value ={values.contact}/>

            <label htmlFor="gender">Gender</label>
            <input type = "radio" name="gender"
            onChange={(e) => handleChanges(e)}/> Male
            <input type = "radio" name="gender"
          onChange={(e) => handleChanges(e)}/> Female
            <input type = "radio" name="gender"
            onChange={(e) => handleChanges(e)}/> Other

            <label htmlFor="technology">Technology</label>
            <select name="technology" id="technology" 
            onChange={(e) => handleChanges(e)}>
                <option value="select">Select</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="c++">C++</option>
            </select>

            <label htmlFor="resume">Resume</label>
            <input type="file" placeholder="Select Resume" name="resume"
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="url">Linked URL</label>
            <input type="text" placeholder="Enter Image Url" name="url"
            onChange={(e) => handleChanges(e)} value={values.url}/>

            <label htmlFor="about">Roles and Responsibilities</label>
            <textarea id="about" cols="30" rows="10" placeholder="Enter roles and resposibilities" name="about"
            onChange={(e) => handleChanges(e)} value={values.about}></textarea>

            <button type="button" onClick={ResetFunction}>Reset</button>
            <button type="submit">Submit</button>

        </form>
    </div>
  )
}
