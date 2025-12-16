import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {nanoid} from 'nanoid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash'
import './App.css'

function App() {


  const beetles = [
  {
    id: nanoid(),
    commonName: "Black Snail Beetle",
    scientificName: "Phosphuga Atrata",
    habitat: ["grassland", "heathland", "moorland", "woodland"],
    whenToSee: ["all year"], 
    image: "images/blackSnailBeetle.jpg"
  }, {
    id: nanoid(),
    commonName: "Soldier Beetle",
    scientificName: "Cantharis Rustica",
    habitat: ["grassland"],
    whenToSee: ["may", "june", "july", "august"], 
    image: "images/soldierBeetle.jpg"
  }, {
    id: nanoid(),
    commonName: "Whirligig Beetle",
    scientificName: "Gyrinus Substriatus",
    habitat: ["freshwater", "coastal", "wetlands"],
    whenToSee: ["all year"], 
    image: "images/whirligigBeetle.jpg"
  }, {
    id: nanoid(),
    commonName: "Harlequin Ladybird Beetle",
    scientificName: "Harmonia Axyridis",
    habitat: ["grassland", "freshwater", "farmland", "wetlands", "woodland", "towns and gardens"],
    whenToSee: ["march", "april", "may", "june", "july", "august", "september", "october", "november"], 
    image: "images/herlequinLadybird.jpg"
  }, {
    id: nanoid(),
    commonName: "Minotaur Beetle",
    scientificName: "Typhaeus Typhoeus",
    habitat: ["grassland", "heathland", "moorland", "farmland", "coastal"],
    whenToSee: ["september", "october", "november", "december", "january", "february", "march", "april", "may", "june", "july"], 
    image: "images/minotaurBeetle.jpg"
  }
  ]

  return (
    <div className='container'>
        <div className='row' id='allBeetles'>
          <h3>Current Beetles</h3>
          
          <div className='row my-4' id='searchBeetles'>
            <h3>Search Beetles</h3>
            <div className='col-md-4'>
              <label htmlFor='txtKeyWords'>Search by common name or scientific name</label>
              <input type='text' className='form-control' placeholder='Enter common or scientific name'></input>
            </div>
            <div className='col-md-4'>
              <select>
                <option></option>
              </select>
            </div>
            <div className='col-md-4'>
              <button>Search Beetles</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
