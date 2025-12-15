import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faMagicWandSparkles, faWarning } from '@fortawesome/free-solid-svg-icons';
import "./Student.css"

function Student(props) {
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gradYear, setGradYear] = useState('');

  useEffect(() => {
    setFirstName(props.student.firstName);
    setLastName(props.student.lastName);
    setEmail(props.student.email);
    setGradYear(props.student.gradYear);
  }, []);

  const saveStudent = () => {
    setEditMode(false);
    const updatedStudent = {firstName:firstName, lastName:lastName, email:email, gradYear:parseInt(gradYear), id:props.student.id, image:props.student.image}
    props.updateStudent(updatedStudent);
  }

  return (
    <div>
      <div className='card'>
        <img src={props.student.image} alt='missing image' className='card-image-top mx-auto'/>
        {!editMode &&
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>{props.student.firstName}</li>
          <li className='list-group-item'>{props.student.lastName}</li>
          <li className='list-group-item'>{props.student.email}</li>
          <li className='list-group-item'>{props.student.gradYear}</li>
          <button type='button' className='btn btn-sm btn-danger' onClick={() => props.removeStudent(props.student)}>Delete Student &nbsp;<FontAwesomeIcon icon= {faWarning}></FontAwesomeIcon></button>
          <button type='button' className='btn btn-sm btn-warning' onClick={() => setEditMode(true)}>Edit Student <FontAwesomeIcon icon={faMagicWandSparkles}></FontAwesomeIcon></button>
        </ul>
        }
        {editMode && <ul className='list-group list-group-flush'>
          <li className='list-group-item text-center'><input type='text' className='form-control' value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} /></li>
          <li className='list-group-item text-center'><input type='text' className='form-control' value={lastName} onChange={(e) => setLastName(e.currentTarget.value)} /></li>
          <li className='list-group-item text-center'><input type='text' className='form-control' value={email} onChange={(e) => setEmail(e.currentTarget.value)} /></li>
          <li className='list-group-item text-center'><input type='text' className='form-control' value={gradYear} onChange={(e) => setGradYear(parseInt(e.currentTarget.value))} /></li>
          <li className='list-group-item text-center'><button type='button' className='btn btn-secondary' onClick={saveStudent}>Save<FontAwesomeIcon icon={faFloppyDisk}></FontAwesomeIcon></button></li>
          </ul>}
      </div>
    </div>
  )
}

export default Student
