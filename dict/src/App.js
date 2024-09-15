import { useState } from 'react';
import './App.css';
import Botão from './components/botão';

function App() {
  const list = ["Palavra: "];
  const [insertedTxt, setInsertedTxt] = useState("");

  function print(msg) {
    console.log(msg);
  }

  return (
    <>
      <div className="container">
        {
          list.map((item, index) => {
            return (
              <>
                <div className="box">
                  <label>{item}</label>
                  <input
                    type='text'
                    value={insertedTxt}
                    onChange={e => setInsertedTxt(e.target.value)}
                  >
                  </input>
                  <Botão title={"Enviar"}
                    classNameBtn={index % 2 === 0 ? "blue" : "green"}
                    callbackfn={e => print(e.target.value)}>
                  </Botão>
                </div>
                <div className='box'>
                  {insertedTxt}
                </div>
              </>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
