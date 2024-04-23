import React, {useState, useEffect} from 'react'
import {createRoot} from 'react-dom/client'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('count', count)
    const intervalId = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => {
      console.log('unmounting')
      clearInterval(intervalId)
    }
  }, [])
  return <p>{count} seconds</p>
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
