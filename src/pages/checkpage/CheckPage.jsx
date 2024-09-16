import React from "react";
import './checkpage.css'
import Single from "../single/Single";
import Errors from "../error/Errors"
import { useLocation } from 'react-router-dom';

const useSearchParams = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams;
  
  };

const CheckPage = () =>{

    const searchParams = useSearchParams();
    const name = searchParams.get('name');

    return(
        <div className="checkpage">
            {/* checkpage */}
            {/* <Single/> */}
            {name==null? <Errors/> : <Single/>}
        </div>
    )
}

export default CheckPage