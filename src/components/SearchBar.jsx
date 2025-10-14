import React, { useState } from 'react'
import { Search, MapPin, Globe, Hash } from 'lucide-react'
import './SearchBar.css'

const SearchBar = ({ onSearch, onFilterChange, activeFilter, likedCount }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchType, setSearchType] = useState('all')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm, searchType)
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value, searchType)
  }

  const handleTypeChange = (e) => {
    const type = e.target.value
    setSearchType(type)
    onSearch(searchTerm, type)
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-group">
          <div className="search-type-selector">
            <select 
              value={searchType} 
              onChange={handleTypeChange}
              className="mac-select"
            >
              <option value="all">All</option>
              <option value="name">Name</option>
              <option value="city">City</option>
              <option value="country">Country</option>
              <option value="zip">Zip Code</option>
            </select>
          </div>
          
          <div className="search-input-wrapper">
            <div className="search-icon">
              {searchType === 'zip' ? <Hash size={16} /> : 
               searchType === 'city' || searchType === 'country' ? <MapPin size={16} /> :
               <Search size={16} />}
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder={
                searchType === 'zip' ? 'Enter zip code...' :
                searchType === 'city' ? 'Enter city name...' :
                searchType === 'country' ? 'Enter country name...' :
                searchType === 'name' ? 'Enter person name...' :
                'Search by name, location, interests, languages, or description...'
              }
              className="mac-input"
            />
          </div>
          
          <button type="submit" className="mac-button primary">
            Search
          </button>
        </div>
      </form>
      
      <div className="search-filters">
        <div className="filter-tags">
          <span 
            className={`filter-tag ${activeFilter === 'liked' ? 'active' : ''}`}
            onClick={() => onFilterChange(activeFilter === 'liked' ? 'all' : 'liked')}
          >
            ❤️ Liked {likedCount > 0 && `(${likedCount})`}
          </span>
          <span className="filter-tag">Nearby</span>
          <span className="filter-tag">Cultural Exchange</span>
          <span className="filter-tag">Language Learning</span>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
