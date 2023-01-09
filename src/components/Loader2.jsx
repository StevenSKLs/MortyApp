import React from 'react';
import mortys from "./mortys";

const Loader2 = () => {
    return (
        <div className='loader2'>
            <img src={mortys.gifs[2]} alt="" />
            <p style={{fontSize:"2rem"}}>Loading... <i className="fa-solid fa-spinner rotate"></i></p>
        </div>
    );
};

export default Loader2;