import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {nanoid} from 'nanoid'
import AddBeetle from './components/AddBeetle';
import Beetle from './components/Beetle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash'
import './App.css'

function App() {
  const [allBeetles, setAllBeetles] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [keyWords, setKeyWords] = useState('');
  const [yearCaught, setYearCaught] = useState('');

  useEffect(() => {
    if(localStorage) {
      const beetlesLocalStorage = JSON.parse(localStorage.getItem('students'));

      if(beetlesLocalStorage){
        saveBeetles(beetlesLocalStorage);
      } else {
        saveBeetles(beetles);
      }
    }
  }, []);

  const addBeetle = (newBeetle) => {
    const updatedBeetles = [...allBeetles, newBeetle];
    saveBeetles(updatedBeetles);
  }

  const saveBeetles = (beetles) => {
    setAllBeetles(beetles);
    setSearchResults(beetles);
    if(localStorage){
      localStorage.setItem('beetles', JSON.stringify(beetles));
      console.log("saved to local storage");
    }
  }

  const removeBeetle = (beetleToDelete) => {
    const updatedBeetleArray = allBeetles.filter(beetle => beetle.id !== beetleToDelete.id);
    saveBeetles(updatedBeetleArray);
  }

  const updateBeetle = (updatedBeetle) => {
    const updatedBeetleArray = allBeetles.map(beetle => beetle.id === updatedBeetle.id ? {...beetle, ...updatedBeetle,} : beetle);
    saveBeetles(updatedBeetleArray)
  }

  const searchBeetles = () => {
    let keyWordsArray = [];

    if(keyWords){
      keyWordsArray = keyWords.toLowerCase().split('');
    }

    if(yearCaught){
      keyWordsArray.push(yearCaught.toString());
    }

    if(keyWordsArray.length > 0){
      const searchResults = allBeetles.filter(beetle => {
        for(const word of keyWordsArray){
          if(beetle.commonName.toLowerCase().includes(word) ||
          beetle.scientificName.toLowerCase().includes(word) ||
          beetle.yearCaught === parseInt(word)) {
            return true;
          }
        }
        return false;
      });
      setSearchResults(searchResults);
    } else {
      setSearchResults(allBeetles);
    }
  }


  const beetles = [{
    id: nanoid(),
    commonName: "Black Snail Beetle",
    scientificName: "Phosphuga Atrata",
    habitat: ["grassland", "heathland", "moorland", "woodland"],
    yearCaught: 2007, 
    image: "images/blackSnailBeetle.jpg"
  }, {
    id: nanoid(),
    commonName: "Soldier Beetle",
    scientificName: "Cantharis Rustica",
    habitat: ["grassland"],
    yearCaught: 2010, 
    image: "images/soldierBeetle.jpg"
  }, {
    id: nanoid(),
    commonName: "Whirligig Beetle",
    scientificName: "Gyrinus Substriatus",
    habitat: ["freshwater", "coastal", "wetlands"],
    yearCaught: 2009, 
    image: "images/whirligigBeetle.jpg"
  }, {
    id: nanoid(),
    commonName: "Harlequin Ladybird Beetle",
    scientificName: "Harmonia Axyridis",
    habitat: ["grassland", "freshwater", "farmland", "wetlands", "woodland", "towns and gardens"],
    yearCaught: 2014, 
    image: "images/harlequinLadybird.jpg"
  }, {
    id: nanoid(),
    commonName: "Minotaur Beetle",
    scientificName: "Typhaeus Typhoeus",
    habitat: ["grassland", "heathland", "moorland", "farmland", "coastal"],
    yearCaught: 2007,
    image: "images/minotaurBeetle.jpg"
  }
  ]

  return (
    <div className='container'>
        <div className='row' id='allBeetles'>
          <h3>Current Beetles</h3>
          {searchResults && searchResults.map((beetle) =>
          (
            <div className='col-lg-2' key={beetle.id}>
              <Beetle beetle={beetle} removeBeetle={removeBeetle} updateBeetle={updateBeetle}/>
            </div>
          ))}
          <AddBeetle addBeetle={addBeetle}/>
          <div className='row my-4' id='searchBeetles'>
            <h3>Search Beetles</h3>
            <div className='col-md-4'>
              <label htmlFor='txtKeyWords'>Search by common name or scientific name</label>
              <input type='text' className='form-control' placeholder='Enter common or scientific name' onChange={(e) => setKeyWords(e.currentTarget.value)} value={keyWords}></input>
            </div>
            <div className='col-md-4'>
              <select value={yearCaught} onChange={(e) => setYearCaught(e.currentTarget.value)} className='form-select'>
                <option value=''>Select Year</option>
                {_(allBeetles).map(beetle => beetle.yearCaught).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}
              </select>
            </div>
            <div className='col-md-4'>
              <button type='button' className='btn btn-primary btn-lg' onClick={searchBeetles}>Search Beetles<FontAwesomeIcon icon={faSearch} /></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
