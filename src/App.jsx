import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import PeopleGrid from './components/PeopleGrid'
import { peopleData } from './data/peopleData'
import './App.css'

function App() {
  const [people, setPeople] = useState(peopleData)
  const [filteredPeople, setFilteredPeople] = useState(peopleData)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchType, setSearchType] = useState('all')

  useEffect(() => {
    filterPeople()
  }, [searchTerm, searchType, people])

  const filterPeople = () => {
    if (!searchTerm.trim()) {
      setFilteredPeople(people)
      return
    }

    const filtered = people.filter(person => {
      const term = searchTerm.toLowerCase()
      
      switch (searchType) {
        case 'zip':
          return person.location.zipCode.toLowerCase().includes(term)
        case 'city':
          return person.location.city.toLowerCase().includes(term)
        case 'country':
          return person.location.country.toLowerCase().includes(term)
        case 'name':
          return person.name.toLowerCase().includes(term)
        default:
          return (
            person.name.toLowerCase().includes(term) ||
            person.location.city.toLowerCase().includes(term) ||
            person.location.country.toLowerCase().includes(term) ||
            person.location.zipCode.toLowerCase().includes(term) ||
            person.culture.toLowerCase().includes(term) ||
            person.bio.toLowerCase().includes(term) ||
            person.interests.some(interest => interest.toLowerCase().includes(term)) ||
            person.languages.some(language => language.toLowerCase().includes(term))
          )
      }
    })

    setFilteredPeople(filtered)
  }

  const handleSearch = (term, type) => {
    setSearchTerm(term)
    setSearchType(type)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="title-bar">
          <div className="title-bar-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
          <div className="title-bar-text">People Connect</div>
        </div>
        <div className="menu-bar">
          <div className="menu-item">File</div>
          <div className="menu-item">Edit</div>
          <div className="menu-item">View</div>
          <div className="menu-item">Help</div>
        </div>
      </header>
      
      <main className="app-content">
        <div className="search-section">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        <div className="results-section">
          <div className="results-header">
            <h2>Nearby People ({filteredPeople.length})</h2>
          </div>
          <PeopleGrid people={filteredPeople} />
        </div>
      </main>
    </div>
  )
}

export default App
