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
  
      <DataContext.Provider value={{ ticketInfo, setTicketInfo }}>
        <Main/>
      </DataContext.Provider>
    </>
  )
}

export default App
