import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import PersonCard from './PersonCard'
import './MapView.css'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const MapView = ({ people, likedPeople, connectionStatus, onLike, onConnect }) => {
  const [selectedPerson, setSelectedPerson] = useState(null)

  // Create custom icons for avatars
  const createCustomIcon = (person, isLiked) => {
    const avatarUrl = person.avatar
    const initial = person.name.charAt(0).toUpperCase()
    const borderColor = isLiked ? '#ff0000' : '#0000ff'
    
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div class="map-marker-icon ${isLiked ? 'liked' : ''}" style="border-color: ${borderColor};">
          ${avatarUrl ? 
            `<img src="${avatarUrl}" alt="${person.name}" class="marker-avatar-img" />` : 
            `<div class="marker-initial-icon">${initial}</div>`
          }
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    })
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
        <MapContainer 
          center={[20, 0]} 
          zoom={2} 
          style={{ height: '600px', width: '100%' }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {people.map((person) => {
            const coords = person.location.coordinates
            const isLiked = likedPeople.includes(person.id)
            
            return (
              <Marker
                key={person.id}
                position={[coords.lat, coords.lng]}
                icon={createCustomIcon(person, isLiked)}
                eventHandlers={{
                  click: () => handleMarkerClick(person)
                }}
              >
                <Popup>
                  <div style={{ fontWeight: 'bold' }}>{person.name}</div>
                  <div style={{ fontSize: '12px' }}>{person.location.city}, {person.location.country}</div>
                </Popup>
              </Marker>
            )
          })}
        </MapContainer>
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
