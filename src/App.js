import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setMessage('I love you! I am Sorry!');
  };

  return (
    <div className="App" style={{ color: "white", fontSize: "2rem"}}> Click My Heart
      
      <div className="heart-button-container">
        <button className="heart-button" onClick={handleButtonClick}>
          <span className="heart">&#10084;</span>
        </button>
      </div>
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default App;
