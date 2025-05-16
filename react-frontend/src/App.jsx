import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/welcome') // Can be set up later
      .then(res => res.json())
      .then(data => setApiMessage(data.message))
      .catch(() => {
        // Do nothing if endpoint is inactive
      });
  }, []);

  return (
    <div className="app-container">
      <div className="welcome-box">
        <h1>Hello, I am <span className="highlight">Suraj</span></h1>
        <p className="subtitle">Welcome to the project to learn 🚀</p>
        <p className="small-info">Built using React + Vite + SWC</p>
        {apiMessage && <p className="api-msg">{apiMessage}</p>}
        <div className="footer">Let’s build something amazing!</div>
      </div>
    </div>
  );
}

export default App;
