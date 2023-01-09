import React from 'react';
import gif_3 from "../assets/gif_3.gif";

const Loader2 = () => {
    return (
        <div className='loader2'>
            <img src={gif_3} alt="" />
            <p style={{fontSize:"2rem"}}>Loading... <i className="fa-solid fa-spinner rotate"></i></p>
        </div>
    );
};

export default Loader2;