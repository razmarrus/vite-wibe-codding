import { useState } from 'react'
import viteLogo from '/haskoning_logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
