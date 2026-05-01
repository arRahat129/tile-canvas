import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const LoadingGlobal = () => {
    return (
        <div className='h-[50vh] md:h-screen mx-auto flex items-center justify-center'>
            <RotatingLines />
        </div>
    );
};

export default LoadingGlobal;