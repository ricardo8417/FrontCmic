import React from "react";

import {Navigate,Outlet} from 'react-router-dom'

 export const RoutePrivated=({canActive,redirectPath='/login'})=>{
 
if(!canActive){
    return <Navigate to ={redirectPath} replace />
}
return <Outlet />
}