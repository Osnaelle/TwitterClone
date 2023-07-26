import { Outlet } from "react-router-dom";
import { Siderbar } from "../components/Siderbar";

import './Default.css'
export function Default() {
    return (
        <div className='layout'>

            < Siderbar />

            <div className='content'>
               <Outlet/>
             </div>
             </div>   
                
                )
            
}