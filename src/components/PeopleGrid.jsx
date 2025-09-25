import React from 'react'
import PersonCard from './PersonCard'
import './PeopleGrid.css'

const PeopleGrid = ({ people }) => {
  if (people.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">👥</div>
        <h3>No people found</h3>
        <p>Try adjusting your search criteria</p>
      </div>
    )
  }

  return (
    <div className="people-grid">
      {people.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  )
}

export default PeopleGrid
