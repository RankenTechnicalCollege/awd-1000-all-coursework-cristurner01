import React, {useState} from 'react'
import {nanoid} from 'nanoid'
import './AddBeetle.css'

function AddBeetle(props) {
  const [commonName, setCommonName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [habitat, setHabitat] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [yearCaught, setYearCaught] = useState('');

  const doWork = () => {
    const newBeetle = {
      "id": nanoid(),
      "commonName":commonName,
      "scientificName":scientificName,
      "habitat":habitat,
      "image":URL.createObjectURL(selectedFile),
      "yearCaught":parseInt(yearCaught)
    }
    props.addBeetle(newBeetle);
  }

  const imageUpdate = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  return (
    <>
      <div className='row mt-5' id='addBeetle'>
        <h3>Add Beetle</h3>
        
        <div className='col-md-4'>
          <label htmlFor='txtCommonName' className='form-label'>Common Name: </label>
          <input type='text' id='txtCommonName' placeholder='Common Name' className='form-control' onChange={(e) => setCommonName(e.currentTarget.value)} value={commonName}></input>
        </div>
        <div className='col-md-4'>
          <label htmlFor='txtScientificName' className='form-label'>Scientific Name: </label>
          <input type='text' id='txtScientificName' placeholder='Scientific Name' className='form-control' onChange={(e) => setScientificName(e.currentTarget.value)} value={scientificName}></input>
        </div>
        <div className='col-md-3'>
          <label htmlFor='txtHabitat' className='form-label'>Habitat: </label>
          <input type='text' id='txtHabitat' placeholder='Habitat/s' className='form-control' onChange={(e) => setHabitat(e.currentTarget.value)} value={habitat}></input>
        </div>
        <div >
          <label htmlFor='fileUpload' className='form-label'>Image: </label>
          <input type='file' id='fileUpload' name='file' onChange={imageUpdate}/>
        </div>
        <div >
          <label htmlFor='txtYearCaught' className='form-label'>Year Caught: </label>
          <input type='text' id='txtYearCaught' placeholder='Year Caught' className='form-control' onChange={(e) => setYearCaught(e.currentTarget.value)} value={yearCaught}></input>
        </div>
        <div>
          <button type='button' id='btnAdd' className='btn btn-success btn-lg' onClick={doWork}>Add Beetle</button>
        </div>
      </div>
    </>
  )
}

export default AddBeetle
