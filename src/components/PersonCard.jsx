import React from 'react'
import { MapPin, Globe, MessageCircle, Heart } from 'lucide-react'
import './PersonCard.css'

const PersonCard = ({ person, isLiked, connectionStatus, onLike, onConnect }) => {
  const getDistanceColor = (distance) => {
    if (distance < 100) return '#00aa00' // Dark green for very close (good contrast)
    if (distance < 1500) return '#ff9800' // Orange for North America (good contrast)
    if (distance < 5000) return '#f57c00' // Dark orange for nearby international (good contrast)
    return '#d32f2f' // Dark red for far international (good contrast)
  }

  const getDistanceText = (distance) => {
    if (distance === 0) return 'Local'
    if (distance < 100) return `${distance} mi`
    if (distance < 1000) return `${distance} mi`
    return `${distance.toLocaleString()} mi`
  }

  const handleLikeClick = () => {
    onLike(person.id)
    playLikeSound(isLiked)
  }

  const playLikeSound = (wasLiked) => {
    // Create a simple sound effect using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    if (wasLiked) {
      // Unlike sound - descending tones (ICQ-style "uh-oh")
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1)
      oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.2)
    } else {
      // Like sound - ascending tones (ICQ-style "uh-oh" reversed)
      oscillator.frequency.setValueAtTime(400, audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1)
      oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.2)
    }
    
    oscillator.type = 'sine'
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.3)
  }

  const handleConnectClick = () => {
    if (connectionStatus !== 'accepted') {
      onConnect(person.id)
    }
  }

  const getConnectButtonText = () => {
    switch (connectionStatus) {
      case 'requested':
        return 'Cancel Request'
      case 'accepted':
        return 'Accepted'
      default:
        return 'Connect'
    }
  }

  const getConnectButtonClass = () => {
    switch (connectionStatus) {
      case 'requested':
        return 'requested'
      case 'accepted':
        return 'accepted'
      default:
        return 'secondary'
    }
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
        <button 
          className={`mac-button ${getConnectButtonClass()}`}
          onClick={handleConnectClick}
          disabled={connectionStatus === 'accepted'}
        >
          <MessageCircle size={14} />
          {getConnectButtonText()}
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
