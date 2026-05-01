import React from 'react';
import { Bars } from 'react-loader-spinner';

const DetailsLoading = () => {
    return (
        <div className='h-[50vh] md:h-screen mx-auto flex items-center justify-center'>
            <Bars />
        </div>
    );
};

export default DetailsLoading;