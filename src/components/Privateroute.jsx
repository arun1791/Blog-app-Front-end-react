import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';

import { isLoggedIn } from '../auth';

const Privateroute=()=> {

   
//     if(isLoggedIn){
//         return <Outlet/>
//     }
//     else
//     {
//         return <Navigate to={"/login"}/>
//     }
//   return (
//     <>
    
//     <div>this is private Privateroute</div>
//     <Outlet/>
//     </>
//   )
    return isLoggedIn()?<Outlet/> : <Navigate to={"/login"}/>
}

export default Privateroute;