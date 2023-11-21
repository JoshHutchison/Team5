import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Home'


const Main = () => {

    const [userData, setUserData] = useState(null)

    return (
        <>
       <div className="main">
           <div className='header-container'>
            
               
           </div>
           <Routes>
               
               <Route path='/' element={<Home userData={userData} setUserData={setUserData}/>}/>
               {/* <Route path='/addticket' element={<AddTicket userData={userData} setUserData={setUserData} />}/>  
               <Route path='/waitlist' element={<WaitList userData={userData} setUserData={setUserData} />}/>   */}
            
               
   
           </Routes>
          
       </div>

       </>
   )

}
export default Main