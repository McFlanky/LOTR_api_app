import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dash_Board from './components/Dash_Board'



function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className='App'>
        <header>
          this is a header
        </header>
        <main>
          <img src='https://i.pinimg.com/originals/7d/ca/bd/7dcabd9ab36e0f9e329cf8f710e85fdd.jpg'
          alt='lotr-background-img' className='bg-image'/>
        <Dash_Board/>
        </main>
        {/* <footer>This is the footer</footer> */}
      </div>

)
}

export default App
