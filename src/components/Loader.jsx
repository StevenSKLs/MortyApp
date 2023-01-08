import React from 'react';
import gif_4 from "../assets/gif_4.gif";

const Loader = () => {
    return (
        <div className='loader'>
            <img src={gif_4} alt="" />
            <p style={{fontSize:"2rem"}}>Loading... <i className="fa-solid fa-spinner rotate"></i></p>
        </div>
    );
};

export default Loader;