import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {nanoid} from 'nanoid'
import AddStudent from './components/AddStudent'
import './App.css'

function App() {
  
  const [allStudents, setAllStudents] = useState(null);

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent];
    setAllStudents(updatedStudents);
  }

  const students = [{
    id: nanoid(),
    firstName: "Alethea",
    lastName: "Yell",
    email: "ayell0@aol.com",
    image: "images/student1.jpg",
    gradYear: 2023
  }, {
    id: nanoid(),
    firstName: "Charmane",
    lastName: "Jirsa",
    email: "cjirsa1@theguardian.com",
    image: "images/student2.jpg",
    gradYear: 2022
  }, {
    id: nanoid(),
    firstName: "Dorrie",
    lastName: "Izakof",
    email: "dizakof2@altervista.org",
    image: "images/student3.jpg",
    gradYear: 2023
  }, {
    id: nanoid(),
    firstName: "Lucita",
    lastName: "Pirie",
    email: "lpirie3@privacy.gov.au",
    image: "images/student4.jpg",
    gradYear: 2025
  }, {
    id: nanoid(),
    firstName: "Esteban",
    lastName: "Blundell",
    email: "eblundell4@people.com.cn",
    image: "images/student5.jpg",
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Madlen",
    lastName: "McKenna",
    email: "mmckenna5@ft.com",
    image: "images/student6.jpg",
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Cindi",
    lastName: "Mablestone",
    email: "cmablestone6@github.io",
    image: "images/student7.jpg",
    gradYear: 2022
  }, {
    id: nanoid(),
    firstName: "Letitia",
    lastName: "Lloyd",
    email: "llloyd7@flavors.me",
    image: "images/student8.jpg",
    gradYear: 2023
  }, {
    id: nanoid(),
    firstName: "Marla",
    lastName: "Lidgley",
    email: "mlidgley8@dion.ne.jp",
    image: "images/student9.jpg",
    gradYear: 2022
  }, {
    id: nanoid(),
    firstName: "Griz",
    lastName: "Fumagallo",
    email: "gfumagallo9@acquirethisname.com",
    image: "images/student10.jpg",
    gradYear: 2025
  }]

  return (
    <div className='container'>
      <div className='row'>
        {allStudents && allStudents.map((student) => (
          <div className='col-lg-2' key={student.id}>
          <div className='card'>
            <img src={student.image} alt='missing image' />
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>{student.firstName}</li>
              <li className='list-group-item'>{student.lastName}</li>
              <li className='list-group-item'>{student.email}</li>
              <li className='list-group-item'>{student.gradYear}</li>
            </ul>
          </div>
        </div>
        ))}
      {!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllStudents(students)}>Save Students</button>}
      <AddStudent addStudent={addStudent}/>
      </div>
    </div>
  )
}

export default App
