import React from 'react'
import { MapPin, Globe, MessageCircle, Heart } from 'lucide-react'
import './PersonCard.css'

const PersonCard = ({ person, isLiked, onLike }) => {
  const getDistanceColor = (distance) => {
    if (distance < 5) return '#00ff00' // Green for very close
    if (distance < 15) return '#ffff00' // Yellow for close
    if (distance < 50) return '#ff8000' // Orange for moderate
    return '#ff0000' // Red for far
  }

  const getDistanceText = (distance) => {
    if (distance < 1) return 'Very close'
    if (distance < 5) return `${distance.toFixed(1)} miles`
    if (distance < 15) return `${distance.toFixed(0)} miles`
    return `${distance.toFixed(0)} miles`
  }

  const handleLikeClick = () => {
    onLike(person.id)
  }

  return (
    <div className="person-card">
      <div className="card-header">
        <div className="person-avatar">
          {person.avatar ? (
            <img 
              src={person.avatar} 
              alt={`${person.name}'s avatar`}
              className="avatar-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div className="avatar-circle" style={{ display: person.avatar ? 'none' : 'flex' }}>
            {person.name.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="person-info">
          <h3 className="person-name">{person.name}</h3>
          <p className="person-age">{person.age} years old</p>
        </div>
        <div className="distance-badge" style={{ backgroundColor: getDistanceColor(person.distance) }}>
          {getDistanceText(person.distance)}
        </div>
      </div>

      <div className="card-content">
        <div className="location-info">
          <div className="location-item">
            <MapPin size={14} />
            <span>{person.location.city}, {person.location.country}</span>
          </div>
          <div className="location-item">
            <Globe size={14} />
            <span>{person.location.zipCode}</span>
          </div>
        </div>

        <div className="culture-info">
          <div className="culture-tag">
            {person.culture}
          </div>
          <div className="languages">
            {person.languages.map((lang, index) => (
              <span key={index} className="language-tag">
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="interests">
          <h4>Interests:</h4>
          <div className="interests-list">
            {person.interests.map((interest, index) => (
              <span key={index} className="interest-tag">
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="bio">
          <p>{person.bio}</p>
        </div>
      </div>

      <div className="card-footer">
        <button className="mac-button secondary">
          <MessageCircle size={14} />
          Connect
        </button>
        <button 
          className={`mac-button ${isLiked ? 'liked' : 'secondary'}`}
          onClick={handleLikeClick}
        >
          <Heart size={14} fill={isLiked ? 'currentColor' : 'none'} />
          {isLiked ? 'Unlike' : 'Like'}
        </button>
      </div>
    </div>
  )
}

export default PersonCard
