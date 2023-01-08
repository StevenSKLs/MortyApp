import React from 'react';

const Page = ({page, setPage, quantyPage, loaders, setLoaders}) => {

setTimeout(() => {setLoaders(!true)}, 3000000);

      

    return (
        <div className='Input_2'>
            { page > 1 && 
            <button onClick={() => {setPage(page -1) ; setLoaders(!loaders)}}>Anterios</button>}
            <p>{page} de {quantyPage}
            </p>{ quantyPage > page && 
            <button onClick={() => {setPage(page +1); setLoaders(!loaders)}}>Proximo</button>}
        </div>
    );
};

export default Page;