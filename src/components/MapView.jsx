import React, { useState } from 'react'
import PersonCard from './PersonCard'
import './MapView.css'

const MapView = ({ people, likedPeople, connectionStatus, onLike, onConnect }) => {
  const [selectedPerson, setSelectedPerson] = useState(null)

  // Approximate positioning based on geographic location (simplified)
  const getPosition = (person) => {
    const city = person.location.city.toLowerCase()
    
    // Simplified positioning (percentage from left, percentage from top)
    const positions = {
      'tokyo': { left: '85%', top: '38%' },
      'mexico city': { left: '15%', top: '45%' },
      'cairo': { left: '52%', top: '40%' },
      'mumbai': { left: '70%', top: '45%' },
      'copenhagen': { left: '48%', top: '25%' },
      'lagos': { left: '48%', top: '50%' },
      'beijing': { left: '80%', top: '35%' },
      'são paulo': { left: '28%', top: '70%' },
      'palermo': { left: '50%', top: '36%' },
      'paris': { left: '47%', top: '30%' },
      'accra': { left: '46%', top: '50%' },
      'moscow': { left: '56%', top: '25%' },
      'torino': { left: '49%', top: '32%' },
      'seoul': { left: '82%', top: '36%' },
      'marrakech': { left: '45%', top: '40%' },
      'miami': { left: '18%', top: '44%' },
      'chicago': { left: '14%', top: '33%' },
      'toronto': { left: '17%', top: '30%' },
      'berlin': { left: '50%', top: '27%' },
      'albuquerque': { left: '10%', top: '37%' }
    }
    
    return positions[city] || { left: '50%', top: '50%' }
  }

  const handleMarkerClick = (person) => {
    setSelectedPerson(person)
  }

  const closeCard = () => {
    setSelectedPerson(null)
  }

  return (
    <div className="map-view">
      <div className="map-container">
        <div className="world-map">
          {/* Simple world map background */}
          <div className="map-background"></div>
          
          {/* Avatar markers */}
          {people.map((person) => {
            const position = getPosition(person)
            const isLiked = likedPeople.includes(person.id)
            
            return (
              <div
                key={person.id}
                className={`map-marker ${isLiked ? 'liked' : ''}`}
                style={{ left: position.left, top: position.top }}
                onClick={() => handleMarkerClick(person)}
                title={`${person.name} - ${person.location.city}`}
              >
                {person.avatar ? (
                  <img 
                    src={person.avatar} 
                    alt={person.name}
                    className="marker-avatar"
                  />
                ) : (
                  <div className="marker-initial">
                    {person.name.charAt(0)}
                  </div>
                )}
                <div className="marker-pulse"></div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Popup card when marker is clicked */}
      {selectedPerson && (
        <div className="map-card-overlay" onClick={closeCard}>
          <div className="map-card-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeCard}>✕</button>
            <PersonCard
              person={selectedPerson}
              isLiked={likedPeople.includes(selectedPerson.id)}
              connectionStatus={connectionStatus[selectedPerson.id] || 'none'}
              onLike={onLike}
              onConnect={onConnect}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default MapView

