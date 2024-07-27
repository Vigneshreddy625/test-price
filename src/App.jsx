import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Pricing from "./components/Pricing"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pricing/>
    </>
  )
}

export default App
