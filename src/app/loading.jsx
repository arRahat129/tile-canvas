import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const LoadingGlobal = () => {
    return (
        <div className='h-screen mx-auto flex items-center'>
            <RotatingLines />
        </div>
    );
};

export default LoadingGlobal;