import React from 'react';
import mortys from "./mortys";

const Loader = () => {
    return (
        <div className='loader'>
            <img src={mortys.gifs[3]} alt="" />
            <p style={{fontSize:"2rem"}}>Loading... <i className="fa-solid fa-spinner rotate"></i></p>
        </div>
    );
};

export default Loader;