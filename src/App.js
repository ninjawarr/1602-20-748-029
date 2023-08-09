/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


/*import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [urls, setUrls] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8008/numbers?${urls}`);
      setResult(response.data.numbers.join(', '));
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult('Error fetching data from server.');
    }
  };

  return (
    <div className="App">
      <h1 style={{ color: 'tomato'}}>NUMBER MANAGEMENT APP</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter URLs (separated by "&url="):
          <input
            type="text"
            value={urls}
            onChange={(e) => setUrls(e.target.value)}
          />
        </label>
        <button type="SUBMIT" style={{ color: 'green' }}>Submit</button>
      </form>
      {result && (
        <div>
          <h2>Merged Unique Integers:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};
export default App;*/
import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [urls, setUrls] = useState('');
  const [result, setResult] = useState('');
  const [buttonColor, setButtonColor] = useState('green'); // Initial button color

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8008/numbers?${urls}`);
      setResult(response.data.numbers.join(', '));
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult('Error fetching data from server.');
    }
  };

  const handleButtonClick = () => {
    handleSubmit();
    setButtonColor('blue'); // Change button color when clicked
  };

  return (
    <div className="App">
      <h1 style={{ color: 'tomato' }}>NUMBER MANAGEMENT APP</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ENTER URLs( "&url="):
          <input
            type="text"
            value={urls}
            onChange={(e) => setUrls(e.target.value)}
          />
        </label>
        <button type="submit" style={{ backgroundColor: buttonColor }}>Submit</button>
      </form>
      {result && (
        <div>
          <h2>Merged Unique Integers:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default App;


   



