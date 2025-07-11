import { useState, useEffect } from 'react'
import viteLogo from '/haskoning_logo.png'
import './App.css'

// Custom hook for localStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function App() {
  // Use localStorage for contacts
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [count, setCount] = useState(0);

  const addContact = () => {
    if (name && email) {
      setContacts([...contacts, { name, email }]);
      setName('');
      setEmail('');
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
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
      {/* Contacts UI */}
      <div style={{ marginTop: '2rem', textAlign: 'left' }}>
        <h2>Contacts</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button onClick={addContact}>Add Contact</button>
        <ul>
          {contacts.map((c, i) => (
            <li key={i}>{c.name} - {c.email}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
