import PersonCard from './PersonCard'
import './PeopleGrid.css'

const PeopleGrid = ({ people, likedPeople, connectionStatus, onLike, onConnect }) => {
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
        <PersonCard 
          key={person.id} 
          person={person}
          isLiked={likedPeople.includes(person.id)}
          connectionStatus={connectionStatus[person.id] || 'none'}
          onLike={onLike}
          onConnect={onConnect}
        />
      ))}
    </div>
  )
}

export default PeopleGrid
