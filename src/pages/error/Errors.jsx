import React from "react";
import './errors.css'
import err from "./404.png"

const Errors = () => {


    return (
        <div className="errors">
            <img src={err} alt="Error" className='image'></img>
            <h2 className="note">In Valid Data Enter</h2>
        </div>
    )
}

export default Errors