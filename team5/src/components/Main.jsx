import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Home'
import AddTicket from './AddTicket'
import Header from './Header'
import Waitlist from './Waitlist'


const Main = () => {

    const [userData, setUserData] = useState(null)

    return (
        <>
       <div className="main">
           <div className='header-container'>
            
               
           </div>
           <Routes>
               
               <Route path='/' element={<Home userData={userData} setUserData={setUserData}/>}/>
               <Route path='/addticket' element={<AddTicket userData={userData} setUserData={setUserData} />}/>  
               <Route path='/waitlist' element={<Waitlist userData={userData} setUserData={setUserData} />}/>  
   
           </Routes>
          
       </div>

       </>
   )

}
export default Main