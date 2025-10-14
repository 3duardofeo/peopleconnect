import React from 'react'
import { useTheme } from '../context/ThemeContext'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  console.log('ThemeToggle rendering, current theme:', theme)

  return (
    <div className="theme-toggle-container" style={{ 
      position: 'fixed', 
      top: '20px', 
      right: '20px', 
      zIndex: 99999,
      background: 'red',
      padding: '4px'
    }}>
      <button 
        className={`theme-toggle ${theme}`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
        style={{
          background: '#c0c0c0',
          border: '2px solid #000',
          padding: '10px 15px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold'
        }}
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

