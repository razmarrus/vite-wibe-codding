import { useState, useEffect } from 'react'
import viteLogo from '/haskoning_logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch counter from backend on mount
  useEffect(() => {
    fetch('http://localhost:3001/api/count')
      .then(res => res.json())
      .then(data => {
        setCount(data.count)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to fetch counter from backend')
        setLoading(false)
      })
  }, [])

  // Update backend when count changes (but not on initial load)
  useEffect(() => {
    if (count === null || loading) return
    fetch('http://localhost:3001/api/count', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ count })
    })
      .catch(() => setError('Failed to update counter in backend'))
  }, [count])

  if (loading) return <p>Loading...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <>
      <div>
        <a href="https://haskoning_logo.png" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Welcome to coding with AI!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Discover the power of AI coding—<a href="https://cursor.com/" target="_blank" rel="noopener noreferrer">click here</a> to visit the Cursor homepage!
      </p>
    </>
  )
}

export default App
