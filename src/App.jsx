
import './index.css';
import { useState } from 'react';
import axios from 'axios';
import Loader from './img/loading.gif'


function App() {
  const [quote, setQuote] = useState('Life is shit');
  const [author, setAuthor] = useState('Bella Johns');
  const [isLoading, setLoading] = useState(false);
  
  async function getPhrazes(){
    setLoading(true)
    try {
      const res = await axios.get(`https://api.quotable.io/random`)
      console.log(res.data)
      setQuote(res.data.content)
      setAuthor(res.data.author)
      setLoading(false)
      
    } catch (error) {
      alert('Wrong request')
      setLoading(false)
    }
  }
  return (
    <div className="App">
       
      <div className='app-wrapper'>
      {
        isLoading === true ? (
          <img className='loading-gif' src={Loader} alt='loading' />
        ) : (
          <div className='visible'>
            <h1>Generate your first quote</h1>
        <div className='app-wrapper_notes'>
          <p><b>Quote</b>: <span>{quote}</span></p>
          <p><b>Author</b>: <span>{author}</span></p>
            </div>
        
        </div>
        )}
        <button onClick={getPhrazes}>
          GENERATE
        </button>
      </div>
  </div>
  
  );
}

export default App;
