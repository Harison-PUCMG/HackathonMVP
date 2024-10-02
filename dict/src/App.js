import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import youtubeLinks from './Data/youtubeSaude.json'
import exatas from './Data/exatas.json'
import DivColapsavel from './components/DivColapsavel'

function App() {
  const [insertedTxt, setInsertedTxt] = useState("");

  return (
    <div className="p-4"> {/* Adicionado padding geral */}
      <h1 className="text-2xl font-bold mb-4">Glossário de Libras</h1>
      
      <div className="grid grid-cols-3 gap-4"> {/* Substituído .container por classes do Tailwind */}
        <div className='bg-gray-100 p-4 rounded'> {/* Substituído .box por classes do Tailwind */}
          <span className="font-semibold">Dicionários públicos</span>
          <div className='mt-2'>
            <DivColapsavel title="Ciências Exatas">
              {exatas.map((e, index) => (
                <div key={index} className='grid grid-cols-2 gap-2 w-full md:w-1/3 mb-2'> {/* Adaptado .container-small */}
                  <div className='bg-white p-2 rounded'>{e.termo}</div>
                  <div className='bg-white p-2 rounded'>
                    <a href={e.url} target='_blank' rel="noopener noreferrer" className="text-blue-500 hover:underline">{e.url}</a>
                  </div>
                </div>
              ))}
            </DivColapsavel>

            <DivColapsavel title="Saúde">
              {/* Conteúdo similar ao das Ciências Exatas, adapte conforme necessário */}
              {youtubeLinks.map((e, index) => (
                <div key={index} className='grid grid-cols-2 gap-2 w-full md:w-1/3 mb-2'> {/* Adaptado .container-small */}
                  <div className='bg-white p-2 rounded'>{e.termo}</div>
                  <div className='bg-white p-2 rounded'>
                    <a href={e.url} target='_blank' rel="noopener noreferrer" className="text-blue-500 hover:underline">{e.url}</a>
                  </div>
                </div>
              ))}
            </DivColapsavel>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <label className="block mb-2">Palavra</label>
          <input
            type='text'
            value={insertedTxt}
            onChange={e => setInsertedTxt(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <FontAwesomeIcon icon={faMicrophone} className="mt-2" />
        </div>
        <div className='bg-gray-100 p-4 rounded'>
          {insertedTxt}
        </div>
      </div>
    </div>
  );
}

export default App;