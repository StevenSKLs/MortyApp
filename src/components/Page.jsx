import React from 'react';
import img1 from "../assets/rick.png";
import img2 from "../assets/morty.png";

const Page = ({page, setPage, quantyPage, loaders, setLoaders}) => {

setTimeout(() => {setLoaders(!true)}, 3000);

      

    return (
        <div className='Input_2'>
            { page > 1 && 
        <img src={`${img2}`} alt="" onClick={() => {setPage(page -1) ; setLoaders(!loaders)}}/>}
         <p>{page} the {quantyPage}
        </p>{ quantyPage > page && 
        <img src={`${img1}`} alt="" onClick={() => {setPage(page +1); setLoaders(!loaders)}}/>}
        </div>
    );
};

export default Page;