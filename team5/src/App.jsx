import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import DataContext from './Context'
import Authentication from './components/Login/Authentication'
import Profile from './components/Login/Profile'




function App() {

  
  const [ticketInfo, setTicketInfo] = useState({
    first: '',
    last: '',
    topic: ''
  })

  return (
    <>
      <div className="App">
  
      <DataContext.Provider value={{ ticketInfo, setTicketInfo }}>
        <Main/>
      </DataContext.Provider>
      </div>
    </>
  )
}

export default App
