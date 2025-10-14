import React from 'react'
import { useTheme } from '../context/ThemeContext'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="theme-toggle-container">
      <button 
        className={`theme-toggle ${theme}`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <div className="toggle-track">
          <div className="toggle-thumb">
            <span className="toggle-icon">
              {theme === 'vintage' ? '💾' : '✨'}
            </span>
          </div>
        </div>
        <span className="toggle-label">
          {theme === 'vintage' ? 'Vintage' : 'Modern'}
        </span>
      </button>
    </div>
  )
}

export default ThemeToggle

