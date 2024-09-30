import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [insertedTxt, setInsertedTxt] = useState("");

  return (
    <>
      <div className="container">
        <div className="box">
          <label>Palavra</label>
          <input
            type='text'
            value={insertedTxt}
            onChange={e => setInsertedTxt(e.target.value)}
          >
          </input>
          <FontAwesomeIcon icon={faMicrophone} />

        </div>
        <div className='box'>
          {insertedTxt}
        </div>
      </div>
    </>
  );
}

export default App;
