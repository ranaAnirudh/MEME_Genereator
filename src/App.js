import './App.css';
import Template from './components/Fetch';
import Meme from './components/Meme';
import { useState} from 'react'
import Share from './components/Share';
function App() {
  const [meme,setMeme]=useState(null)
  const [url,setUrl]=useState(null)
  return (
    <div className="app">
      <h1>MEME GENERATOR</h1>
      {meme?<Share url={url}/>:null}
      { !meme
        ?<Template setMeme={setMeme}/>
        :<Meme setMeme={setMeme} meme={meme} setUrl={setUrl}/>
      }
    </div>
  );
}

export default App;
