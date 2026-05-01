import React from 'react';
import { Triangle } from 'react-loader-spinner';

const AllTilesLoader = () => {
    return (
        <div className='h-[50vh] md:h-screen mx-auto flex items-center justify-center'>
            <Triangle />
        </div>
    );
};

export default AllTilesLoader;