import React from 'react';
import { Bars } from 'react-loader-spinner';

const DetailsLoading = () => {
    return (
        <div className='h-screen mx-auto flex items-center'>
            <Bars />
        </div>
    );
};

export default DetailsLoading;