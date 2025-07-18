import { useState } from 'react'
import './App.css'
import Shortener, { mockShortenedUrl } from './Shortener.jsx'
import Original from './Original.jsx'

function App() {
  const [count, setCount] = useState(0)
  // const [shortenedUrl, setShortenedUrl] = useState(value => value || {mockShortenedUrl});
  const [hasSubmit,setHasSubmit] = useState(initialState => false);

  return (
    <>
      <div className="app-container">
        <h2>Website URL shortener</h2>
        <Original url="Original URL" />
        <Shortener url="Shortened URL"/>
      </div>  
    </>
  )
}

export default App
