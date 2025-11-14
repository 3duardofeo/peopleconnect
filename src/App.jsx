import { useState, useEffect, useCallback } from 'react'
import SearchBar from './components/SearchBar'
import PeopleGrid from './components/PeopleGrid'
import MapView from './components/MapView'
import Toast from './components/Toast'
import ThemeToggle from './components/ThemeToggle'
import { peopleData } from './data/peopleData'
import './App.css'

function App() {
  const [people] = useState(peopleData)
  const [filteredPeople, setFilteredPeople] = useState(peopleData)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchType, setSearchType] = useState('all')
  const [likedPeople, setLikedPeople] = useState(() => {
    const saved = localStorage.getItem('likedPeople')
    return saved ? JSON.parse(saved) : []
  })
  const [connectionStatus, setConnectionStatus] = useState(() => {
    const saved = localStorage.getItem('connectionStatus')
    return saved ? JSON.parse(saved) : {}
  })
  const [activeFilter, setActiveFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [toast, setToast] = useState(null)
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'map'

  const filterPeople = useCallback(() => {
    let filtered = people

    // Apply liked filter first
    if (activeFilter === 'liked') {
      filtered = filtered.filter(person => likedPeople.includes(person.id))
    }

    // Apply status filter
    if (statusFilter === 'requested') {
      filtered = filtered.filter(person => connectionStatus[person.id] === 'requested')
    } else if (statusFilter === 'not-requested') {
      filtered = filtered.filter(person => !connectionStatus[person.id] || connectionStatus[person.id] === 'none')
    } else if (statusFilter === 'accepted') {
      filtered = filtered.filter(person => connectionStatus[person.id] === 'accepted')
    }

    // Then apply search filter
    if (searchTerm.trim()) {
      filtered = filtered.filter(person => {
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
    }

    setFilteredPeople(filtered)
  }, [people, activeFilter, likedPeople, statusFilter, connectionStatus, searchTerm, searchType])

  useEffect(() => {
    filterPeople()
  }, [filterPeople])

  useEffect(() => {
    localStorage.setItem('likedPeople', JSON.stringify(likedPeople))
  }, [likedPeople])

  useEffect(() => {
    localStorage.setItem('connectionStatus', JSON.stringify(connectionStatus))
  }, [connectionStatus])

  const handleSearch = (term, type) => {
    setSearchTerm(term)
    setSearchType(type)
  }

  const handleLike = (personId) => {
    setLikedPeople(prev => {
      if (prev.includes(personId)) {
        return prev.filter(id => id !== personId)
      } else {
        return [...prev, personId]
      }
    })
  }

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
  }

  const handleStatusFilterChange = (filter) => {
    setStatusFilter(filter)
  }

  const handleConnect = (personId) => {
    const currentStatus = connectionStatus[personId]
    
    if (currentStatus === 'requested') {
      // Cancel the request
      setConnectionStatus(prev => ({
        ...prev,
        [personId]: 'none'
      }))
      showToast('Request cancelled!')
    } else {
      // Send new request
      setConnectionStatus(prev => ({
        ...prev,
        [personId]: 'requested'
      }))
      showToast('Connection requested!')
    }
  }

  const showToast = (message) => {
    setToast(message)
  }

  const closeToast = () => {
    setToast(null)
  }

  return (
    <div className="app">
      <ThemeToggle />
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
          <SearchBar 
            onSearch={handleSearch} 
            onFilterChange={handleFilterChange}
            onStatusFilterChange={handleStatusFilterChange}
            activeFilter={activeFilter}
            statusFilter={statusFilter}
            likedCount={likedPeople.length}
          />
        </div>
        
        <div className="results-section">
          <div className="results-header">
            <h2>Nearby People ({filteredPeople.length})</h2>
            <div className="view-toggle">
              <button 
                className={`mac-button ${viewMode === 'grid' ? 'primary' : 'secondary'}`}
                onClick={() => setViewMode('grid')}
              >
                📋 Grid
              </button>
              <button 
                className={`mac-button ${viewMode === 'map' ? 'primary' : 'secondary'}`}
                onClick={() => setViewMode('map')}
              >
                🗺️ Map
              </button>
            </div>
          </div>
          {viewMode === 'grid' ? (
            <PeopleGrid 
              people={filteredPeople} 
              likedPeople={likedPeople}
              connectionStatus={connectionStatus}
              onLike={handleLike}
              onConnect={handleConnect}
            />
          ) : (
            <MapView
              people={filteredPeople}
              likedPeople={likedPeople}
              connectionStatus={connectionStatus}
              onLike={handleLike}
              onConnect={handleConnect}
            />
          )}
        </div>
      </main>
      {toast && <Toast message={toast} onClose={closeToast} />}
    </div>
  )
}

export default App
