import React, {useState} from 'react'
import {nanoid} from 'nanoid'

function AddStudent(props) {
  //id, first name, last name, email, photo
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [gradYear, setGradYear] = useState();

  const doWork = () => {
    const newStudent = {
      "id":nanoid(), 
      "firstName":firstName, 
      "lastName":lastName, 
      "email":email, 
      "image":URL.createObjectURL(selectedFile),
      "gradYear":gradYear
    }
    props.addStudent(newStudent)
  }

  const imageUpdate = (e) => {
    setSelectedFile(e.target.files[0])
  }

  return (
    <>
    <div className='row'>
      <div className='col-md-2'>
        <label htmlFor='txtFirstName' className='form-label'>First Name: </label>
        <input type='text' id='txtFirstName' placeholder='First Name' className='form-control' onChange={(e) => setFirstName(e.currentTarget.value)} value={firstName}></input>
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtLastName' className='form-label'>Last Name: </label>
        <input type='text' id='txtLastName' placeholder='Last Name' className='form-control' onChange={(e) => setLastName(e.currentTarget.value)} value={lastName}></input>
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtEmail' className='form-label'>Email Address: </label>
        <input type='email' id='txtEmail' placeholder='Email Address' className='form-control' onChange={(e) => setEmail(e.currentTarget.value)} value={email}></input>
      </div>
      <div className='col-md-2'>
        <label htmlFor='fileUpload' className='form-label'>Student Image:</label>
        <input type='file' name='file' id='fileUpload' onChange={imageUpdate}/>
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtGradYear' className='form-label'>Graduation Year: </label>
        <input type='text' id='txtGradYear' placeholder='Graduation Year' className='form-control' onChange={(e) => setGradYear(e.currentTarget.value)} value={gradYear}></input>
      </div>
      <div className='col-md-2'>
        <button type='button' id='btnAdd' className='btn btn-success btn-lg' onClick={doWork}>Add Student</button>
      </div>

    </div>
    </>
  )
}

export default AddStudent
