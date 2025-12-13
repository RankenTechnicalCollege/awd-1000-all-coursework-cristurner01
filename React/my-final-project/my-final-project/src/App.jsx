import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {nanoid} from 'nanoid'
import AddStudent from './components/AddStudent'
import Student from './components/Student'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash'
import './App.css'

function App() {
  
  const [allStudents, setAllStudents] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [keyWords, setKeyWords] = useState('');
  const [gradYear, setGradYear] = useState('');

  useEffect(() => {
    if(localStorage){
      const studentsLocalStorage = JSON.parse(localStorage.getItem('students'));

      if(studentsLocalStorage){
        saveStudents(studentsLocalStorage);
      }else{
        saveStudents(students);
      }
    }

  }, []);

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent];
    saveStudents(updatedStudents);
  }

  const saveStudents = (students) => {
    setAllStudents(students);
    setSearchResults(students);
    if(localStorage){
      localStorage.setItem('students', JSON.stringify(students));
      console.log("saved to local storage");
    }
  }

  const removeStudent = (studentToDelete) => {
    const updatedStudentArray = allStudents.filter(student => student.id !== studentToDelete.id);
    saveStudents(updatedStudentArray);
  }

  const updateStudent = (updatedStudent) => {
    const updatedStudentArray = allStudents.map(student => student.id === updatedStudent.id ? {...student, ...updatedStudent} : student);
    saveStudents(updatedStudentArray)
  }

  const searchStudents = () => {
    let keyWordsArray = [];

    if(keyWords){
      keyWordsArray = keyWords.toLowerCase().split(' ');
    }

    if(gradYear) {
      keyWordsArray.push(gradYear.toString());
    }

    if(keyWordsArray.length > 0) {
      const searchResults = allStudents.filter(student => {
        for(const word of keyWordsArray){
          if(student.firstName.toLowerCase().includes(word) || 
          student.lastName.toLowerCase().includes(word) || 
          student.gradYear === parseInt(word)) {
            return true;
          }
        }
        return false;
      });
      setSearchResults(searchResults);
    } else {
      setSearchResults(allStudents);
    }
  }
//mockaroo
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
      <div className='row' id='allStudents'>
        <h3>Current Students</h3>
        {searchResults && searchResults.map((student) => 
        (
          <div className='col-lg-2' key={student.id}>
            <Student student={student} removeStudent={removeStudent} updateStudent={updateStudent}/>
          </div>
        ))}
      {/*!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => saveStudents(students)}>Save Students</button>*/}
      <AddStudent addStudent={addStudent}/>
      <div className='row my-4' id='searchStudents'>
        <h3>Search Students</h3>
        <div className='col-md-4'>
          <label htmlFor='txtKeywords'>Search by first name or last name</label>
          <input type='text' className='form-control' placeholder='Enter First Or Last Name' onChange={(e) => setKeyWords(e.currentTarget.value)} value={keyWords}></input>
        </div>
        <div className='col-md-4' >
          <select value={gradYear} onChange={ (e) => setGradYear(e.currentTarget.value)} className='form-select'>
            <option value=''>Select Year</option>
            {_(allStudents).map(student => student.gradYear).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}
          </select>
        </div>
        <div className='col-md-4'>
          <button type='button' className='btn btn-primary btn-lg' onClick={searchStudents}>Search Students<FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
